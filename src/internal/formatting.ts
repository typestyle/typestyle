import * as types from './../types';
import {Styles} from 'free-style';

/**
 * We need to do the following to *our* objects before passing to freestyle:
 * - For any `$nest` directive move up to FreeStyle style nesting
 * - For any `$unique` directive map to FreeStyle Unique
 * - For any `$debugName` directive return the debug name
 */
export function convertToStyles(object: types.NestedCSSProperties): Styles {
  /** The final result we will return */
  const styles: Styles = {};
  for (const key in object) {

    /** Grab the value upfront */
    const val = (object as any)[key as any];

    /** TypeStyle configuration options */
    if (key === '$nest') {
      const nested = val!;
      for (let selector in nested) {
        const subproperties = nested[selector]!;
        styles[selector] = convertToStyles(subproperties);
      }
    }
    else if (key === '$debugName') {
      styles.$displayName = val;
    }
    else {
      styles[key] = val
    }
  }

  return styles;
}

// todo: better name here
export function convertToKeyframes(frames: types.KeyFrames): Styles {
  const result: Styles =  {};

  for (const offset in frames) {
    if (offset !== '$debugName') {
      result[offset] = (frames as Styles)[offset];
    }
  }

  if (frames.$debugName) {
    result.$displayName = frames.$debugName;
  }

  return result;
}
