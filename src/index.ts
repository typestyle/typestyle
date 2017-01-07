import { TypeStyle } from './internal/typestyle';
import { bindToInstance } from './internal/utilities';

/**
 * All the CSS types in the 'types' namespace
 */
import * as types from './types';
export { types };

/**
 * Export certain utilities
 */
export { extend, classes, media } from './internal/utilities';

// zero configuration instance of TypeStyle
const ts = new TypeStyle(true);

/** Sets the target tag where we write the css on style updates */
export const setStylesTarget = bindToInstance(ts, ts.setStylesTarget);

/**
 * Insert `raw` CSS as a string. This is useful for e.g.
 * - third party CSS that you are customizing with template strings
 * - generating raw CSS in JavaScript
 * - reset libraries like normalize.css that you can use without loaders
 */
export const cssRaw = bindToInstance(ts, ts.cssRaw);

/**
 * Takes CSSProperties and registers it to a global selector (body, html, etc.)
 */
export const cssRule = bindToInstance(ts, ts.cssRule);

/**
 * Renders styles to the singleton tag imediately
 * NOTE: You should only call it on initial render to prevent any non CSS flash.
 * After that it is kept sync using `requestAnimationFrame` and we haven't noticed any bad flashes.
 **/
export const forceRenderStyles = bindToInstance(ts, ts.forceRenderStyles);

/**
 * Utility function to register an @font-face
 */
export const fontFace = bindToInstance(ts, ts.fontFace);

/**
 * Allows use to use the stylesheet in a node.js environment
 */
export const getStyles = bindToInstance(ts, ts.getStyles);

/**
 * Takes keyframes and returns a generated animationName
 */
export const keyframes = bindToInstance(ts, ts.keyframes);

/**
 * Helps with testing. Reinitializes FreeStyle + raw
 */
export const reinit = bindToInstance(ts, ts.reinit);

/**
 * Takes CSSProperties and return a generated className you can use on your component
 */
export const style = bindToInstance(ts, ts.style);

/**
 * Creates a new instance of TypeStyle separate from the default instance
 */
export function typestyle(target?: { textContent: string | null }): TypeStyle {
  const instance = new TypeStyle(false);
  if (target) {
    instance.setStylesTarget(target);
  }
  return instance;
}
