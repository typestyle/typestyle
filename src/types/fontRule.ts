import * as cssType from "./cssType";

export interface CSSFontRule {
  fontFamily?: string

  /**
   * Location of a font-face.  Used with the @font-face at rule
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/src
   */
  src?: string
  unicodeRange?: any
  fontVariant?: 'common-ligatures' | 'small-caps' | cssType.CSSGlobalValues
  fontFeatureSettings?: string
  fontWeight?: cssType.CSSFontWeight
  fontStyle?: 'normal' | 'italic' | 'oblique' | cssType.CSSGlobalValues
}
