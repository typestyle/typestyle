import { cssFunction } from '../';
import { ensurePercent, formatPercent } from '../formatting';
import * as types from "../types";

const isTypeArraySupported = typeof Float32Array !== 'undefined';

const RGB = 0, HSL = 1,
  R = 0, G = 1, B = 2,
  H = 0, S = 1, L = 2, A = 3;

/**
 * Map of Color converters.  By subtracting the from-format from the to-format, we can
 * quickly map to the right converter. 1-2 and 2-1 yield different results, so this
 * allows us to choose the right converter observing the direction correcly
 */
const converters = {
  [RGB - HSL]: RGBtoHSL,
  [HSL - RGB]: HSLtoRGB
};

/**
 * Describe the ceiling for each color channel for each format
 */
const maxChannelValues = {
  [RGB]: colorArray(255, 255, 255, 1),
  [HSL]: colorArray(360, 1, 1, 1)
};

/**
 * Creates a color from a hex color code or named color.
 * e.g. color('red') or color('#FF0000') or color('#F00'))
 */
export function color(value: types.CSSNamedColor | string): ColorHelper {
  return parseNamedColor(value) || parseHexCode(value) || parseNamedColor('red') !;
}

/**
 * Creates a color from hue, saturation, and lightness.  Alpha is automatically set to 100%
 */
export function hsl(hue: number, saturation: string | number, lightness: string | number): ColorHelper {
  return new ColorHelper(HSL, modDegrees(hue), ensurePercent(saturation), ensurePercent(lightness), 1, false);
}

/**
 * Creates a color from hue, saturation, lightness, and alpha
 */
export function hsla(hue: number, saturation: string | number, lightness: string | number, opacity: string | number): ColorHelper {
  return new ColorHelper(HSL, modDegrees(hue), ensurePercent(saturation), ensurePercent(lightness), ensurePercent(opacity), true);
}

/**
 * Creates a color form the red, blue, and green color space.  Alpha is automatically set to 100%
 */
export function rgb(red: number, blue: number, green: number): ColorHelper {
  return new ColorHelper(RGB, red, blue, green, 1, false);
}

/**
 * Creates a color form the red, blue, green, and alpha in the color space
 */
export function rgba(red: number, blue: number, green: number, alpha: string | number): ColorHelper {
  return new ColorHelper(RGB, red, blue, green, ensurePercent(alpha), true);
}

/**
 * A CSS Color.  Includes utilities for converting between color types
 */
export class ColorHelper {
  public type: 'color' = 'color';
  private _hasAlpha: boolean;
  private _values: number[];
  private _format: number;

  constructor(format: number, c0: number, c1: number, c2: number, c3: number, hasAlpha: boolean) {
    this._format = format;
    this._hasAlpha = hasAlpha;
    this._values = colorArray(
      clampColor(format, 0, c0),
      clampColor(format, 1, c1),
      clampColor(format, 2, c2),
      clampColor(format, 3, c3)
    );
  }

  /**
   * Converts the stored color into string form (which is used by Free Style)
   */
  public toString(): string {
    const v = this._values;
    const c1 = roundFloat(v[R], 2);
    const c2 = roundFloat(v[G], 2);
    const c3 = roundFloat(v[2], 2);
    const c4 = roundFloat(v[3], 5);
    const format = this._format;
    const hasAlpha = this._hasAlpha;

    switch (format) {
      case HSL:
        return hasAlpha
          ? cssFunction('hsla', c1, formatPercent(c2), formatPercent(c3), c4)
          : cssFunction('hsl', c1, formatPercent(c2), formatPercent(c3));
      case RGB:
        return hasAlpha
          ? cssFunction('rgba', c1, c2, c3, c4)
          : cssFunction('rgb', c1, c2, c3);
    }
    // throw an error?
    throw new Error('Invalid color format');
  }

  /**
   * Converts to hex rgb(255, 255, 255) to #FFFFFF
   */
  public toHexString(): string {
    const v = (this._format === RGB ? this : this.toRGB())._values;
    return '#' + (toHex(v[R]) + toHex(v[G]) + toHex(v[B])).toUpperCase();
  }

  /**
   * Converts to the Hue, Saturation, Lightness color space
   */
  public toHSL(): ColorHelper {
    const v = this._values;
    return convert(this._format, HSL, v[H], v[S], v[L], 1, false);
  }

