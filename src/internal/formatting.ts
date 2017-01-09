import * as types from './../types';
import * as FreeStyle from 'free-style';

export type Dictionary = { [key: string]: any; };

/**
 * We need to do the following to *our* objects before passing to freestyle:
 * - For any `$nest` directive move up to FreeStyle style nesting
 * - For any `$unique` directive map to FreeStyle Unique
 * - For any `$debugName` directive return the debug name
 */
export function ensureStringObj(object: types.NestedCSSProperties): { result: any, debugName: string } {
  /** The final result we will return */
  const result: types.CSSProperties & Dictionary = {};
  let debugName = '';

  if (object
    && typeof object === 'object'
    && '$priority' in object) {
    const { $priority, ...others } = object;
    if (object.$priority > 0) {
      result[repeat('&', $priority! + 1)] = others;
      return ensureStringObj(result);
    }
    else {
      object = others;
    }
  }

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
        result[selector] = ensureStringObj(subproperties).result;
      }
    }
    else if (key === '$debugName') {
      debugName = val;
    }
    else {
      result[key] = val
    }
  }

  return { result, debugName };
}

// todo: better name here
export function explodeKeyframes(frames: types.KeyFrames): { $debugName?: string, keyframes: types.KeyFrames } {
  const result = { $debugName: undefined, keyframes: {} as types.KeyFrames };

  for (const offset in frames) {
    const val: any = (frames as any)[offset];
    if (offset === '$debugName') {
      result.$debugName = val;
    } else {
      result.keyframes[offset] = val;
    }
  }

  return result;
}

/**
 * Gets a str repeated by number of count
 * Based on https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
 */
function repeat(str: string, count: number) {
  return Array(count + 1).join(str);
}
