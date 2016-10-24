/// <reference path="./css.d.ts"/>

/**
 * @module Maintains a single stylesheet and keeps it in sync with requested styles
 */
import * as FreeStyle from "free-style";

/**
 * Only calls cb all sync operations settle
 */
const {afterAllSync} = new class {
  pending: any;
  afterAllSync = (cb: () => void) => {
    if (this.pending) clearTimeout(this.pending);
    this.pending = setTimeout(cb);
  }
}

/**
 * Before we send styles to freeStyle we should convert any CSSType<T> to string
 * Call this whenever something might be a CSSType.
 */
export function ensureString(x: any): string {
  return typeof x.type === 'string'
    ? x.toString()
    : x;
}

/**
 * We have a single stylesheet that we update as components register themselves
 */
let freeStyle = FreeStyle.create();
let lastChangeId = freeStyle.changeId;
let singletonTag: { innerHTML: string } = typeof window === 'undefined' ? { innerHTML: '' } : document.createElement('style');
if (typeof document !== 'undefined') document.head.appendChild(singletonTag as any);

/** Checks if the style tag needs updating and if so queues up the change */
const styleUpdated = () => {
  if (freeStyle.changeId === lastChangeId) return;
  lastChangeId = freeStyle.changeId;
  afterAllSync(() => {
    singletonTag.innerHTML = freeStyle.getStyles();
  })
};

/**
 * Helps with testing. Reinitializes FreeStyle
 */
export function reinit() {
  freeStyle = FreeStyle.create();
  lastChangeId = freeStyle.changeId;
  singletonTag.innerHTML = '';
}

/**
 * Allows use to use the stylesheet in a node.js environment
 */
export const css = () => freeStyle.getStyles();

/**
 * Takes CSSProperties and return a generated className you can use on your component
 */
export function style(...objects: NestedCSSProperties[]) {
  const object = extend(...objects);
  const className = freeStyle.registerStyle(object);
  styleUpdated();
  return className;
}

/**
 * Takes CSSProperties and registers it to a global selector (body, html, etc.)
 */
export function cssRule(selector: string, ...objects: CSSProperties[]): void {
  const object = extend(...objects);
  freeStyle.registerRule(selector, object);
  styleUpdated();
  return;
}

/**
 * Takes Keyframes and returns a generated animation name
 */
export function keyframes(frames: KeyFrames) {
  // resolve keyframe css property helpers
  for (const key in frames) {
    const frame = frames[key];
    for (const prop in frame) {
      frame[prop] = ensureString(frame[prop]);
    }
  }
  const animationName = freeStyle.registerKeyframes(frames);
  styleUpdated();
  return animationName;
}

/**
 * Helper for you to create a CSSFunction
 * Assumption is that most css function fall into this pattern:
 * `function-name(param [, param])`
 */
export function cssFunction(functionName: string, ...params: CSSValueGeneral[]): string {

  const parts = params.map(ensureString).join(',');
  return `${functionName}(${parts})`;
}

/**
 * Merges various styles into a single style object.
 * Note: if two objects have the same property the last one wins
 */
export function extend(...objects: NestedCSSProperties[]): NestedCSSProperties {
  /** The final result we will return */
  const result: NestedCSSProperties = {};
  for (const object of objects) {
    for (const key in object) {
      const val = object[key];
      if (
        // Some psuedo state or media query
        (key.indexOf('&') !== -1 || key.indexOf('@media') === 0)
        // And we already have something for this key
        && result[key]
      ) {
        // Then extend in the final result
        result[key] = extend(result[key] as any, object);
      }
      // Otherwise just copy to output
      else {
        result[key] = ensureString(val);
      }
    }
  }
  return result;
}

/**
 * Utility to join classes conditionally
 */
export function classes(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(c => !!c).join(' ');
}
