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
  afterAllSync = (cb:()=>void) => {
    if (this.pending) clearTimeout(this.pending);
    this.pending = setTimeout(cb);
  }
}

/**
 * We have a single stylesheet that we update as components register themselves
 */
let freeStyle = FreeStyle.create();
let lastChangeId = freeStyle.changeId;
let singletonTag: {innerHTML: string} = typeof window === 'undefined' ? { innerHTML: '' } : document.createElement('style') ;
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
 * Takes Keyframes and returns a generated animation name
 */
export function keyframes(frames: KeyFrames) {
  const animationName = freeStyle.registerKeyframes(frames);
  styleUpdated();
  return animationName;
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
      if (
        // Some psuedo state or media query
        (key.indexOf('&:') === 0 || key.indexOf('@media') === 0)
        // And we already have something for this key
        && result[key]
      ) {
        // Then extend in the final result
        result[key] = extend(result[key], object);
      }
      // Otherwise just copy to output
      else {
        result[key] = object[key];
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