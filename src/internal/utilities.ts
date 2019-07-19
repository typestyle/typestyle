import * as types from '../types';
import { Dictionary } from './formatting';

/** Raf for node + browser */
export const raf: (cb: () => void) => void =
  typeof requestAnimationFrame === 'undefined'
    /**
     * Make sure setTimeout is always invoked with
     * `this` set to `window` or `global` automatically
     **/
    ? (cb) => setTimeout(cb)
    /**
     * Make sure window.requestAnimationFrame is always invoked with `this` window
     * We might have raf without window in case of `raf/polyfill` (recommended by React)
     **/
    : typeof window === 'undefined'
      ? requestAnimationFrame
      : requestAnimationFrame.bind(window);

/**
 * Utility to join classes conditionally
 */
export function classes(...classes: (string | false | undefined | null | { [className: string]: any })[]): string {
  return classes
    .map(c => c && typeof c === 'object' ? Object.keys(c).map(key => !!c[key] && key) : [c])
    .reduce((flattened, c) => flattened.concat(c), [] as string[])
    .filter(c => !!c)
    .join(' ');
}

/**
 * Merges various styles into a single style object.
 * Note: if two objects have the same property the last one wins
 */
export function extend(...objects: (types.NestedCSSProperties | undefined | null | false)[]): types.NestedCSSProperties {
  /** The final result we will return */
  const result: types.CSSProperties & Dictionary = {};
  for (const object of objects) {
    if (object == null || object === false) {
      continue;
    }
    for (const key in object) {

      /** Falsy values except a explicit 0 is ignored */
      const val: any = (object as any)[key];
      if (!val && val !== 0) {
        continue;
      }

      /** if nested media or pseudo selector */
      if (key === '$nest' && val) {
        result[key] = result['$nest'] ? extend(result['$nest'], val) : val;
      }
      /** if freestyle sub key that needs merging. We come here due to our recursive calls */
      else if ((key.indexOf('&') !== -1 || key.indexOf('@media') === 0)) {
        result[key] = result[key] ? extend(result[key], val) : val;
      }
      else {
        result[key] = val;
      }
    }
  }

  return result;
}


/**
 * Utility to help customize styles with media queries. e.g.
 * ```
 * style(
 *  media({maxWidth:500}, {color:'red'})
 * )
 * ```
 */
export const media = (mediaQuery: types.MediaQuery, ...objects: (types.NestedCSSProperties | undefined | null | false)[]): types.NestedCSSProperties => {
  const mediaQuerySections: string[] = [];
  if (mediaQuery.type) mediaQuerySections.push(mediaQuery.type);
  if (mediaQuery.orientation) mediaQuerySections.push(`(orientation: ${mediaQuery.orientation})`);
  if (mediaQuery.minWidth) mediaQuerySections.push(`(min-width: ${mediaLength(mediaQuery.minWidth)})`);
  if (mediaQuery.maxWidth) mediaQuerySections.push(`(max-width: ${mediaLength(mediaQuery.maxWidth)})`);
  if (mediaQuery.minHeight) mediaQuerySections.push(`(min-height: ${mediaLength(mediaQuery.minHeight)})`);
  if (mediaQuery.maxHeight) mediaQuerySections.push(`(max-height: ${mediaLength(mediaQuery.maxHeight)})`);

  const stringMediaQuery = `@media ${mediaQuerySections.join(' and ')}`;

  const object: types.NestedCSSProperties = {
    $nest: {
      [stringMediaQuery]: extend(...objects)
    }
  };
  return object;
}

const mediaLength = (value: number | string) =>
  typeof value === 'string' ? value : `${value}px`;
