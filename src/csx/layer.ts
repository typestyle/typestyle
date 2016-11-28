/**
 * @module Layers essentially allow you to create a new surface for layouts
 */
import { extend } from '../';

/**
 * New layer parent
 */
export var layerParent: CSSProperties = {
  position: 'relative',
};

/**
 * Use this to attach to any parent layer
 * and then you can use `left`/`top` etc to position yourself
 */
export const attachToLayerParent: CSSProperties = {
  position: 'absolute',
};

/**
 * This new layer will attach itself to the nearest parent with `position:relative` or `position:absolute`
 * And will become the new `layerParent`
 */
export var newLayer: CSSProperties = extend(
  attachToLayerParent,
  {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  }
);

export const attachToTop: CSSProperties = extend(
  attachToLayerParent,
  {
    top: 0,
    left: 0,
    right: 0,
  }
);
export const attachToRight: CSSProperties = extend(
  attachToLayerParent,
  {
    top: 0,
    right: 0,
    bottom: 0,
  }
);
export const attachToBottom: CSSProperties = extend(
  attachToLayerParent,
  {
    right: 0,
    bottom: 0,
    left: 0,
  }
);
export const attachToLeft: CSSProperties = extend(
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
const fixed: CSSProperties = {
  position: 'fixed'
};

export const pageTop: CSSProperties = extend(fixed, {
  top: 0,
  left: 0,
  right: 0,
});
export const pageRight: CSSProperties = extend(fixed, {
  top: 0,
  right: 0,
  bottom: 0,
});
export const pageBottom: CSSProperties = extend(fixed, {
  right: 0,
  bottom: 0,
  left: 0,
});
export const pageLeft: CSSProperties = extend(fixed, {
  top: 0,
  bottom: 0,
  left: 0,
});
