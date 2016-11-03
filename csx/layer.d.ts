/**
 * New layer parent
 */
export declare var layerParent: NestedCSSProperties;
/**
 * Use this to attach to any parent layer
 * and then you can use `left`/`top` etc to position yourself
 */
export declare const attachToLayerParent: NestedCSSProperties;
/**
 * This new layer will attach itself to the nearest parent with `position:relative` or `position:absolute`
 * And will become the new `layerParent`
 */
export declare var newLayer: NestedCSSProperties;
export declare const attachToTop: NestedCSSProperties;
export declare const attachToRight: NestedCSSProperties;
export declare const attachToBottom: NestedCSSProperties;
export declare const attachToLeft: NestedCSSProperties;
export declare const pageTop: NestedCSSProperties;
export declare const pageRight: NestedCSSProperties;
export declare const pageBottom: NestedCSSProperties;
export declare const pageLeft: NestedCSSProperties;
