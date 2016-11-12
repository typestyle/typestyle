/**
 * Helper for the linear-gradient function in CSS
 * https://drafts.csswg.org/css-images-3/#funcdef-linear-gradient
 */
export declare function linearGradient(position: CSSAngle | CSSSideOrCorner, ...colors: (CSSColor | CSSColorStop)[]): CSSType<'gradient'>;
/**
 * Helper for the repeating-linear-gradient function in CSS
 * https://drafts.csswg.org/css-images-3/#funcdef-repeating-linear-gradient
 */
export declare function repeatingLinearGradient(position: CSSSideOrCorner, ...colors: (CSSColor | CSSColorStop)[]): CSSType<'gradient'>;
