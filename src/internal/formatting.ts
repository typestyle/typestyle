import * as types from './../types';
import * as FreeStyle from 'free-style';

export function ensurePercent(value: string | number): number {
  return typeof value === 'number'
    ? value as number
    : parseFloat(ensureString(value)) * .01;
}

export function formatPercent(value: number): string {
  return (value * 100) + '%'
}

export type Dictionary = { [key: string]: any; };

/**
 * Before we send styles to freeStyle we should convert any CSSType<T> to string
 * Call this whenever something might be a CSSType.
 */
export function ensureString(x: any): string {
  return typeof (x as types.CSSType<any>).type === 'string'
    ? x.toString()
    : x;
}

/**
 * We need to do the following to *our* objects before passing to freestyle:
 * - Convert any CSSType to their string value
 * - For any `$nest` directive move up to FreeStyle style nesting
 * - For any `$unique` directive map to FreeStyle Unique
 */
export function ensureStringObj(object: types.NestedCSSProperties): any {
  /** The final result we will return */
  const result: types.CSSProperties & Dictionary = {};

  for (const key in object) {

    /** Grab the value upfront */
    const val: any = (object as any)[key];

    /** TypeStyle configuration options */
    if (key === '$unique') {
      result[FreeStyle.IS_UNIQUE] = val;
    }
    else if (key === '$nest') {
      const nested = val!;
      for (let selector in nested) {
        const subproperties = nested[selector]!;
        result[selector] = ensureStringObj(subproperties);
      }
    }
    else {
      result[key] = ensureString(val);
    }
  }

  return result;
}
