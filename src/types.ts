import * as CSS from 'csstype';

export type TLength = number | string;

export interface CSSProperties extends
  CSS.StandardPropertiesFallback<TLength>,
  CSS.SvgPropertiesFallback<TLength>,
  CSS.VendorPropertiesHyphenFallback<TLength>,
  CSS.ObsoletePropertiesFallback<TLength> {

  /**
   * Typestyle configuration options
   **/
  /**
   * The generated CSS selector gets its own unique location in the generated CSS (disables deduping).
   * So instead of `.classA,.classB{same properties}`
   * you get `.classA {same properties} .classB {same properties}`
   * This is needed for certain browser edge cases like placeholder styling
   **/
  $unique?: boolean;
}

export interface FontFace extends CSS.AtRule.FontFace {}

export type CSSClasses<K extends string> = Record<K, NestedCSSProperties>;

export type CSSClassNames<K extends string> = Record<K, string>;

export interface NestedCSSProperties extends CSSProperties {
  $nest?: NestedCSSSelectors;

  /**
   * A debug only (stripped in process.env.NODE_ENV !== 'production') name
   * Helps you figure out where the class is coming from if you care
   **/
  $debugName?: string;
}

export type MediaQuery = {
  type?: 'screen' | 'print' | 'all';
  orientation?: 'landscape' | 'portrait';
  minWidth?: number | string;
  maxWidth?: number | string;
  minHeight?: number | string;
  maxHeight?: number | string;
  prefersColorScheme?: "dark" | "light";
}

export type NestedCSSSelectors = {
  /** State selector */
  '&:active'?: NestedCSSProperties;
  '&:any'?: NestedCSSProperties;
  '&:checked'?: NestedCSSProperties;
  '&:default'?: NestedCSSProperties;
  '&:disabled'?: NestedCSSProperties;
  '&:empty'?: NestedCSSProperties;
  '&:enabled'?: NestedCSSProperties;
  '&:first'?: NestedCSSProperties;
  '&:first-child'?: NestedCSSProperties;
  '&:first-of-type'?: NestedCSSProperties;
  '&:fullscreen'?: NestedCSSProperties;
  '&:focus'?: NestedCSSProperties;
  '&:hover'?: NestedCSSProperties;
  '&:indeterminate'?: NestedCSSProperties;
  '&:in-range'?: NestedCSSProperties;
  '&:invalid'?: NestedCSSProperties;
  '&:last-child'?: NestedCSSProperties;
  '&:last-of-type'?: NestedCSSProperties;
  '&:left'?: NestedCSSProperties;
  '&:link'?: NestedCSSProperties;
  '&:only-child'?: NestedCSSProperties;
  '&:only-of-type'?: NestedCSSProperties;
  '&:optional'?: NestedCSSProperties;
  '&:out-of-range'?: NestedCSSProperties;
  '&:read-only'?: NestedCSSProperties;
  '&:read-write'?: NestedCSSProperties;
  '&:required'?: NestedCSSProperties;
  '&:right'?: NestedCSSProperties;
  '&:root'?: NestedCSSProperties;
  '&:scope'?: NestedCSSProperties;
  '&:target'?: NestedCSSProperties;
  '&:valid'?: NestedCSSProperties;
  '&:visited'?: NestedCSSProperties;

  /**
   * Pseudo-elements
   * https://developer.mozilla.org/en/docs/Web/CSS/Pseudo-elements
   */
  '&::after'?: NestedCSSProperties;
  '&::before'?: NestedCSSProperties;
  '&::first-letter'?: NestedCSSProperties;
  '&::first-line'?: NestedCSSProperties;
  '&::selection'?: NestedCSSProperties;
  '&::backdrop'?: NestedCSSProperties;
  '&::placeholder'?: NestedCSSProperties;
  '&::marker'?: NestedCSSProperties;
  '&::spelling-error'?: NestedCSSProperties;
  '&::grammar-error'?: NestedCSSProperties;

  /** Children */
  '&>*'?: NestedCSSProperties;

  /**
   * Mobile first media query example
   **/
  '@media screen and (min-width: 700px)'?: NestedCSSProperties;
  /**
   * Desktop first media query example
   **/
  '@media screen and (max-width: 700px)'?: NestedCSSProperties;

  /**
   * Also cater for any other nested query you want
   */
  [selector: string]: NestedCSSProperties | undefined;
};

/**
 * For animation keyframe definition
 */
export interface KeyFrames {
  $debugName?: string,
  [
    /** stuff like `from`, `to` or `10%` etc*/
    key: string
  ]: CSSProperties | string | undefined;
}
