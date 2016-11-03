/**
 * Creates a color from a hex color code or named color.
 * e.g. color('red') or color('#FF0000') or color('#F00'))
 */
export declare function color(value: CSSNamedColor | string): ColorHelper;
/**
 * Creates a color from hue, saturation, and lightness.  Alpha is automatically set to 100%
 */
export declare function hsl(hue: number, saturation: string | number, lightness: string | number): ColorHelper;
/**
 * Creates a color from hue, saturation, lightness, and alpha
 */
export declare function hsla(hue: number, saturation: string | number, lightness: string | number, opacity: string | number): ColorHelper;
/**
 * Creates a color form the red, blue, and green color space.  Alpha is automatically set to 100%
 */
export declare function rgb(red: number, blue: number, green: number): ColorHelper;
/**
 * Creates a color form the red, blue, green, and alpha in the color space
 */
export declare function rgba(red: number, blue: number, green: number, alpha: string | number): ColorHelper;
/**
 * A CSS Color.  Includes utilities for converting between color types
 */
export declare class ColorHelper {
    type: 'color';
    private _hasAlpha;
    private _values;
    private _format;
    constructor(format: number, c0: number, c1: number, c2: number, c3: number, hasAlpha: boolean);
    /**
     * Converts the stored color into string form (which is used by Free Style)
     */
    toString(): string;
    /**
     * Converts to the Hue, Saturation, Lightness color space
     */
    toHSL(): ColorHelper;
    /**
     * Converts to the Hue, Saturation, Lightness color space and adds an alpha channel
     */
    toHSLA(): ColorHelper;
    /**
     * Converts to the Red, Green, Blue color space
     */
    toRGB(): ColorHelper;
    /**
     * Converts to the Red, Green, Blue color space and adds an alpha channel
     */
    toRGBA(): ColorHelper;
    red(): number;
    green(): number;
    blue(): number;
    hue(): number;
    saturation(): number;
    lightness(): number;
    alpha(): number;
    opacity(): number;
    invert(): ColorHelper;
    lighten(percent: string | number): ColorHelper;
    darken(percent: string | number): ColorHelper;
    saturate(percent: string | number): ColorHelper;
    desaturate(percent: string | number): ColorHelper;
    grayscale(): ColorHelper;
    fade(percent: string | number): ColorHelper;
    fadeOut(percent: string | number): ColorHelper;
    fadeIn(percent: string | number): ColorHelper;
    mix(mixin: CSSColor, weight?: number): ColorHelper;
}
export declare const aliceblue: ColorHelper, antiquewhite: ColorHelper, aqua: ColorHelper, aquamarine: ColorHelper, azure: ColorHelper, beige: ColorHelper, bisque: ColorHelper, black: ColorHelper, blanchedalmond: ColorHelper, blue: ColorHelper, blueviolet: ColorHelper, brown: ColorHelper, burlywood: ColorHelper, cadetblue: ColorHelper, chartreuse: ColorHelper, chocolate: ColorHelper, coral: ColorHelper, cornflowerblue: ColorHelper, cornsilk: ColorHelper, crimson: ColorHelper, cyan: ColorHelper, darkblue: ColorHelper, darkcyan: ColorHelper, darkgoldenrod: ColorHelper, darkgray: ColorHelper, darkgreen: ColorHelper, darkgrey: ColorHelper, darkkhaki: ColorHelper, darkmagenta: ColorHelper, darkolivegreen: ColorHelper, darkorange: ColorHelper, darkorchid: ColorHelper, darkred: ColorHelper, darksalmon: ColorHelper, darkseagreen: ColorHelper, darkslateblue: ColorHelper, darkslategray: ColorHelper, darkslategrey: ColorHelper, darkturquoise: ColorHelper, darkviolet: ColorHelper, deeppink: ColorHelper, deepskyblue: ColorHelper, dimgray: ColorHelper, dimgrey: ColorHelper, dodgerblue: ColorHelper, firebrick: ColorHelper, floralwhite: ColorHelper, forestgreen: ColorHelper, fuchsia: ColorHelper, gainsboro: ColorHelper, ghostwhite: ColorHelper, gold: ColorHelper, goldenrod: ColorHelper, gray: ColorHelper, green: ColorHelper, greenyellow: ColorHelper, grey: ColorHelper, honeydew: ColorHelper, hotpink: ColorHelper, indianred: ColorHelper, indigo: ColorHelper, ivory: ColorHelper, khaki: ColorHelper, lavender: ColorHelper, lavenderblush: ColorHelper, lawngreen: ColorHelper, lemonchiffon: ColorHelper, lightblue: ColorHelper, lightcoral: ColorHelper, lightcyan: ColorHelper, lightgoldenrodyellow: ColorHelper, lightgray: ColorHelper, lightgreen: ColorHelper, lightgrey: ColorHelper, lightpink: ColorHelper, lightsalmon: ColorHelper, lightseagreen: ColorHelper, lightskyblue: ColorHelper, lightslategray: ColorHelper, lightslategrey: ColorHelper, lightsteelblue: ColorHelper, lightyellow: ColorHelper, lime: ColorHelper, limegreen: ColorHelper, linen: ColorHelper, maroon: ColorHelper, mediumaquamarine: ColorHelper, mediumblue: ColorHelper, mediumorchid: ColorHelper, mediumpurple: ColorHelper, mediumseagreen: ColorHelper, mediumslateblue: ColorHelper, mediumspringgreen: ColorHelper, mediumturquoise: ColorHelper, mediumvioletred: ColorHelper, midnightblue: ColorHelper, mintcream: ColorHelper, mistyrose: ColorHelper, moccasin: ColorHelper, navajowhite: ColorHelper, navy: ColorHelper, oldlace: ColorHelper, olive: ColorHelper, olivedrab: ColorHelper, orange: ColorHelper, purple: ColorHelper, rebeccapurple: ColorHelper, red: ColorHelper, silver: ColorHelper, teal: ColorHelper, transparent: ColorHelper, white: ColorHelper, yellow: ColorHelper;
