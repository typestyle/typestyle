import { cssFunction } from '../';
import * as types from '../types';
import { ensureString } from '../formatting';

/**
 * Helper for the linear-gradient function in CSS
 * https://drafts.csswg.org/css-images-3/#funcdef-linear-gradient
 */
export function linearGradient(position: types.CSSAngle | types.CSSSideOrCorner, ...colors: (types.CSSColor | types.CSSColorStop)[]): types.CSSType<'gradient'> {
  return {
    type: 'gradient',
    toString: () => cssFunction('linear-gradient', position, ...colors.map(flattenColorStops))
  };
}

/**
 * Helper for the repeating-linear-gradient function in CSS
 * https://drafts.csswg.org/css-images-3/#funcdef-repeating-linear-gradient
 */
export function repeatingLinearGradient(position: types.CSSSideOrCorner, ...colors: (types.CSSColor | types.CSSColorStop)[]): types.CSSType<'gradient'> {
  return {
    type: 'gradient',
    toString: () => cssFunction('repeating-linear-gradient', position, ...colors.map(flattenColorStops))
  };
}

/**
 * Single CSSColorStop => string conversion is like:
 * 'x'=>'x'
 * ['x', '50%'] => 'x 50%'
 **/
function flattenColorStops(c: (types.CSSColor | types.CSSColorStop)): string {
  return Array.isArray(c) ? c.map(ensureString).join(' ') : ensureString(c);
}
