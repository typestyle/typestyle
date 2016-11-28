/**
 * @module Flexbox abstraction
 *
 * -webkit- is needed for mobile safari (iPhone / iPad)
 * -ms- is needed for IE
 */
import { extend } from '../';

/**
 * If you have more than one child prefer horizontal,vertical
 */
export var flexRoot: CSSProperties = {
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
export var pass: CSSProperties = {
  display: 'inherit',

  '-ms-flex-direction': 'inherit',
  '-webkit-flex-direction': 'inherit',
  flexDirection: 'inherit',

  '-ms-flex-positive': 1,
  '-webkit-flex-grow': 1,
  flexGrow: 1,
}

export var inlineRoot: CSSProperties = {
  display: [
    '-ms-inline-flexbox',
    '-webkit-inline-flex',
    'inline-flex'
  ]
};

export const horizontal: CSSProperties = extend(flexRoot, {
  '-ms-flex-direction': 'row',
  '-webkit-flex-direction': 'row',
  flexDirection: 'row'
});
export const vertical: CSSProperties = extend(flexRoot, {
  '-ms-flex-direction': 'column',
  '-webkit-flex-direction': 'column',
  flexDirection: 'column'
});

export var wrap: CSSProperties = {
  '-ms-flex-wrap': 'wrap',
  '-webkit-flex-wrap': 'wrap',
  flexWrap: 'wrap'
};

/**
 * If you want items to be sized automatically by their children use this
 * This is because of a bug in various flexbox implementations: http://philipwalton.com/articles/normalizing-cross-browser-flexbox-bugs/
 * Specifically bug 1 : https://github.com/philipwalton/flexbugs#1-minimum-content-sizing-of-flex-items-not-honored
 */
export var content: CSSProperties = {
  '-ms-flex-negative': 0,
  '-webkit-flex-shrink': 0,
  flexShrink: 0,
  flexBasis: 'auto',
};

export var flex: CSSProperties = {
  '-ms-flex': 1,
  '-webkit-flex': 1,
  flex: 1
};

export var flex1: CSSProperties = flex;
export var flex2: CSSProperties = {
  '-ms-flex': 2,
  '-webkit-flex': 2,
  flex: 2
};
export var flex3: CSSProperties = {
  '-ms-flex': 3,
  '-webkit-flex': 3,
  flex: 3
};
export var flex4: CSSProperties = {
  '-ms-flex': 4,
  '-webkit-flex': 4,
  flex: 4
};
export var flex5: CSSProperties = {
  '-ms-flex': 5,
  '-webkit-flex': 5,
  flex: 5
};
export var flex6: CSSProperties = {
  '-ms-flex': 6,
  '-webkit-flex': 6,
  flex: 6
};
export var flex7: CSSProperties = {
  '-ms-flex': 7,
  '-webkit-flex': 7,
  flex: 7
};
export var flex8: CSSProperties = {
  '-ms-flex': 8,
  '-webkit-flex': 8,
  flex: 8
};
export var flex9: CSSProperties = {
  '-ms-flex': 9,
  '-webkit-flex': 9,
  flex: 9
};
export var flex10: CSSProperties = {
  '-ms-flex': 10,
  '-webkit-flex': 10,
  flex: 10
};
export var flex11: CSSProperties = {
  '-ms-flex': 11,
  '-webkit-flex': 11,
  flex: 11
};
export var flex12: CSSProperties = {
  '-ms-flex': 12,
  '-webkit-flex': 12,
  flex: 12
};

/////////////////////////////
// Alignment in cross axis //
/////////////////////////////

export var start: CSSProperties = {
  '-ms-flex-align': 'start',
  '-webkit-align-items': 'flex-start',
  alignItems: 'flex-start'
};
export var center: CSSProperties = {
  '-ms-flex-align': 'center',
  '-webkit-align-items': 'center',
  alignItems: 'center'
};
export var end: CSSProperties = {
  '-ms-flex-align': 'end',
  '-webkit-align-items': 'flex-end',
  alignItems: 'flex-end'
};

////////////////////////////
// Alignment in main axis //
////////////////////////////

export var startJustified: CSSProperties = {
  '-ms-flex-pack': 'start',
  '-webkit-justify-content': 'flex-start',
  justifyContent: 'flex-start'
};
export var centerJustified: CSSProperties = {
  '-ms-flex-pack': 'center',
  '-webkit-justify-content': 'center',
  justifyContent: 'center'
};
export var endJustified: CSSProperties = {
  '-ms-flex-pack': 'end',
  '-webkit-justify-content': 'flex-end',
  justifyContent: 'flex-end'
};
export var aroundJustified: CSSProperties = {
  '-ms-flex-pack': 'distribute',
  '-webkit-justify-content': 'space-around',
  justifyContent: 'space-around'
};
export var betweenJustified: CSSProperties = {
  '-ms-flex-pack': 'justify',
  '-webkit-justify-content': 'space-between',
  justifyContent: 'space-between'
};

////////////////////////////
// Alignment in both axes //
////////////////////////////

export var centerCenter: CSSProperties = extend(flexRoot, center, centerJustified);

////////////////////
// Self alignment //
////////////////////

export var selfStart: CSSProperties = {
  '-ms-flex-item-align': 'start',
  '-webkit-align-self': 'flex-start',
  alignSelf: 'flex-start'
};
export var selfCenter: CSSProperties = {
  '-ms-flex-item-align': 'center',
  '-webkit-align-self': 'center',
  alignSelf: 'center'
};
export var selfEnd: CSSProperties = {
  '-ms-flex-item-align': 'end',
  '-webkit-align-self': 'flex-end',
  alignSelf: 'flex-end'
};
export var selfStretch: CSSProperties = {
  '-ms-flex-item-align': 'stretch',
  '-webkit-align-self': 'stretch',
  alignSelf: 'stretch',
};
