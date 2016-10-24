/**
 * @module Layers essentially allow you to create a new surface for layouts
 */
import { extend } from '../src';

/**
 * New layer parent
 */
export var layerParent: NestedCSSProperties = {
  position: 'relative',
};

/**
 * Use this to attach to any parent layer
 * and then you can use `left`/`top` etc to position yourself
 */
export const attachToLayerParent: NestedCSSProperties = {
  position: 'absolute',
};

/**
 * This new layer will attach itself to the nearest parent with `position:relative` or `position:absolute`
 * And will become the new `layerParent`
 */
export var newLayer: NestedCSSProperties = extend(
  attachToLayerParent,
  {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  }
);

export const attachToTop: NestedCSSProperties = extend(
  attachToLayerParent,
  {
    top: 0,
    left: 0,
    right: 0,
  }
);
export const attachToRight: NestedCSSProperties = extend(
  attachToLayerParent,
  {
    top: 0,
    right: 0,
    bottom: 0,
  }
);
export const attachToBottom: NestedCSSProperties = extend(
  attachToLayerParent,
  {
    right: 0,
    bottom: 0,
    left: 0,
  }
);
export const attachToLeft: NestedCSSProperties = extend(
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
const fixed: NestedCSSProperties = {
  position: 'fixed'
};

export const pageTop: NestedCSSProperties = extend(fixed, {
  top: 0,
  left: 0,
  right: 0,
});
export const pageRight: NestedCSSProperties = extend(fixed, {
  top: 0,
  right: 0,
  bottom: 0,
});
export const pageBottom: NestedCSSProperties = extend(fixed, {
  right: 0,
  bottom: 0,
  left: 0,
});
export const pageLeft: NestedCSSProperties = extend(fixed, {
  top: 0,
  bottom: 0,
  left: 0,
});