  /**
   * Converts to the Hue, Saturation, Lightness color space and adds an alpha channel
   */
  public toHSLA(): ColorHelper {
    const v = this._values;
    return convert(this._format, HSL, v[H], v[S], v[L], v[A], true);
  }

  /**
   * Converts to the Red, Green, Blue color space
   */
  public toRGB(): ColorHelper {
    const v = this._values;
    return convert(this._format, RGB, v[R], v[G], v[B], 1, false);
  }

  /**
   * Converts to the Red, Green, Blue color space and adds an alpha channel
   */
  public toRGBA(): ColorHelper {
    const v = this._values;
    return convert(this._format, RGB, v[R], v[G], v[B], v[A], true);
  }

  public red(): number {
    return (this._format === RGB ? this : this.toRGB())._values[0];
  }

  public green(): number {
    return (this._format === RGB ? this : this.toRGB())._values[1];
  }

  public blue(): number {
    return (this._format === RGB ? this : this.toRGB())._values[2];
  }

  public hue(): number {
    return (this._format === HSL ? this : this.toHSL())._values[0];
  }

  public saturation(): number {
    return (this._format === HSL ? this : this.toHSL())._values[1];
  }

  public lightness(): number {
    return (this._format === HSL ? this : this.toHSL())._values[2];
  }

  public alpha(): number {
    return this._values[A];
  }

  public opacity(): number {
    return this.alpha();
  }

  public invert(): ColorHelper {
    const v = (this._format === RGB ? this : this.toRGB())._values;
    return new ColorHelper(RGB, 255 - v[R], 255 - v[G], 255 - v[B], v[A], this._hasAlpha);
  }

  public lighten(percent: string | number): ColorHelper {
    const v = (this._format === HSL ? this : this.toHSL())._values;
    const max = maxChannelValues[HSL][L];
    const l = v[L] + (max * ensurePercent(percent));
    return new ColorHelper(HSL, v[H], v[S], l, v[A], this._hasAlpha);
  }

  public darken(percent: string | number): ColorHelper {
    const v = (this._format === HSL ? this : this.toHSL())._values;
    const max = maxChannelValues[HSL][L];
    const l = v[L] - (max * ensurePercent(percent));
    return new ColorHelper(HSL, v[H], v[S], l, v[A], this._hasAlpha);
  }

  public saturate(percent: string | number): ColorHelper {
    const v = (this._format === HSL ? this : this.toHSL())._values;
    const max = maxChannelValues[HSL][S];
    const s = v[S] + (max * ensurePercent(percent));
    return new ColorHelper(HSL, v[H], s, v[L], v[A], this._hasAlpha);
  }

  public desaturate(percent: string | number): ColorHelper {
    const v = (this._format === HSL ? this : this.toHSL())._values;
    const max = maxChannelValues[HSL][S];
    const s = v[S] - (max * ensurePercent(percent));
    return new ColorHelper(HSL, v[H], s, v[L], v[A], this._hasAlpha);
  }

  public grayscale() {
    return this.desaturate(1);
  }

  public fade(percent: string | number): ColorHelper {
    const v = this._values;
    const a = clampColor(RGB, A, ensurePercent(percent));
    return new ColorHelper(this._format, v[R], v[G], v[B], a, true);
  }

  public fadeOut(percent: string | number): ColorHelper {
    const v = this._values;
    const a = clampColor(RGB, A, v[A] - ensurePercent(percent));
    return new ColorHelper(this._format, v[R], v[G], v[B], a, true);
  }

  public fadeIn(percent: string | number): ColorHelper {
    const v = this._values;
    const a = clampColor(RGB, A, v[A] + ensurePercent(percent));
    return new ColorHelper(this._format, v[R], v[G], v[B], a, true);
  }

