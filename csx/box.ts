/**
 * @module Box helpers
 * Having top, left, bottom, right seperated makes it easier to override and maintain individual properties
 */

/**
 * For `number` we assume pixels e.g. 5 => '5px'
 * For `string` *you* should provide the unit e.g. '5px'
 */
export type BoxUnit = number | string;
function boxUnitToString(value: BoxUnit): string {
  if (typeof value === 'number') {
    return value.toString() + 'px';
  }
  else {
    return value;
  }
}

/**
 * A box function is something that can take:
 * - all
 * - topAndBottom + leftRight
 * - top + right + bottom + left
 */
export interface BoxFunction<T> {
  (all: BoxUnit): T;
  (topAndBottom: BoxUnit, leftAndRight: BoxUnit): T;
  (top: BoxUnit, right: BoxUnit, bottom: BoxUnit, left: BoxUnit): T;
}

/**
 * For use in simple functions
 */
type Box = {
  top: string;
  right: string;
  bottom: string;
  left: string;
}

/**
 * Takes a function that expects Box to be passed into it
 * and creates a BoxFunction
 */
function createBoxFunction<T>(mapFromBox: (box: Box) => T): BoxFunction<T> {
  const result: BoxFunction<T> = (a: BoxUnit, b?: BoxUnit, c?: BoxUnit, d?: BoxUnit) => {
    if (b === undefined && c === undefined && d === undefined) {
      b = c = d = a;
    }
    else if (c === undefined && d === undefined) {
      c = a;
      d = b;
    }

    let box = {
      top: boxUnitToString(a),
      right: boxUnitToString(b!),
      bottom: boxUnitToString(c!),
      left: boxUnitToString(d!)
    };

    return mapFromBox(box);
  }
  return result;
}

export const padding = createBoxFunction((box) => {
  return {
    paddingTop: box.top,
    paddingRight: box.right,
    paddingBottom: box.bottom,
    paddingLeft: box.left
  };
});

export const margin = createBoxFunction((box) => {
  return {
    marginTop: box.top,
    marginRight: box.right,
    marginBottom: box.bottom,
    marginLeft: box.left
  };
});

export const border = createBoxFunction((box) => {
  return {
    borderTop: box.top,
    borderRight: box.right,
    borderBottom: box.bottom,
    borderLeft: box.left
  };
});

/**
 * Puts a vertical margin between each child
 */
export const verticallySpaced = (margin: BoxUnit) => {
  const spacing = boxUnitToString(margin);
  return (
    {
      '&>*': {
        marginBottom: spacing + ' !important'
      },
      '&>*:last-child': {
        marginBottom: '0px !important',
      }
    }
  );
};

/**
 * Puts a horizontal margin between each child
 */
export const horizontallySpaced = (margin: BoxUnit) => {
  const spacing = boxUnitToString(margin);
  return (
    {
      '&>*': {
        marginRight: spacing + ' !important'
      },
      '&>*:last-child': {
        marginRight: '0px !important',
      }
    }
  );
};
