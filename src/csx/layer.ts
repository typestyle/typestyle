/**
 * @module Layers essentially allow you to create a new surface for layouts
 */
import { extend } from '../';
import * as types from '../types';

/**
 * New layer parent
 */
export var layerParent: types.CSSProperties = {
  position: 'relative',
};

/**
 * Use this to attach to any parent layer
 * and then you can use `left`/`top` etc to position yourself
 */
export const attachToLayerParent: types.CSSProperties = {
  position: 'absolute',
};

/**
 * This new layer will attach itself to the nearest parent with `position:relative` or `position:absolute`
 * And will become the new `layerParent`
 */
export var newLayer: types.CSSProperties = extend(
  attachToLayerParent,
  {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  }
);

export const attachToTop: types.CSSProperties = extend(
  attachToLayerParent,
  {
    top: 0,
    left: 0,
    right: 0,
  }
);
export const attachToRight: types.CSSProperties = extend(
  attachToLayerParent,
  {
    top: 0,
    right: 0,
    bottom: 0,
  }
);
export const attachToBottom: types.CSSProperties = extend(
  attachToLayerParent,
  {
    right: 0,
    bottom: 0,
    left: 0,
  }
);
export const attachToLeft: types.CSSProperties = extend(
  attachToLayerParent,
  {
    top: 0,
    bottom: 0,
    left: 0,
  }
);

/**
 * Helps fixing to page
 */
const fixed: types.CSSProperties = {
  position: 'fixed'
};

export const pageTop: types.CSSProperties = extend(fixed, {
  top: 0,
  left: 0,
  right: 0,
});
export const pageRight: types.CSSProperties = extend(fixed, {
  top: 0,
  right: 0,
  bottom: 0,
});
export const pageBottom: types.CSSProperties = extend(fixed, {
  right: 0,
  bottom: 0,
  left: 0,
});
export const pageLeft: types.CSSProperties = extend(fixed, {
  top: 0,
  bottom: 0,
  left: 0,
});
