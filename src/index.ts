/// <reference path="./css.d.ts"/>

/**
 * @module Maintains a single stylesheet and keeps it in sync with requested styles
 */
import * as FreeStyle from "free-style";


/** Raf for node + browser */
const raf = typeof requestAnimationFrame === 'undefined' ? setTimeout : requestAnimationFrame;

/**
 * Only calls cb all sync operations settle
 */
const {afterAllSync} = new class {

  pending = 0;
  afterAllSync = (cb: () => void) => {
    this.pending++;
    const pending = this.pending;
    raf(() => {
      if (pending !== this.pending) return;
      cb();
    })
  }
}

/**
 * Before we send styles to freeStyle we should convert any CSSType<T> to string
 * Call this whenever something might be a CSSType.
 */
export function ensureString(x: any): string {
  return typeof (x as CSSType<any>).type === 'string'
    ? x.toString()
    : x;
}

/**
 * Ensures string for all values of an object
 */
export function ensureStringObj(object: any): any {
  const result: NestedCSSProperties = {};
  for (const key in object) {
    const val = object[key];
    result[key] = ensureString(val);
  }
  return result;
}


/**
 * We have a single stylesheet that we update as components register themselves
 */
let freeStyle = FreeStyle.create();
let lastFreeStyleChangeId = freeStyle.changeId;

/**
 * We create a tag on first request or return the one that was hydrated
 */
const {setTag, getTag} = new class {
  singletonTag?: { innerHTML: string } = undefined;
  getTag = () => {
    if (!this.singletonTag) {
      this.singletonTag = typeof window === 'undefined' ? { innerHTML: '' } : document.createElement('style');
      if (typeof document !== 'undefined') document.head.appendChild(this.singletonTag as any);
    }
    return this.singletonTag;
  }
  setTag = (tag: {innerHTML: string}) => {
    this.singletonTag = tag;
    /** This special time buffer immediately */
    forceFlush();
  }
};

/** Sets the tag where we write the CSS on style updates */
export const setTarget = setTag;

/** Checks if the style tag needs updating and if so queues up the change */
const styleUpdated = () => {
  if (
    freeStyle.changeId === lastFreeStyleChangeId
    && !pendingRawChange
  ) return;

  lastFreeStyleChangeId = freeStyle.changeId;
  pendingRawChange = false;
  afterAllSync(forceFlush);
};

let pendingRawChange = false;
let raw = '';

/**
 * Insert `raw` CSS as a string. This is useful for e.g.
 * - third party CSS that you are customizing with template strings
 * - generating raw CSS in JavaScript
 * - reset libraries like normalize.css that you can use without loaders
 */
export function cssRaw(mustBeValidCSS: string) {
  if (!mustBeValidCSS) return;
  raw = raw + mustBeValidCSS;
  pendingRawChange = true;
  styleUpdated();
}

/**
 * Flushes styles to the singleton tag
 **/
export function forceFlush() {
  getTag().innerHTML = css();
}

/**
 * Helps with testing. Reinitializes FreeStyle + raw
 */
export function reinit() {
  /** reinit freestyle */
  freeStyle = FreeStyle.create();
  lastFreeStyleChangeId = freeStyle.changeId;

  /** reinit raw */
  raw = '';
  pendingRawChange = false;

  /** Clear any styles that were flushed */
  getTag().innerHTML = '';
}

/**
 * Allows use to use the stylesheet in a node.js environment
 */
export const css = () => raw ? raw + freeStyle.getStyles() : freeStyle.getStyles();

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
      ) {
        // And we already have something for this key
        if (result[key]) {
          // Then extend in the final result
          result[key] = extend(result[key] as any, object);
        }
        // Otherwise still ensure string for all values
        else {
          result[key] = ensureStringObj(val);
        }
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

export type MediaQuery = {
  type?: 'screen' | 'print' | 'all';
  orientation?: 'landscape' | 'portrait';
  minWidth?: number;
  maxWidth?: number;
}
/**
 * Helps customize styles with media queries
 */
export const media = (mediaQuery: MediaQuery, ...objects: NestedCSSProperties[]): NestedCSSProperties => {
  const mediaQuerySections: string[] = [];
  if (mediaQuery.type) mediaQuerySections.push(mediaQuery.type);
  if (mediaQuery.orientation) mediaQuerySections.push(mediaQuery.orientation);
  if (mediaQuery.minWidth) mediaQuerySections.push(`(min-width: ${mediaQuery.minWidth}px)`);
  if (mediaQuery.maxWidth) mediaQuerySections.push(`(max-width: ${mediaQuery.maxWidth}px)`);

  const stringMediaQuery = `@media ${mediaQuerySections.join(' and ')}`;

  const object = { [stringMediaQuery]: extend(...objects) };
  return object;
}

/**
 * Allows the use of importing the CSSProperties interface 
 */
export type CSSProps = CSSProperties
