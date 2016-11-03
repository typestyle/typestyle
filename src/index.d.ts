/// <reference path="css.d.ts" />
/**
 * Before we send styles to freeStyle we should convert any CSSType<T> to string
 * Call this whenever something might be a CSSType.
 */
export declare function ensureString(x: any): string;
/**
 * Insert `raw` CSS as a string. This is useful for e.g.
 * - third party CSS that you are customizing with template strings
 * - generating raw CSS in JavaScript
 * - reset libraries like normalize.css that you can use without loaders
 */
export declare function cssRaw(mustBeValidCSS: string): void;
/**
 * Helps with testing. Reinitializes FreeStyle + raw
 */
export declare function reinit(): void;
/**
 * Allows use to use the stylesheet in a node.js environment
 */
export declare const css: () => string;
/**
 * Takes CSSProperties and return a generated className you can use on your component
 */
export declare function style(...objects: NestedCSSProperties[]): string;
/**
 * Takes CSSProperties and registers it to a global selector (body, html, etc.)
 */
export declare function cssRule(selector: string, ...objects: CSSProperties[]): void;
/**
 * Takes Keyframes and returns a generated animation name
 */
export declare function keyframes(frames: KeyFrames): string;
/**
 * Helper for you to create a CSSFunction
 * Assumption is that most css function fall into this pattern:
 * `function-name(param [, param])`
 */
export declare function cssFunction(functionName: string, ...params: CSSValueGeneral[]): string;
/**
 * Merges various styles into a single style object.
 * Note: if two objects have the same property the last one wins
 */
export declare function extend(...objects: NestedCSSProperties[]): NestedCSSProperties;
/**
 * Utility to join classes conditionally
 */
export declare function classes(...classes: (string | boolean | undefined | null)[]): string;
