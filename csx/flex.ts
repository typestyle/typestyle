/**
 * @module Flexbox abstraction
 *
 * -webkit- is needed for mobile safari (iPad)
 */
import { extend } from '../src';

/**
 * If you have more than one child prefer horizontal,vertical
 */
export var flexRoot: NestedCSSProperties = {
  display: [
    '-webkit-flex',
    'flex'
  ]
};

/**
 * A general grouping component that has no impact on the parent flexbox properties e.g.
 * <vertical>
 *    <pass>
 *       <content/>
 *    </pass>
 * </vertical>
 */
export var pass: NestedCSSProperties = {
  display: 'inherit',

  '-webkit-flex-direction': 'inherit',
  flexDirection: 'inherit',

  '-webkit-flex-grow': 1,
  flexGrow: 1,
}

export var inlineRoot: NestedCSSProperties = {
  display: 'inline-flex'
};

export const horizontal: NestedCSSProperties = extend(flexRoot, {
  '-webkit-flex-direction': 'row',
  flexDirection: 'row'
});
export const vertical: NestedCSSProperties = extend(flexRoot, {
  '-webkit-flex-direction': 'column',
  flexDirection: 'column'
});

export var wrap: NestedCSSProperties = {
  '-webkit-flex-wrap': 'wrap',
  flexWrap: 'wrap'
};

export var flexNone: NestedCSSProperties = {
  flex: 'none'
};

/**
 * If you want items to be sized automatically by their children use this
 * This is because of a bug in various flexbox implementations: http://philipwalton.com/articles/normalizing-cross-browser-flexbox-bugs/
 */
export var content: NestedCSSProperties = {
  '-webkit-flex-shrink': 0,
  flexShrink: 0
};

export var flex: NestedCSSProperties = {
  '-webkit-flex': 1,
  flex: 1
};

export var flex1: NestedCSSProperties = flex;
export var flex2: NestedCSSProperties = {
  '-webkit-flex': 2,
  flex: 2
};
export var flex3: NestedCSSProperties = {
  '-webkit-flex': 3,
  flex: 3
};
export var flex4: NestedCSSProperties = {
  '-webkit-flex': 4,
  flex: 4
};
export var flex5: NestedCSSProperties = {
  '-webkit-flex': 5,
  flex: 5
};
export var flex6: NestedCSSProperties = {
  '-webkit-flex': 6,
  flex: 6
};
export var flex7: NestedCSSProperties = {
  '-webkit-flex': 7,
  flex: 7
};
export var flex8: NestedCSSProperties = {
  '-webkit-flex': 8,
  flex: 8
};
export var flex9: NestedCSSProperties = {
  '-webkit-flex': 9,
  flex: 9
};
export var flex10: NestedCSSProperties = {
  '-webkit-flex': 10,
  flex: 10
};
export var flex11: NestedCSSProperties = {
  '-webkit-flex': 11,
  flex: 11
};
export var flex12: NestedCSSProperties = {
  '-webkit-flex': 12,
  flex: 12
};

/////////////////////////////
// Alignment in cross axis //
/////////////////////////////

export var start: NestedCSSProperties = {
  '-webkit-align-items': 'flex-start',
  alignItems: 'flex-start'
};
export var center: NestedCSSProperties = {
  '-webkit-align-items': 'center',
  alignItems: 'center'
};
export var end: NestedCSSProperties = {
  '-webkit-align-items': 'flex-end',
  alignItems: 'flex-end'
};

////////////////////////////
// Alignment in main axis //
////////////////////////////

export var startJustified: NestedCSSProperties = {
  '-webkit-justify-content': 'flex-start',
  justifyContent: 'flex-start'
};
export var centerJustified: NestedCSSProperties = {
  '-webkit-justify-content': 'center',
  justifyContent: 'center'
};
export var endJustified: NestedCSSProperties = {
  '-webkit-justify-content': 'flex-end',
  justifyContent: 'flex-end'
};
export var aroundJustified: NestedCSSProperties = {
  '-webkit-justify-content': 'space-around',
  justifyContent: 'space-around'
};
export var betweenJustified: NestedCSSProperties = {
  '-webkit-justify-content': 'space-between',
  justifyContent: 'space-between'
};

////////////////////////////
// Alignment in both axes //
////////////////////////////

export var centerCenter: NestedCSSProperties = extend(flexRoot, center, centerJustified);

////////////////////
// Self alignment //
////////////////////

export var selfStart: NestedCSSProperties = {
  '-webkit-align-self': 'flex-start',
  alignSelf: 'flex-start'
};
export var selfCenter: NestedCSSProperties = {
  '-webkit-align-self': 'center',
  alignSelf: 'center'
};
export var selfEnd: NestedCSSProperties = {
  '-webkit-align-self': 'flex-end',
  alignSelf: 'flex-end'
};
export var selfStretch: NestedCSSProperties = {
  '-webkit-align-self': 'stretch',
  alignSelf: 'stretch'
};
