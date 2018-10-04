import * as FreeStyle from "free-style";
import * as types from '../types';

import { ensureStringObj, explodeKeyframes } from './formatting';
import { extend, raf } from './utilities';

export type StylesTarget = { textContent: string | null };

/**
 * Creates an instance of free style with our options
 */
const createFreeStyle = () => FreeStyle.create(
  /** Use the default hash function */
  undefined,
  /** Preserve $debugName values */
  true,
);

/**
 * Maintains a single stylesheet and keeps it in sync with requested styles
 */
export class TypeStyle {
  private _autoGenerateTag: boolean;
  private _freeStyle: FreeStyle.FreeStyle;
  private _pending: number;
  private _pendingRawChange: boolean;
  private _raw: string;
  private _tag?: StylesTarget;

  /**
   * We have a single stylesheet that we update as components register themselves
   */
  private _lastFreeStyleChangeId: number;

  constructor({ autoGenerateTag }: { autoGenerateTag: boolean }) {
    const freeStyle = createFreeStyle();

    this._autoGenerateTag = autoGenerateTag;
    this._freeStyle = freeStyle;
    this._lastFreeStyleChangeId = freeStyle.changeId;
    this._pending = 0;
    this._pendingRawChange = false;
    this._raw = '';
    this._tag = undefined;

    // rebind prototype to TypeStyle.  It might be better to do a function() { return this.style.apply(this, arguments)}
    this.style = this.style.bind(this);
  }

  /**
   * Only calls cb all sync operations settle
   */
  private _afterAllSync(cb: () => void): void {
    this._pending++;
    const pending = this._pending;
    raf(() => {
      if (pending !== this._pending) {
        return;
      }
      cb();
    });
  }

  private _getTag(): StylesTarget | undefined {
    if (this._tag) {
      return this._tag;
    }

    if (this._autoGenerateTag) {
      const tag = typeof window === 'undefined'
        ? { textContent: '' }
        : document.createElement('style');

      if (typeof document !== 'undefined') {
        document.head.appendChild(tag as any);
      }
      this._tag = tag;
      return tag;
    }

    return undefined;
  }

  /** Checks if the style tag needs updating and if so queues up the change */
  private _styleUpdated(): void {
    const changeId = this._freeStyle.changeId;
    const lastChangeId = this._lastFreeStyleChangeId;

    if (!this._pendingRawChange && changeId === lastChangeId) {
      return;
    }

    this._lastFreeStyleChangeId = changeId;
    this._pendingRawChange = false;

    this._afterAllSync(() => this.forceRenderStyles());
  }

  /**
   * Insert `raw` CSS as a string. This is useful for e.g.
   * - third party CSS that you are customizing with template strings
   * - generating raw CSS in JavaScript
   * - reset libraries like normalize.css that you can use without loaders
   */
  public cssRaw = (mustBeValidCSS: string): void => {
    if (!mustBeValidCSS) {
      return;
    }
    this._raw += mustBeValidCSS || '';
    this._pendingRawChange = true;
    this._styleUpdated();
  }

  /**
   * Takes CSSProperties and registers it to a global selector (body, html, etc.)
   */
  public cssRule = (selector: string, ...objects: types.NestedCSSProperties[]): void => {
    const object = ensureStringObj(extend(...objects)).result;
    this._freeStyle.registerRule(selector, object);
    this._styleUpdated();
    return;
  }

  /**
   * Renders styles to the singleton tag imediately
   * NOTE: You should only call it on initial render to prevent any non CSS flash.
   * After that it is kept sync using `requestAnimationFrame` and we haven't noticed any bad flashes.
   **/
  public forceRenderStyles = (): void => {
    const target = this._getTag();
    if (!target) {
      return;
    }
    target.textContent = this.getStyles();
  }

  /**
   * Utility function to register an @font-face
   */
  public fontFace = (...fontFace: types.FontFace[]): void => {
    const freeStyle = this._freeStyle;
    for (const face of fontFace as FreeStyle.Styles[]) {
      freeStyle.registerRule('@font-face', face);
    }
    this._styleUpdated();
    return;
  }

  /**
   * Allows use to use the stylesheet in a node.js environment
   */
  public getStyles = () => {
    return (this._raw || '') + this._freeStyle.getStyles();
  }

  /**
   * Takes keyframes and returns a generated animationName
   */
  public keyframes = (frames: types.KeyFrames): string => {
    const { keyframes, $debugName } = explodeKeyframes(frames);
    // TODO: replace $debugName with display name
    const animationName = this._freeStyle.registerKeyframes(keyframes as FreeStyle.Styles, $debugName);
    this._styleUpdated();
    return animationName;
  }

  /**
   * Helps with testing. Reinitializes FreeStyle + raw
   */
  public reinit = (): void => {
    /** reinit freestyle */
    const freeStyle = createFreeStyle();
    this._freeStyle = freeStyle;
    this._lastFreeStyleChangeId = freeStyle.changeId;

    /** reinit raw */
    this._raw = '';
    this._pendingRawChange = false;

    /** Clear any styles that were flushed */
    const target = this._getTag();
    if (target) {
      target.textContent = '';
    }
  }

  /** Sets the target tag where we write the css on style updates */
  public setStylesTarget = (tag: StylesTarget): void => {
    /** Clear any data in any previous tag */
    if (this._tag) {
      this._tag.textContent = '';
    }
    this._tag = tag;
    /** This special time buffer immediately */
    this.forceRenderStyles();
  }

  /**
   * Takes CSSProperties and return a generated className you can use on your component
   */
  public style(...objects: (types.NestedCSSProperties | undefined)[]): string;
  public style(...objects: (types.NestedCSSProperties | null | false | undefined)[]): string;
  public style() {
    const freeStyle = this._freeStyle;
    const { result, debugName } = ensureStringObj(extend.apply(undefined, arguments));
    const className = debugName ? freeStyle.registerStyle(result, debugName) : freeStyle.registerStyle(result);
    this._styleUpdated();
    return className;
  }

  /**
   * Takes an object where property names are ideal class names and property values are CSSProperties, and
   * returns an object where property names are the same ideal class names and the property values are
   * the actual generated class names using the ideal class name as the $debugName
   */
  public stylesheet = <Names extends string = any>(classes: types.CSSClasses<Names>): types.CSSClassNames<Names> => {
    const classNames = Object.getOwnPropertyNames(classes) as (Names)[];
    const result = {} as types.CSSClassNames<Names>;
    for (let className of classNames) {
      const classDef = classes[className] as types.NestedCSSProperties
      if (classDef) {
        classDef.$debugName = className
        result[className] = this.style(classDef);
      }
    }
    return result;
  }
}