  public mix(mixin: types.CSSColor, weight?: number): ColorHelper {
    const color1 = this;
    const color2 = ensureColor(mixin);
    const c1 = (color1._format === RGB ? color1 : color1.toRGB())._values;
    const c2 = (color2._format === RGB ? color2 : color2.toRGB())._values;
    const p = weight === undefined ? .5 : weight;
    const w = 2 * p - 1;
    const a = Math.abs(c1[A] - c2[A]);
    const w1 = (((w * a === -1) ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
    const w2 = 1 - w1;

    return new ColorHelper(
      RGB,
      Math.round((c1[R] * w1 + c2[R] * w2)),
      Math.round((c1[G] * w1 + c2[G] * w2)),
      Math.round((c1[B] * w1 + c2[B] * w2)),
      c1[A] * p + c2[A] * (1 - p),
      color1._hasAlpha || color2._hasAlpha
    );
  }

  public tint(weight: number): ColorHelper {
    return white.mix(this, weight);
  }

  public shade(weight: number): ColorHelper {
    return black.mix(this, weight);
  }

  public spin(degrees: number): ColorHelper {
    const v = (this._format === HSL ? this : this.toHSL())._values;
    return new ColorHelper(HSL, modDegrees(v[H] + degrees), v[S], v[L], v[A], this._hasAlpha);
  }

  // TODO
  //complement($color)
  //scale-color($color, [$red], [$green], [$blue], [$saturation], [$lightness], [$alpha])
  //ie-hex-str($color)
}

/**
 * Named colors in the CSS spec. They must be loaded after exported functions and constructor
 *
 */
const namedColors: { [key: string]: ColorHelper } = {
  aliceblue: rgb(240, 248, 245),
  antiquewhite: rgb(250, 235, 215),
  aqua: rgb(0, 255, 255),
  aquamarine: rgb(127, 255, 212),
  azure: rgb(240, 255, 255),
  beige: rgb(245, 245, 220),
  bisque: rgb(255, 228, 196),
  black: rgb(0, 0, 0),
  blanchedalmond: rgb(255, 235, 205),
  blue: rgb(0, 0, 255),
  blueviolet: rgb(138, 43, 226),
  brown: rgb(165, 42, 42),
  burlywood: rgb(222, 184, 35),
  cadetblue: rgb(95, 158, 160),
  chartreuse: rgb(127, 255, 0),
  chocolate: rgb(210, 105, 30),
  coral: rgb(255, 127, 80),
  cornflowerblue: rgb(100, 149, 237),
  cornsilk: rgb(255, 248, 220),
  crimson: rgb(220, 20, 60),
  cyan: rgb(0, 255, 255),
  darkblue: rgb(0, 0, 139),
  darkcyan: rgb(0, 139, 139),
  darkgoldenrod: rgb(184, 134, 11),
  darkgray: rgb(169, 169, 169),
  darkgreen: rgb(0, 100, 0),
  darkgrey: rgb(169, 169, 169),
  darkkhaki: rgb(189, 183, 107),
  darkmagenta: rgb(139, 0, 139),
  darkolivegreen: rgb(85, 107, 47),
  darkorange: rgb(255, 140, 0),
  darkorchid: rgb(153, 50, 204),
  darkred: rgb(139, 0, 0),
  darksalmon: rgb(233, 150, 122),
  darkseagreen: rgb(143, 188, 143),
  darkslateblue: rgb(72, 61, 139),
  darkslategray: rgb(47, 79, 79),
  darkslategrey: rgb(47, 79, 79),
  darkturquoise: rgb(0, 206, 209),
  darkviolet: rgb(148, 0, 211),
  deeppink: rgb(255, 20, 147),
  deepskyblue: rgb(0, 191, 255),
  dimgray: rgb(105, 105, 105),
  dimgrey: rgb(105, 105, 105),
  dodgerblue: rgb(30, 144, 255),
  firebrick: rgb(178, 34, 34),
  floralwhite: rgb(255, 250, 240),
  forestgreen: rgb(34, 139, 34),
  fuchsia: rgb(255, 0, 255),
  gainsboro: rgb(220, 220, 220),
  ghostwhite: rgb(248, 248, 255),
  gold: rgb(255, 215, 0),
  goldenrod: rgb(218, 165, 32),
  gray: rgb(128, 128, 128),
  green: rgb(0, 128, 0),
  greenyellow: rgb(173, 255, 47),
  grey: rgb(128, 128, 128),
  honeydew: rgb(240, 255, 240),
  hotpink: rgb(255, 105, 180),
  indianred: rgb(205, 92, 92),
  indigo: rgb(75, 0, 130),
  ivory: rgb(255, 255, 240),
  khaki: rgb(240, 230, 140),
  lavender: rgb(230, 230, 250),
  lavenderblush: rgb(255, 240, 245),
  lawngreen: rgb(124, 252, 0),
  lemonchiffon: rgb(255, 250, 205),
  lightblue: rgb(173, 216, 230),
  lightcoral: rgb(240, 128, 128),
  lightcyan: rgb(224, 255, 255),
  lightgoldenrodyellow: rgb(250, 250, 210),
  lightgray: rgb(211, 211, 211),
  lightgreen: rgb(144, 238, 144),
  lightgrey: rgb(211, 211, 211),
  lightpink: rgb(255, 182, 193),
  lightsalmon: rgb(255, 160, 122),
  lightseagreen: rgb(32, 178, 170),
  lightskyblue: rgb(135, 206, 250),
  lightslategray: rgb(119, 136, 153),
  lightslategrey: rgb(119, 136, 153),
  lightsteelblue: rgb(176, 196, 222),
  lightyellow: rgb(255, 255, 224),
  lime: rgb(0, 255, 0),
  limegreen: rgb(50, 205, 50),
  linen: rgb(250, 240, 230),
  maroon: rgb(128, 0, 0),
  mediumaquamarine: rgb(102, 205, 170),
  mediumblue: rgb(0, 0, 205),
  mediumorchid: rgb(186, 85, 211),
  mediumpurple: rgb(147, 112, 219),
  mediumseagreen: rgb(60, 179, 113),
  mediumslateblue: rgb(123, 104, 238),
  mediumspringgreen: rgb(0, 250, 154),
  mediumturquoise: rgb(72, 209, 204),
  mediumvioletred: rgb(199, 21, 133),
  midnightblue: rgb(25, 25, 112),
  mintcream: rgb(245, 255, 250),
  mistyrose: rgb(255, 228, 225),
  moccasin: rgb(255, 228, 181),
  navajowhite: rgb(255, 222, 173),
  navy: rgb(0, 0, 128),
  oldlace: rgb(253, 245, 230),
  olive: rgb(128, 128, 0),
  olivedrab: rgb(107, 142, 35),
  orange: rgb(255, 165, 0),
  purple: rgb(128, 0, 128),
  rebeccapurple: rgb(102, 51, 153),
  red: rgb(255, 0, 0),
  silver: rgb(192, 192, 192),
  teal: rgb(0, 128, 128),
  transparent: rgba(0, 0, 0, 0),
  white: rgb(255, 255, 255),
  yellow: rgb(255, 255, 0),
};

export const {aliceblue, antiquewhite, aqua, aquamarine, azure, beige, bisque, black, blanchedalmond, blue,
  blueviolet, brown, burlywood, cadetblue, chartreuse, chocolate, coral, cornflowerblue, cornsilk,
  crimson, cyan, darkblue, darkcyan, darkgoldenrod, darkgray, darkgreen, darkgrey, darkkhaki,
  darkmagenta, darkolivegreen, darkorange, darkorchid, darkred, darksalmon, darkseagreen,
  darkslateblue, darkslategray, darkslategrey, darkturquoise, darkviolet, deeppink, deepskyblue,
  dimgray, dimgrey, dodgerblue, firebrick, floralwhite, forestgreen, fuchsia, gainsboro,
  ghostwhite, gold, goldenrod, gray, green, greenyellow, grey, honeydew, hotpink, indianred,
  indigo, ivory, khaki, lavender, lavenderblush, lawngreen, lemonchiffon, lightblue, lightcoral,
  lightcyan, lightgoldenrodyellow, lightgray, lightgreen, lightgrey, lightpink, lightsalmon,
  lightseagreen, lightskyblue, lightslategray, lightslategrey, lightsteelblue, lightyellow, lime,
  limegreen, linen, maroon, mediumaquamarine, mediumblue, mediumorchid, mediumpurple, mediumseagreen,
  mediumslateblue, mediumspringgreen, mediumturquoise, mediumvioletred, midnightblue, mintcream,
  mistyrose, moccasin, navajowhite, navy, oldlace, olive, olivedrab, orange, purple,
  rebeccapurple, red, silver, teal, transparent, white, yellow } = namedColors;

function toHex(n: number): string {
  return (n < 16 ? '0' : '') + Math.round(n).toString(16);
}

function modDegrees(n: number): number {
  // note: maybe there is a way to simplify this
  return ((n < 0 ? 360 : 0) + (n % 360)) % 360;
}

function roundFloat(n: number, places: number): number {
  return Math.round(10 ** places * n) * (10 ** -places);
}

function RGBtoHSL(c0: number, c1: number, c2: number, c3: number, hasAlpha: boolean): ColorHelper {
  const r = c0 / 255;
  const g = c1 / 255;
  const b = c2 / 255;
  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);
  const delta = max - min;

  let h: number;
  if (max === min) {
    h = 0;
  } else if (r === max) {
    h = (g - b) / delta;
  } else if (g === max) {
    h = 2 + (b - r) / delta;
  } else if (b === max) {
    h = 4 + (r - g) / delta;
  } else {
    h = 0;
  }

  h = Math.min(h * 60, 360);

  if (h < 0) {
    h += 360;
  }

  let l = (min + max) / 2;

  let s: number;
  if (max === min) {
    s = 0;
  } else if (l <= 0.5) {
    s = delta / (max + min);
  } else {
    s = delta / (2 - max - min);
  }

  return new ColorHelper(HSL, h, s, l, c3, hasAlpha);
};


function HSLtoRGB(c0: number, c1: number, c2: number, c3: number, hasAlpha: boolean): ColorHelper {
  const h = c0 / 360;
  const s = c1;
  const l = c2;

  if (s === 0) {
    const val = l * 255;
    return new ColorHelper(RGB, val, val, val, c3, hasAlpha);
  }

  const t2 = l < .5 ? l * (1 + s) : l + s - l * s;
  const t1 = 2 * l - t2;

  let r = 0, g = 0, b = 0;
  for (let i = 0; i < 3; i++) {
    let t3 = h + 1 / 3 * -(i - 1);
    if (t3 < 0) {
      t3++;
    }
    if (t3 > 1) {
      t3--;
    }

    let val: number;
    if (6 * t3 < 1) {
      val = t1 + (t2 - t1) * 6 * t3;
    } else if (2 * t3 < 1) {
      val = t2;
    } else if (3 * t3 < 2) {
      val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
    } else {
      val = t1;
    }
    val *= 255;

    // manually set variables instead of using an array
    if (i === 0) {
      r = val;
    } else if (i === 1) {
      g = val;
    } else {
      b = val;
    }
  }

  return new ColorHelper(RGB, r, g, b, c3, hasAlpha);
};

/**
 * Converts from one format to another format
 */
function convert(fromFormat: number, toFormat: number, c0: number, c1: number, c2: number, c3: number, hasAlpha: boolean): ColorHelper {
  return fromFormat === toFormat
    ? new ColorHelper(fromFormat, c0, c1, c2, c3, hasAlpha)
    : converters[fromFormat - toFormat](c0, c1, c2, c3, hasAlpha);
}

function colorArray(c0: number, c1: number, c2: number, c3: number): number[] {
  if (!isTypeArraySupported) {
    return [c0 || 0, c1 || 0, c2 || 0, c3 || 0];
  }
  const a = new Float32Array(4);
  a[0] = c0 || 0; a[1] = c1 || 0; a[2] = c2 || 0; a[3] = c3 || 0;
  return a as any as number[];
}

function clampColor(format: number, channel: number, value: number): number {
  const min = 0;
  const max = maxChannelValues[format][channel];
  return value < min ? min : value > max ? max : value;
}

function ensureColor(c: types.CSSColor): ColorHelper {
  return c instanceof ColorHelper ? c as ColorHelper : color(c as string);
}

function parseNamedColor(stringValue: string): ColorHelper | undefined {
  return namedColors[stringValue] || undefined;
}

function parseHexCode(stringValue: string): ColorHelper | undefined {
  const match = stringValue.match(/#(([a-f0-9]{6})|([a-f0-9]{3}))$/i);
  if (!match) {
    return undefined;
  }

  const hex = match[1];
  const hexColor = parseInt(
    hex.length === 3
      ? hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
      : hex,
    16
  );
  const r = (hexColor >> 16) & 0xFF;
  const b = (hexColor >> 8) & 0xFF;
  const g = hexColor & 0xFF;

  return new ColorHelper(RGB, r, b, g, 1, false);
};
