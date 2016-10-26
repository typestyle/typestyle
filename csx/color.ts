import { cssFunction, ensureString } from '../src';

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

const namedColors: { [key: string]: Color3 } = {
  black: [0, 0, 0],
  silver: [192, 192, 192],
  gray: [128, 128, 128],
  white: [255, 255, 255],
  maroon: [128, 0, 0],
  red: [255, 0, 0],
  purple: [128, 0, 128],
  fuchsia: [255, 0, 255],
  green: [0, 128, 0],
  lime: [0, 255, 0],
  olive: [128, 128, 0],
  yellow: [255, 255, 0],
  navy: [0, 0, 128],
  blue: [0, 0, 255],
  teal: [0, 128, 128],
  aqua: [0, 255, 255]
};

function convert(fromFormat: ColorFormat, toFormat: ColorFormat, values: Color3 | Color4): Color3 | Color4 {
  const converter = converters[fromFormat - toFormat];
  return converter(values);
}

export function color(value: string): CSSType<'color'> {
  const namedColor = namedColors[value];
  if (namedColor) {
    return new ColorHelper(ColorFormat.RGB, namedColor[0], namedColor[1], namedColor[2], 1, false);
  }
  const hexColor = parseHexCode(value);
  if (hexColor) {
    return new ColorHelper(ColorFormat.RGB, hexColor[0], hexColor[1], hexColor[2], 1, false);
  }

  // todo: css function parsing hsl, hsla, rgb, rgba

  throw new Error('invalid color');
}

export function hsl(hue: number, saturation: CSSPercentage, lightness: CSSPercentage): CSSType<'color'> {
  return new ColorHelper(ColorFormat.HSL, hue, percent(saturation), percent(lightness), 1, false);
}

export function hsla(hue: number, saturation: CSSPercentage, lightness: CSSPercentage, opacity: number): CSSType<'color'> {
  return new ColorHelper(ColorFormat.HSL, hue, percent(saturation), percent(lightness), opacity, true);
}

export function rgb(red: number, blue: number, green: number): CSSType<'color'> {
  return new ColorHelper(ColorFormat.RGB, red, blue, green, 1, false);
}

export function rgba(red: number, blue: number, green: number, alpha: number): CSSType<'color'> {
  return new ColorHelper(ColorFormat.RGB, red, blue, green, alpha, true);
}


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

  public toHSL() {
    const values = convert(this._format, ColorFormat.HSL, this._values);
    return new ColorHelper(ColorFormat.HSL, values[0], values[1], values[2], 1, false);
  }

  public toHSLA() {
    const values = convert(this._format, ColorFormat.HSL, this._values);
    return new ColorHelper(ColorFormat.HSL, values[0], values[1], values[2], values[3], true);
  }

  public toRGB() {
    const values = convert(this._format, ColorFormat.RGB, this._values);
    return new ColorHelper(ColorFormat.RGB, values[0], values[1], values[2], 1, false);
  }

  public toRGBA() {
    const values = convert(this._format, ColorFormat.RGB, this._values);
    return new ColorHelper(ColorFormat.RGB, values[0], values[1], values[2], values[3], true);
  }

  public toString(): string {
    const values = this._values;
    const format = this._format;
    const c1 = values[0];
    const c2 = values[1];
    const c3 = values[2];
    const c4 = values[3];
    const hasAlpha = this._hasAlpha;

    switch (format) {
      case ColorFormat.HSL: return hasAlpha ? cssFunction('hsla', c1, c2, c3, c4) : cssFunction('hsl', c1, c2, c3);
      case ColorFormat.RGB: return hasAlpha ? cssFunction('rgba', c1, c2, c3, c4) : cssFunction('rgb', c1, c2, c3);
    }
    // throw an error?
    throw new Error('Invalid color format');
  }
}

function percent(value: CSSPercentage): number {
  return typeof value === 'number'
    ? value as number
    : parseFloat(ensureString(value)) * .01;
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

  return [h, s * 100, l * 100];
};


function HSLtoRGB(hsl: Color3): Color3 {
  const h = hsl[0] / 360;
  const s = hsl[1] / 100;
  const l = hsl[2] / 100;

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

function parseHexCode (value: string) {
	const match = value.match(/#[a-f0-9]{6}/i);
	if (!match) {
		return [0, 0, 0];
	}

	const integer = parseInt(match[0], 16);
	const r = (integer >> 16) & 0xFF;
	const g = (integer >> 8) & 0xFF;
	const b = integer & 0xFF;

	return [r, g, b];
};
