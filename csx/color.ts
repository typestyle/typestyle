import { cssFunction } from '../src';
import { ensurePercent, formatPercent } from '../src/formatting'

type Color3 = [number, number, number];
type Color4 = [number, number, number, number];

/**
 * Color format as bit flags (might just be able to use regular numbers for this)
 */
const enum ColorFormat {
  RGB = 1 << 0,
  HSL = 1 << 1
};

/**
 * Map of Color converters.  By subtracting the from-format from the to-format, we can
 * quickly map to the right converter. 1-2 and 2-1 yield different results, so this
 * allows us to choose the right converter observing the direction correcly
 */
const converters = {
  [ColorFormat.RGB - ColorFormat.HSL]: RGBtoHSL,
  [ColorFormat.HSL - ColorFormat.RGB]: HSLtoRGB
};

/**
 * Named colors in the CSS spec.
 * transparent is not technically a named color, but it fits into this pattern
 */
const namedColors: { [key: string]: Color4 } = {
  transparent: [0, 0, 0, 0],
  black: [0, 0, 0, 1],
  silver: [192, 192, 192, 1],
  gray: [128, 128, 128, 1],
  white: [255, 255, 255, 1],
  maroon: [128, 0, 0, 1],
  red: [255, 0, 0, 1],
  purple: [128, 0, 128, 1],
  fuchsia: [255, 0, 255, 1],
  green: [0, 128, 0, 1],
  lime: [0, 255, 0, 1],
  olive: [128, 128, 0, 1],
  yellow: [255, 255, 0, 1],
  navy: [0, 0, 128, 1],
  blue: [0, 0, 255, 1],
  teal: [0, 128, 128, 1],
  aqua: [0, 255, 255, 1]
};

/**
 * Converts from one format to another format
 */
function convert(fromFormat: ColorFormat, toFormat: ColorFormat, values: Color3 | Color4): Color3 | Color4 {
  return fromFormat === toFormat
    ? values.slice(0) as Color3 | Color4
    : converters[fromFormat - toFormat](values);
}

/**
 * Creates a color from a hex color code or named color.
 * e.g. color('red') or color('#FF0000') or color('#F00'))
 */
export function color(value: string): ColorHelper {
  const [c0, c1, c2, c3] = namedColors[value] || parseHexCode(value) || namedColors['red'];
  return new ColorHelper(ColorFormat.RGB, c0, c1, c2, c3, (c3 < 1));
}

/**
 * Creates a color from hue, saturation, and lightness.  Alpha is automatically set to 100%
 */
export function hsl(hue: number, saturation: CSSPercentage | number, lightness: CSSPercentage | number): ColorHelper {
  return new ColorHelper(ColorFormat.HSL, hue, ensurePercent(saturation), ensurePercent(lightness), 1, false);
}

/**
 * Creates a color from hue, saturation, lightness, and alpha
 */
export function hsla(hue: number, saturation: CSSPercentage | number, lightness: CSSPercentage | number, opacity: CSSPercentage | number): ColorHelper {
  return new ColorHelper(ColorFormat.HSL, hue, ensurePercent(saturation), ensurePercent(lightness), ensurePercent(opacity), true);
}

/**
 * Creates a color form the red, blue, and green color space.  Alpha is automatically set to 100%
 */
export function rgb(red: number, blue: number, green: number): ColorHelper {
  return new ColorHelper(ColorFormat.RGB, red, blue, green, 1, false);
}

/**
 * Creates a color form the red, blue, green, and alpha in the color space
 */
export function rgba(red: number, blue: number, green: number, alpha: CSSPercentage | number): ColorHelper {
  return new ColorHelper(ColorFormat.RGB, red, blue, green, ensurePercent(alpha), true);
}

/**
 * A CSS Color.  Includes utilities for converting between color types
 */
export class ColorHelper {
  public type: 'color' = 'color';
  private _hasAlpha: boolean;
  private _values: Color4;
  private _format: ColorFormat;

  constructor(colorFormat: ColorFormat, c1: number, c2: number, c3: number, c4: number, hasAlpha: boolean) {
    this._format = colorFormat;
    this._values = [c1, c2, c3, c4];
    this._hasAlpha = hasAlpha;
  }

  /**
   * Converts to the Hue, Saturation, Lightness color space
   */
  public toHSL(): ColorHelper {
    const [v0, v1, v2] = convert(this._format, ColorFormat.HSL, this._values);
    return new ColorHelper(ColorFormat.HSL, v0, v1, v2, 1, false);
  }

  /**
   * Converts to the Hue, Saturation, Lightness color space and adds an alpha channel
   */
  public toHSLA(): ColorHelper {
    const [v0, v1, v2] = convert(this._format, ColorFormat.HSL, this._values);
    return new ColorHelper(ColorFormat.HSL, v0, v1, v2, this._values[3], true);
  }

  /**
   * Converts to the Red, Green, Blue color space
   */
  public toRGB(): ColorHelper {
    const [v0, v1, v2] = convert(this._format, ColorFormat.RGB, this._values);
    return new ColorHelper(ColorFormat.RGB, v0, v1, v2, 1, false);
  }

  /**
   * Converts to the Red, Green, Blue color space and adds an alpha channel
   */
  public toRGBA(): ColorHelper {
    const [v0, v1, v2] = convert(this._format, ColorFormat.RGB, this._values);
    return new ColorHelper(ColorFormat.RGB, v0, v1, v2, this._values[3], true);
  }

  /**
   * Converts the stored color into string form (which is used by Free Style)
   */
  public toString(): string {
    const [c1, c2, c3, c4] = this._values;
    const format = this._format;
    const hasAlpha = this._hasAlpha;

    switch (format) {
      case ColorFormat.HSL:
        return hasAlpha
          ? cssFunction('hsla', c1, formatPercent(c2), formatPercent(c3), c4)
          : cssFunction('hsl', c1, formatPercent(c2), formatPercent(c3));
      case ColorFormat.RGB:
        return hasAlpha
          ? cssFunction('rgba', c1, c2, c3, c4)
          : cssFunction('rgb', c1, c2, c3);
    }
    // throw an error?
    throw new Error('Invalid color format');
  }
}

function RGBtoHSL(rgb: Color3): Color3 {
  const r = rgb[0] / 255;
  const g = rgb[1] / 255;
  const b = rgb[2] / 255;
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

  return [h, s, l];
};


function HSLtoRGB(hsl: Color3): Color3 {
  const h = hsl[0] / 360;
  const s = hsl[1];
  const l = hsl[2];

  if (s === 0) {
    const val = l * 255;
    return [val, val, val];
  }

  const t2 = l < .5 ? l * (1 + s) : l + s - l * s;
  const t1 = 2 * l - t2;

  const rgb = [0, 0, 0];
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

    rgb[i] = val * 255;
  }

  return rgb as Color3;
};

function parseHexCode(stringValue: string): Color4 | undefined {
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

  return [(hexColor >> 16) & 0xFF, (hexColor >> 8) & 0xFF, hexColor & 0xFF, 1];
};
