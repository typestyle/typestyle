
import { CSSFontRule } from "./types/fontRule";
import { CSSStyle } from "./types/cssStyle";
import { NestedCSSSelectors } from "./types/nestedCSSSelectors";

export interface FontFace extends WithFallback<CSSFontRule> {

}

export type CSSClassNames<K extends string> = Record<K, string>

export interface NestedCSSProperties extends CSSProperties {
  $nest?: NestedCSSSelectors

  /**
   * A debug only (stripped in process.env.NODE_ENV !== 'production') name
   * Helps you figure out where the class is coming from if you care
   **/
  $debugName?: string

  /**
   * The generated CSS selector gets its own unique location in the generated CSS (disables deduping).
   * So instead of `.classA,.classB{same properties}`
   * you get `.classA {same properties} .classB {same properties}`
   * This is needed for certain browser edge cases like placeholder styling
   **/
  $unique?: boolean
}

export interface CSSProperties extends WithFallback<CSSStyle> { }

export type ValueOrArray<T> = T | T[]

export type WithFallback<T> = {[P in keyof T]: ValueOrArray<T[P]> };

export type MediaQuery = {
  type?: 'screen' | 'print' | 'all'
  orientation?: 'landscape' | 'portrait'
  minWidth?: number | string
  maxWidth?: number | string
  minHeight?: number | string
  maxHeight?: number | string
}

/**
 * For animation keyframe definition
 */
export interface KeyFrames {
  $debugName?: string
  [/** stuff like `from`, `to` or `10%` etc*/
  key: string]: CSSProperties | string | undefined
}

export * from './types/cssType'
export { NestedCSSSelectors, CSSStyle, CSSFontRule }
