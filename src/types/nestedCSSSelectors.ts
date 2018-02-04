import { NestedCSSProperties } from "../types";

export type NestedCSSSelectors = {
  /** State selector */
  '&:active'?: NestedCSSProperties
  '&:any'?: NestedCSSProperties
  '&:checked'?: NestedCSSProperties
  '&:default'?: NestedCSSProperties
  '&:disabled'?: NestedCSSProperties
  '&:empty'?: NestedCSSProperties
  '&:enabled'?: NestedCSSProperties
  '&:first'?: NestedCSSProperties
  '&:first-child'?: NestedCSSProperties
  '&:first-of-type'?: NestedCSSProperties
  '&:fullscreen'?: NestedCSSProperties
  '&:focus'?: NestedCSSProperties
  '&:hover'?: NestedCSSProperties
  '&:indeterminate'?: NestedCSSProperties
  '&:in-range'?: NestedCSSProperties
  '&:invalid'?: NestedCSSProperties
  '&:last-child'?: NestedCSSProperties
  '&:last-of-type'?: NestedCSSProperties
  '&:left'?: NestedCSSProperties
  '&:link'?: NestedCSSProperties
  '&:only-child'?: NestedCSSProperties
  '&:only-of-type'?: NestedCSSProperties
  '&:optional'?: NestedCSSProperties
  '&:out-of-range'?: NestedCSSProperties
  '&:read-only'?: NestedCSSProperties
  '&:read-write'?: NestedCSSProperties
  '&:required'?: NestedCSSProperties
  '&:right'?: NestedCSSProperties
  '&:root'?: NestedCSSProperties
  '&:scope'?: NestedCSSProperties
  '&:target'?: NestedCSSProperties
  '&:valid'?: NestedCSSProperties
  '&:visited'?: NestedCSSProperties

  /**
   * Pseudo-elements
   * https://developer.mozilla.org/en/docs/Web/CSS/Pseudo-elements
   */
  '&::after'?: NestedCSSProperties
  '&::before'?: NestedCSSProperties
  '&::first-letter'?: NestedCSSProperties
  '&::first-line'?: NestedCSSProperties
  '&::selection'?: NestedCSSProperties
  '&::backdrop'?: NestedCSSProperties
  '&::placeholder'?: NestedCSSProperties
  '&::marker'?: NestedCSSProperties
  '&::spelling-error'?: NestedCSSProperties
  '&::grammar-error'?: NestedCSSProperties

  /** Children */
  '&>*'?: NestedCSSProperties

  /**
   * Mobile first media query example
   **/
  '@media screen and (min-width: 700px)'?: NestedCSSProperties
  /**
   * Desktop first media query example
   **/
  '@media screen and (max-width: 700px)'?: NestedCSSProperties

  /**
   * Also cater for any other nested query you want
   */
  [selector: string]: NestedCSSProperties | undefined
}
