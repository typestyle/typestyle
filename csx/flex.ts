/**
 * @module Flexbox abstraction
 *
 * -webkit- is needed for mobile safari (iPhone / iPad)
 * -ms- is needed for IE
 */
import { extend } from '../src';

/**
 * If you have more than one child prefer horizontal,vertical
 */
export var flexRoot: NestedCSSProperties = {
  display: [
    '-ms-flexbox',
    '-webkit-flex',
    'flex',
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

  '-ms-flex-direction': 'inherit',
  '-webkit-flex-direction': 'inherit',
  flexDirection: 'inherit',

  '-ms-flex-positive': 1,
  '-webkit-flex-grow': 1,
  flexGrow: 1,
}

export var inlineRoot: NestedCSSProperties = {
  display: [
    '-ms-inline-flexbox',
    '-webkit-inline-flex',
    'inline-flex'
  ]
};

export const horizontal: NestedCSSProperties = extend(flexRoot, {
  '-ms-flex-direction': 'row',
  '-webkit-flex-direction': 'row',
  flexDirection: 'row'
});
export const vertical: NestedCSSProperties = extend(flexRoot, {
  '-ms-flex-direction': 'column',
  '-webkit-flex-direction': 'column',
  flexDirection: 'column'
});

export var wrap: NestedCSSProperties = {
  '-ms-flex-wrap': 'wrap',
  '-webkit-flex-wrap': 'wrap',
  flexWrap: 'wrap'
};

/**
 * If you want items to be sized automatically by their children use this
 * This is because of a bug in various flexbox implementations: http://philipwalton.com/articles/normalizing-cross-browser-flexbox-bugs/
 */
export var content: NestedCSSProperties = {
  '-ms-flex-negative': 0,
  '-webkit-flex-shrink': 0,
  flexShrink: 0
};

export var flex: NestedCSSProperties = {
  '-ms-flex': 1,
  '-webkit-flex': 1,
  flex: 1
};

export var flex1: NestedCSSProperties = flex;
export var flex2: NestedCSSProperties = {
  '-ms-flex': 2,
  '-webkit-flex': 2,
  flex: 2
};
export var flex3: NestedCSSProperties = {
  '-ms-flex': 3,
  '-webkit-flex': 3,
  flex: 3
};
export var flex4: NestedCSSProperties = {
  '-ms-flex': 4,
  '-webkit-flex': 4,
  flex: 4
};
export var flex5: NestedCSSProperties = {
  '-ms-flex': 5,
  '-webkit-flex': 5,
  flex: 5
};
export var flex6: NestedCSSProperties = {
  '-ms-flex': 6,
  '-webkit-flex': 6,
  flex: 6
};
export var flex7: NestedCSSProperties = {
  '-ms-flex': 7,
  '-webkit-flex': 7,
  flex: 7
};
export var flex8: NestedCSSProperties = {
  '-ms-flex': 8,
  '-webkit-flex': 8,
  flex: 8
};
export var flex9: NestedCSSProperties = {
  '-ms-flex': 9,
  '-webkit-flex': 9,
  flex: 9
};
export var flex10: NestedCSSProperties = {
  '-ms-flex': 10,
  '-webkit-flex': 10,
  flex: 10
};
export var flex11: NestedCSSProperties = {
  '-ms-flex': 11,
  '-webkit-flex': 11,
  flex: 11
};
export var flex12: NestedCSSProperties = {
  '-ms-flex': 12,
  '-webkit-flex': 12,
  flex: 12
};

/////////////////////////////
// Alignment in cross axis //
/////////////////////////////

export var start: NestedCSSProperties = {
  '-ms-flex-align': 'start',
  '-webkit-align-items': 'flex-start',
  alignItems: 'flex-start'
};
export var center: NestedCSSProperties = {
  '-ms-flex-align': 'center',
  '-webkit-align-items': 'center',
  alignItems: 'center'
};
export var end: NestedCSSProperties = {
  '-ms-flex-align': 'end',
  '-webkit-align-items': 'flex-end',
  alignItems: 'flex-end'
};

////////////////////////////
// Alignment in main axis //
////////////////////////////

export var startJustified: NestedCSSProperties = {
  '-ms-flex-pack': 'start',
  '-webkit-justify-content': 'flex-start',
  justifyContent: 'flex-start'
};
export var centerJustified: NestedCSSProperties = {
  '-ms-flex-pack': 'center',
  '-webkit-justify-content': 'center',
  justifyContent: 'center'
};
export var endJustified: NestedCSSProperties = {
  '-ms-flex-pack': 'end',
  '-webkit-justify-content': 'flex-end',
  justifyContent: 'flex-end'
};
export var aroundJustified: NestedCSSProperties = {
  '-ms-flex-pack': 'distribute',
  '-webkit-justify-content': 'space-around',
  justifyContent: 'space-around'
};
export var betweenJustified: NestedCSSProperties = {
  '-ms-flex-pack': 'justify',
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
  '-ms-flex-item-align': 'start',
  '-webkit-align-self': 'flex-start',
  alignSelf: 'flex-start'
};
export var selfCenter: NestedCSSProperties = {
  '-ms-flex-item-align': 'center',
  '-webkit-align-self': 'center',
  alignSelf: 'center'
};
export var selfEnd: NestedCSSProperties = {
  '-ms-flex-item-align': 'end',
  '-webkit-align-self': 'flex-end',
  alignSelf: 'flex-end'
};
export var selfStretch: NestedCSSProperties = {
  '-ms-flex-item-align': 'stretch',
  '-webkit-align-self': 'stretch',
  alignSelf: 'stretch'
};
