import * as cssType from './cssType'

/**
 * This interface documents key CSS properties for autocomplete
 */
export interface CSSStyle {
  /**
   * Smooth scrolling on an iPhone. Specifies whether to use native-style scrolling in an element.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-overflow-scrolling
   */
  '-webkit-overflow-scrolling'?: 'auto' | 'touch'

  /**
   * Aligns a flex container's lines within the flex container when there is extra space in the cross-axis, similar to how justify-content aligns individual items within the main-axis.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/align-content
   */
  alignContent?: cssType.AlignContent

  /**
   * Sets the default alignment in the cross axis for all of the flex container's items, including anonymous flex items, similarly to how justify-content aligns items along the main axis.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/align-items
   */
  alignItems?: cssType.AlignItems
  '-ms-align-items'?: cssType.AlignItems
  '-webkit-align-items'?: cssType.AlignItems

  /**
   * Allows the default alignment to be overridden for individual flex items.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/align-self
   */
  alignSelf?: cssType.AlignSelf
  '-webkit-align-self'?: cssType.AlignSelf
  '-ms-flex-item-align'?: string

  /**
   * This property allows precise alignment of elements, such as graphics, that do not have a baseline-table or lack the desired baseline in their baseline-table. With the alignment-adjust property, the position of the baseline identified by the alignment-baseline can be explicitly determined. It also determines precisely the alignment point for each glyph within a textual element.
   */
  alignmentAdjust?: any

  /**
   * The alignment-baseline attribute specifies how an object is aligned with respect to its parent.
   * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/alignment-baseline
   */
  alignmentBaseline?:
    | 'auto'
    | 'baseline'
    | 'before-edge'
    | 'text-before-edge'
    | 'middle'
    | 'central'
    | 'after-edge'
    | 'text-after-edge'
    | 'ideographic'
    | 'alphabetic'
    | 'hanging'
    | 'mathematical'
    | 'inherit'

  /**
   * Shorthand property for animation-name, animation-duration, animation-timing-function, animation-delay,
   * animation-iteration-count, animation-direction, animation-fill-mode, and animation-play-state.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/animation
   */
  animation?: string

  /**
   * Defines a length of time to elapse before an animation starts, allowing an animation to begin execution some time after it is applied.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/animation-delay
   */
  animationDelay?: any

  /**
   * Defines whether an animation should run in reverse on some or all cycles.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/animation-direction
   */
  animationDirection?: cssType.CSSGlobalValues | 'normal' | 'alternate' | 'reverse' | 'alternate-reverse'

  /**
   * The animation-duration CSS property specifies the length of time that an animation should take to complete one cycle.
   * A value of '0s', which is the default value, indicates that no animation should occur.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/animation-duration
   */
  animationDuration?: string

  /**
   * Specifies how a CSS animation should apply styles to its target before and after it is executing.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/animation-fill-mode
   */
  animationFillMode?: 'none' | 'forwards' | 'backwards' | 'both'

  /**
   * Specifies how many times an animation cycle should play.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/animation-iteration-count
   */
  animationIterationCount?: number | 'infinite'

  /**
   * Defines the list of animations that apply to the element.
   * Note: You probably want animationDuration as well
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/animation-name
   */
  animationName?: string

  /**
   * Defines whether an animation is running or paused.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/animation-play-state
   */
  animationPlayState?: cssType.CSSAnimationPlayState

  /**
   * Sets the pace of an animation
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function
   */
  animationTimingFunction?: cssType.CSSTimingFunction

  /**
   * Allows changing the style of any element to platform-based interface elements or vice versa.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/appearance
   */
  appearance?: 'auto' | 'none'

  /**
   * Determines whether or not the “back” side of a transformed element is visible when facing the viewer.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/backface-visibility
   */
  backfaceVisibility?: cssType.CSSGlobalValues | 'visible' | 'hidden'

  /**
   * Shorthand property to set the values for one or more of:
   * background-clip, background-color, background-image,
   * background-origin, background-position, background-repeat,
   * background-size, and background-attachment.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background
   */
  background?: any

  /**
   * If a background-image is specified, this property determines
   * whether that image's position is fixed within the viewport,
   * or scrolls along with its containing block.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-attachment
   */
  backgroundAttachment?: 'scroll' | 'fixed' | 'local'

  /**
   * This property describes how the element's background images should blend with each other and the element's background color.
   * The value is a list of blend modes that corresponds to each background image. Each element in the list will apply to the corresponding element of background-image. If a property doesn’t have enough comma-separated values to match the number of layers, the UA must calculate its used value by repeating the list of values until there are enough.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-blend-mode
   */
  backgroundBlendMode?: cssType.CSSBlendMode

  /**
   * Specifies whether an element's background, either the color or image, extends underneath its border.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip
   */
  backgroundClip?: cssType.CSSBox | 'text'

  /**
   * Sets the background color of an element.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
   */
  backgroundColor?: cssType.CSSColor

  /**
   * Sets a compositing style for background images and colors.
   */
  backgroundComposite?: any

  /**
   * Applies one or more background images to an element. These can be any valid CSS image, including url() paths to image files or CSS gradients.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-image
   */
  backgroundImage?: cssType.CSSImage

  /**
   * Specifies what the background-position property is relative to.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-origin
   */
  backgroundOrigin?: cssType.CSSBox

  /**
   * Sets the position of a background image.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-position
   */
  backgroundPosition?: cssType.CSSPosition

  /**
   * Background-repeat defines if and how background images will be repeated after they have been sized and positioned
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat
   */
  backgroundRepeat?: cssType.CSSRepeatStyle | string

  /**
   * Background-size specifies the size of a background image
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-size
   */
  backgroundSize?: 'auto' | 'cover' | 'contain' | cssType.CSSLength | cssType.CSSPercentage | cssType.CSSGlobalValues

  /**
   * Obsolete - spec retired, not implemented.
   * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/baseline-shift
   */
  baselineShift?: any

  /**
   * Non standard. Sets or retrieves the location of the Dynamic HTML (DHTML) behavior.
   * @see https://msdn.microsoft.com/en-us/library/ms530723(v=vs.85).aspx
   */
  behavior?: any

  /**
   * Shorthand property that defines the different properties of all four sides of an element's border in a single declaration. It can be used to set border-width, border-style and border-color, or a subset of these.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border
   */
  border?: any

  /**
   * Shorthand that sets the values of border-bottom-color,
   * border-bottom-style, and border-bottom-width.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom
   */
  borderBottom?: cssType.CSSBorderShorthand

  /**
   * Sets the color of the bottom border of an element.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-color
   */
  borderBottomColor?: cssType.CSSColor

  /**
   * Defines the shape of the border of the bottom-left corner.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-left-radius
   */
  borderBottomLeftRadius?: any

  /**
   * Defines the shape of the border of the bottom-right corner.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-right-radius
   */
  borderBottomRightRadius?: any

  /**
   * Sets the line style of the bottom border of a box.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-style
   */
  borderBottomStyle?: cssType.CSSLineStyle

  /**
   * Sets the width of an element's bottom border. To set all four borders, use the border-width shorthand property which sets the values simultaneously for border-top-width, border-right-width, border-bottom-width, and border-left-width.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-width
   */
  borderBottomWidth?: cssType.CSSLength | cssType.CSSPercentage

  /**
   * Border-collapse can be used for collapsing the borders between table cells
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-collapse
   */
  borderCollapse?: any

  /**
   * The CSS border-color property sets the color of an element's four borders. This property can have from one to four values, made up of the elementary properties:
   *      •       border-top-color
   *      •       border-right-color
   *      •       border-bottom-color
   *      •       border-left-color The default color is the currentColor of each of these values.
   * If you provide one value, it sets the color for the element. Two values set the horizontal and vertical values, respectively. Providing three values sets the top, vertical, and bottom values, in that order. Four values set all for sides: top, right, bottom, and left, in that order.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
   */
  borderColor?: cssType.CSSColorSet

  /**
   * Specifies different corner clipping effects, such as scoop (inner curves), bevel (straight cuts) or notch (cut-off rectangles). Works along with border-radius to specify the size of each corner effect.
   */
  borderCornerShape?: any

  /**
   * The property border-image-source is used to set the image to be used instead of the border style. If this is set to none the border-style is used instead.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-source
   */
  borderImageSource?: cssType.CSSImage

  /**
   * The border-image-width CSS property defines the offset to use for dividing the border image in nine parts, the top-left corner, central top edge, top-right-corner, central right edge, bottom-right corner, central bottom edge, bottom-left corner, and central right edge. They represent inward distance from the top, right, bottom, and left edges.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-width
   */
  borderImageWidth?: cssType.CSSLength | cssType.CSSPercentage

  /**
   * Shorthand property that defines the border-width, border-style and border-color of an element's left border in a single declaration. Note that you can use the corresponding longhand properties to set specific individual properties of the left border — border-left-width, border-left-style and border-left-color.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-left
   */
  borderLeft?: cssType.CSSBorderShorthand

  /**
   * The CSS border-left-color property sets the color of an element's left border. This page explains the border-left-color value, but often you will find it more convenient to fix the border's left color as part of a shorthand set, either border-left or border-color.
   * Colors can be defined several ways. For more information, see Usage.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-color
   */
  borderLeftColor?: cssType.CSSColor

  /**
   * Sets the style of an element's left border. To set all four borders, use the shorthand property, border-style. Otherwise, you can set the borders individually with border-top-style, border-right-style, border-bottom-style, border-left-style.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-style
   */
  borderLeftStyle?: cssType.CSSLineStyle

  /**
   * Sets the width of an element's left border. To set all four borders, use the border-width shorthand property which sets the values simultaneously for border-top-width, border-right-width, border-bottom-width, and border-left-width.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-width
   */
  borderLeftWidth?: cssType.CSSLength | cssType.CSSPercentage

  /**
   * Allows Web authors to define how rounded border corners are
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
   */
  borderRadius?: cssType.CSSLength | cssType.CSSPercentage

  /**
   * Shorthand property that defines the border-width, border-style and border-color of an element's right border in a single declaration. Note that you can use the corresponding longhand properties to set specific individual properties of the right border — border-right-width, border-right-style and border-right-color.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-right
   */
  borderRight?: cssType.CSSBorderShorthand

  /**
   * Sets the color of an element's right border. This page explains the border-right-color value, but often you will find it more convenient to fix the border's right color as part of a shorthand set, either border-right or border-color.
   * Colors can be defined several ways. For more information, see Usage.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-color
   */
  borderRightColor?: cssType.CSSColor

  /**
   * Sets the style of an element's right border. To set all four borders, use the shorthand property, border-style. Otherwise, you can set the borders individually with border-top-style, border-right-style, border-bottom-style, border-left-style.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-style
   */
  borderRightStyle?: cssType.CSSLineStyle

  /**
   * Sets the width of an element's right border. To set all four borders, use the border-width shorthand property which sets the values simultaneously for border-top-width, border-right-width, border-bottom-width, and border-left-width.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-width
   */
  borderRightWidth?: cssType.CSSLength | cssType.CSSPercentage

  /**
   * Specifies the distance between the borders of adjacent cells.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-spacing
   */
  borderSpacing?: cssType.CSSLength | string | 'inherit'

  /**
   * Sets the style of an element's four borders. This property can have from one to four values. With only one value, the value will be applied to all four borders; otherwise, this works as a shorthand property for each of border-top-style, border-right-style, border-bottom-style, border-left-style, where each border style may be assigned a separate value.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-style
   */
  borderStyle?: cssType.CSSLineStyleSet

  /**
   * Shorthand property that defines the border-width, border-style and border-color of an element's top border in a single declaration. Note that you can use the corresponding longhand properties to set specific individual properties of the top border — border-top-width, border-top-style and border-top-color.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-top
   */
  borderTop?: cssType.CSSBorderShorthand

  /**
   * Sets the color of an element's top border. This page explains the border-top-color value, but often you will find it more convenient to fix the border's top color as part of a shorthand set, either border-top or border-color.
   * Colors can be defined several ways. For more information, see Usage.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-color
   */
  borderTopColor?: cssType.CSSColor

  /**
   * Sets the rounding of the top-left corner of the element.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-left-radius
   */
  borderTopLeftRadius?: any

  /**
   * Sets the rounding of the top-right corner of the element.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-right-radius
   */
  borderTopRightRadius?: any

  /**
   * Sets the style of an element's top border. To set all four borders, use the shorthand property, border-style. Otherwise, you can set the borders individually with border-top-style, border-right-style, border-bottom-style, border-left-style.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-style
   */
  borderTopStyle?: cssType.CSSLineStyle

  /**
   * Sets the width of an element's top border. To set all four borders, use the border-width shorthand property which sets the values simultaneously for border-top-width, border-right-width, border-bottom-width, and border-left-width.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-width
   */
  borderTopWidth?: cssType.CSSLength | cssType.CSSPercentage

  /**
   * Sets the width of an element's four borders. This property can have from one to four values. This is a shorthand property for setting values simultaneously for border-top-width, border-right-width, border-bottom-width, and border-left-width.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-width
   */
  borderWidth?: cssType.CSSLength | cssType.CSSPercentage

  /**
   * This property specifies how far an absolutely positioned box's bottom margin edge is offset above the bottom edge of the box's containing block. For relatively positioned boxes, the offset is with respect to the bottom edges of the box itself (i.e., the box is given a position in the normal flow, then offset from that position according to these properties).
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/bottom
   */
  bottom?: 'auto' | cssType.CSSLength | cssType.CSSPercentage | cssType.CSSGlobalValues

  /**
   * Obsolete.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/box-align
   */
  boxAlign?: any

  /**
   * Breaks a box into fragments creating new borders, padding and repeating backgrounds or lets it stay as a continuous box on a page break, column break, or, for inline elements, at a line break.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/box-decoration-break
   */
  boxDecorationBreak?: any

  /**
   * Deprecated
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/box-direction
   */
  boxDirection?: any

  /**
   * Do not use. This property has been replaced by the flex-wrap property.
   * Gets or sets a value that specifies the direction to add successive rows or columns when the value of box-lines is set to multiple.
   */
  boxLineProgression?: any

  /**
   * Do not use. This property has been replaced by the flex-wrap property.
   * Gets or sets a value that specifies whether child elements wrap onto multiple lines or columns based on the space available in the object.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/box-lines
   */
  boxLines?: any

  /**
   * Do not use. This property has been replaced by flex-order.
   * Specifies the ordinal group that a child element of the object belongs to. This ordinal value identifies the display order (along the axis defined by the box-orient property) for the group.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/box-ordinal-group
   */
  boxOrdinalGroup?: any

  /**
   * Deprecated.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/box-flex
   */
  boxFlex?: number

  /**
   * box sizing
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing
   */
  boxSizing?: cssType.CSSGlobalValues | 'content-box' | 'border-box'
  '-moz-box-sizing'?: cssType.CSSGlobalValues | 'content-box' | 'border-box'
  '-webkit-box-sizing'?: cssType.CSSGlobalValues | 'content-box' | 'border-box'

  /**
   * Box shadow
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow
   */
  boxShadow?: number | string

  /**
   * Deprecated.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/box-flex-group
   */
  boxFlexGroup?: number

  /**
   * The CSS break-after property allows you to force a break on multi-column layouts. More specifically, it allows you to force a break after an element. It allows you to determine if a break should occur, and what type of break it should be. The break-after CSS property describes how the page, column or region break behaves after the generated box. If there is no generated box, the property is ignored.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/break-after
   */
  breakAfter?:
    | 'auto'
    | 'avoid'
    | 'avoid-page'
    | 'page'
    | 'left'
    | 'right'
    | 'recto'
    | 'verso'
    | 'avoid-column'
    | 'column'
    | 'avoid-region'
    | 'region'

  /**
   * Control page/column/region breaks that fall above a block of content
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/break-before
   */
  breakBefore?:
    | 'auto'
    | 'avoid'
    | 'avoid-page'
    | 'page'
    | 'left'
    | 'right'
    | 'recto'
    | 'verso'
    | 'avoid-column'
    | 'column'
    | 'avoid-region'
    | 'region'

  /**
   * Control page/column/region breaks that fall within a block of content
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/break-inside
   */
  breakInside?: 'auto' | 'avoid' | 'avoid-page' | 'avoid-column' | 'avoid-region'

  /**
   * The caption-side CSS property positions the content of a table's <caption> on the specified side.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/caption-side
   */
  captionSide?: cssType.CSSGlobalValues | 'top' | 'bottom' | 'block-start' | 'block-end' | 'inline-start' | 'inline-end'

  /**
   * The clear CSS property specifies if an element can be positioned next to or must be positioned below the floating elements that precede it in the markup.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/clear
   */
  clear?: cssType.CSSGlobalValues | 'none' | 'left' | 'right' | 'both'

  /**
   * Deprecated; see clip-path.
   * Lets you specify the dimensions of an absolutely positioned element that should be visible, and the element is clipped into this shape, and displayed.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/clip
   */
  clip?: any

  /**
   * Clipping crops an graphic, so that only a portion of the graphic is rendered, or filled. This clip-rule property, when used with the clip-path property, defines which clip rule, or algorithm, to use when filling the different parts of a graphics.
   * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/clip-rule
   */
  clipRule?: any

  /**
   * The color property sets the color of an element's foreground content (usually text), accepting any standard CSS color from keywords and hex values to RGB(a) and HSL(a).
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
   */
  color?: cssType.CSSColor

  /**
   * Describes the number of columns of the element.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/column-count
   */
  columnCount?: number

  /**
   * Specifies how to fill columns (balanced or sequential).
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/column-fill
   */
  columnFill?: any

  /**
   * The column-gap property controls the width of the gap between columns in multi-column elements.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap
   */
  columnGap?: any

  /**
   * Sets the width, style, and color of the rule between columns.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/column-rule
   */
  columnRule?: any

  /**
   * Specifies the color of the rule between columns.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/column-rule-color
   */
  columnRuleColor?: cssType.CSSColor

  /**
   * Specifies the width of the rule between columns.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/column-rule-width
   */
  columnRuleWidth?: cssType.CSSLength | cssType.CSSPercentage

  /**
   * The column-span CSS property makes it possible for an element to span across all columns when its value is set to all. An element that spans more than one column is called a spanning element.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/column-span
   */
  columnSpan?: any

  /**
   * Specifies the width of columns in multi-column elements.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/column-width
   */
  columnWidth?: cssType.CSSLength | cssType.CSSPercentage

  /**
   * This property is a shorthand property for setting column-width and/or column-count.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/columns
   */
  columns?: any

  /**
   * The content property is used with the :before and :after pseudo-elements, to insert generated content.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/content
   */
  content?: string

  /**
   * The counter-increment property accepts one or more names of counters (identifiers), each one optionally followed by an integer which specifies the value by which the counter should be incremented (e.g. if the value is 2, the counter increases by 2 each time it is invoked).
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/counter-increment
   */
  counterIncrement?: any

  /**
   * The counter-reset property contains a list of one or more names of counters, each one optionally followed by an integer (otherwise, the integer defaults to 0.) Each time the given element is invoked, the counters specified by the property are set to the given integer.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/counter-reset
   */
  counterReset?: any

  /**
   * The cue property specifies sound files (known as an "auditory icon") to be played by speech media agents before and after presenting an element's content; if only one file is specified, it is played both before and after. The volume at which the file(s) should be played, relative to the volume of the main element, may also be specified. The icon files may also be set separately with the cue-before and cue-after properties.
   */
  cue?: any

  /**
   * The cue-after property specifies a sound file (known as an "auditory icon") to be played by speech media agents after presenting an element's content; the volume at which the file should be played may also be specified. The shorthand property cue sets cue sounds for both before and after the element is presented.
   */
  cueAfter?: any

  /**
   * Specifies the mouse cursor displayed when the mouse pointer is over an element.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/cursor
   */
  cursor?:
    | cssType.CSSGlobalValues
    | string
    | 'auto'
    | 'default'
    | 'none'
    | 'context-menu'
    | 'help'
    | 'pointer'
    | 'progress'
    | 'wait'
    | 'cell'
    | 'crosshair'
    | 'text'
    | 'vertical-text'
    | 'alias'
    | 'copy'
    | 'move'
    | 'no-drop'
    | 'not-allowed'
    | 'e-resize'
    | 'n-resize'
    | 'ne-resize'
    | 'nw-resize'
    | 's-resize'
    | 'se-resize'
    | 'sw-resize'
    | 'w-resize'
    | 'ew-resize'
    | 'ns-resize'
    | 'nesw-resize'
    | 'nwse-resize'
    | 'col-resize'
    | 'row-resize'
    | 'all-scroll'
    | 'zoom-in'
    | 'zoom-out'
    | 'grab'
    | 'grabbing'

  /**
   * The direction CSS property specifies the text direction/writing direction. The rtl is used for Hebrew or Arabic text, the ltr is for other languages.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/direction
   */
  direction?: cssType.CSSGlobalValues | 'ltr' | 'rtl'

  /**
   * This property specifies the type of rendering box used for an element. It is a shorthand property for many other display properties.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/display
   */
  display?: cssType.CSSGlobalValues | cssType.CSSDisplay

  /**
   * SVG: Used to determine or re-determine a scaled-baseline-table.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/dominant-baseline
   */
  dominantBaseline?:
    | 'auto'
    | 'use-script'
    | 'no-change'
    | 'reset-size'
    | 'ideographic'
    | 'alphabetic'
    | 'hanging'
    | 'mathematical'
    | 'central'
    | 'middle'
    | 'text-after-edge'
    | 'text-before-edge'
    | 'inherit'

  /**
   * The ‘empty-cells’ CSS property specifies how the user agent should render borders and backgrounds around <table> cells that have no visible content.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/empty-cells
   */
  emptyCells?: cssType.CSSGlobalValues | 'show' | 'hide'

  /**
   * The ‘fill’ property paints the interior of the given graphical element. The area to be painted consists of any areas inside the outline of the shape. To determine the inside of the shape, all subpaths are considered, and the interior is determined according to the rules associated with the current value of the ‘fill-rule’ property. The zero-width geometric outline of a shape is included in the area to be painted.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/fill
   */
  fill?: cssType.CSSColor | 'context-stroke' | 'context-fill'

  /**
   * SVG: Specifies the opacity of the color or the content the current object is filled with.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/fill-opacity
   */
  fillOpacity?: number

  /**
   * The ‘fill-rule’ property indicates the algorithm which is to be used to determine what parts of the canvas are included inside the shape. For a simple, non-intersecting path, it is intuitively clear what region lies "inside"; however, for a more complex path, such as a path that intersects itself or where one subpath encloses another, the interpretation of "inside" is not so obvious.
   * The ‘fill-rule’ property provides two options for how the inside of a shape is determined:
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/fill-rule
   */
  fillRule?: 'nonzero' | 'evenodd'

  /**
   * Applies various image processing effects. This property is largely unsupported. See Compatibility section for more information.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/filter
   */
  filter?: string

  /**
   * Shorthand for `flex-grow`, `flex-shrink`, and `flex-basis`.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flex
   */
  flex?: number | string
  '-webkit-flex'?: number | string
  '-ms-flex'?: number | string

  /**
   * Obsolete, do not use. This property has been renamed to align-items.
   * Specifies the alignment (perpendicular to the layout axis defined by the flex-direction property) of child elements of the object.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flex-align
   */
  flexAlign?: any
  '-ms-flex-align'?: any
  '-webkit-flex-align'?: any

  /**
   * The flex-basis CSS property describes the initial main size of the flex item before any free space is distributed according to the flex factors described in the flex property (flex-grow and flex-shrink).
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis
   */
  flexBasis?: any

  /**
   * The flex-direction CSS property describes how flex items are placed in the flex container, by setting the direction of the flex container's main axis.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction
   */
  flexDirection?: any
  '-ms-flex-direction'?: any
  '-webkit-flex-direction'?: any

  /**
   * The flex-flow CSS property defines the flex container's main and cross axis. It is a shorthand property for the flex-direction and flex-wrap properties.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flex-flow
   */
  flexFlow?: any

  /**
   * Specifies the flex grow factor of a flex item.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow
   */
  flexGrow?: number
  '-ms-flex-grow'?: number
  '-webkit-flex-grow'?: number

  /**
   * Do not use. This property has been renamed to align-self
   * Specifies the alignment (perpendicular to the layout axis defined by flex-direction) of child elements of the object.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flex-item-align
   */
  flexItemAlign?: any

  /**
   * Do not use. This property has been renamed to align-content.
   * Specifies how a flexbox's lines align within the flexbox when there is extra space along the axis that is perpendicular to the axis defined by the flex-direction property.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flex-line-pack
   */
  flexLinePack?: any

  flexPositive?: any
  '-ms-flex-positive'?: any
  '-webkit-flex-positive'?: any

  flexNegative?: any
  '-ms-flex-negative'?: any
  '-webkit-flex-negative'?: any

  /**
   * Gets or sets a value that specifies the ordinal group that a flexbox element belongs to. This ordinal value identifies the display order for the group.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flex-order
   */
  flexOrder?: any

  /**
   * Specifies the flex shrink factor of a flex item.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink
   */
  flexShrink?: number
  '-ms-flex-shrink'?: number
  '-webkit-flex-shrink'?: number

  /**
   * Specifies whether flex items are forced into a single line or can be wrapped onto multiple lines.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap
   */
  flexWrap?: cssType.CSSGlobalValues | 'nowrap' | 'wrap' | 'wrap-reverse'
  '-ms-flex-wrap'?: cssType.CSSGlobalValues | 'nowrap' | 'wrap' | 'wrap-reverse'
  '-webkit-flex-wrap'?: cssType.CSSGlobalValues | 'nowrap' | 'wrap' | 'wrap-reverse'

  /**
   * Elements which have the style float are floated horizontally. These elements can move as far to the left or right of the containing element. All elements after the floating element will flow around it, but elements before the floating element are not impacted. If several floating elements are placed after each other, they will float next to each other as long as there is room.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/float
   */
  float?: cssType.CSSGlobalValues | 'left' | 'right' | 'none' | 'inline-start' | 'inline-end'

  /**
   * Flows content from a named flow (specified by a corresponding flow-into) through selected elements to form a dynamic chain of layout regions.
   */
  flowFrom?: any

  /**
   * The font property is shorthand that allows you to do one of two things: you can either set up six of the most mature font properties in one line, or you can set one of a choice of keywords to adopt a system font setting.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font
   */
  font?: any

  /**
   * The font-family property allows one or more font family names and/or generic family names to be specified for usage on the selected element(s)' text. The browser then goes through the list; for each character in the selection it applies the first font family that has an available glyph for that character.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-family
   */
  fontFamily?: any

  /**
   * The font-kerning property allows contextual adjustment of inter-glyph spacing, i.e. the spaces between the characters in text. This property controls <bold>metric kerning</bold> - that utilizes adjustment data contained in the font. Optical Kerning is not supported as yet.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-kerning
   */
  fontKerning?: cssType.CSSGlobalValues | 'auto' | 'normal' | 'none'

  /**
   * Specifies the size of the font. Used to compute em and ex units.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-size
   */
  fontSize?: cssType.CSSFontSize

  /**
   * The font-size-adjust property adjusts the font-size of the fallback fonts defined with font-family, so that the x-height is the same no matter what font is used. This preserves the readability of the text when fallback happens.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-size-adjust
   */
  fontSizeAdjust?: any

  /**
   * Allows you to expand or condense the widths for a normal, condensed, or expanded font face.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-stretch
   */
  fontStretch?:
    | cssType.CSSGlobalValues
    | 'normal'
    | 'ultra-condensed'
    | 'extra-condensed'
    | 'condensed'
    | 'semi-condensed'
    | 'semi-expanded'
    | 'expanded'
    | 'extra-expanded'
    | 'ultra-expanded'

  /**
   * The font-style property allows normal, italic, or oblique faces to be selected. Italic forms are generally cursive in nature while oblique faces are typically sloped versions of the regular face. Oblique faces can be simulated by artificially sloping the glyphs of the regular face.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-style
   */
  fontStyle?: cssType.CSSGlobalValues | 'normal' | 'italic' | 'oblique'

  /**
   * This value specifies whether the user agent is allowed to synthesize bold or oblique font faces when a font family lacks bold or italic faces.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-synthesis
   */
  fontSynthesis?: any

  /**
   * The font-variant property enables you to select the small-caps font within a font family.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant
   */
  fontVariant?: any

  /**
   * The font-variant-numeric CSS property controls the usage of alternate glyphs for numbers, fractions, and ordinal markers.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-numeric
   */
  fontVariantNumeric?: cssType.CSSNumericFigureValue

  /**
   * Fonts can provide alternate glyphs in addition to default glyph for a character. This property provides control over the selection of these alternate glyphs.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-alternates
   */
  fontVariantAlternates?: any

  /**
   * Specifies the weight or boldness of the font.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight
   */
  fontWeight?: cssType.CSSFontWeight

  /**
   * Lays out one or more grid items bound by 4 grid lines. Shorthand for setting grid-column-start, grid-column-end, grid-row-start, and grid-row-end in a single declaration.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-area
   */
  gridArea?: any

  /**
   * Specifies the size of an implicitly-created grid column track.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns
   */
  gridAutoColumns?: any

  /**
   * Controls how the auto-placement algorithm works, specifying exactly how auto-placed items get flowed into the grid.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow
   */
  gridAutoFlow?: any

  /**
   * Specifies the size of an implicitly-created grid row track.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows
   */
  gridAutoRows?: any

  /**
   * Controls a grid item's placement in a grid area, particularly grid position and a grid span. Shorthand for setting grid-column-start and grid-column-end in a single declaration.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column
   */
  gridColumn?: any

  /**
   * Specifies the gutter between grid columns.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-gap
   */
  gridColumnGap?: any

  /**
   * Controls a grid item's placement in a grid area as well as grid position and a grid span. The grid-column-end property (with grid-row-start, grid-row-end, and grid-column-start) determines a grid item's placement by specifying the grid lines of a grid item's grid area.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-end
   */
  gridColumnEnd?: any

  /**
   * Determines a grid item's placement by specifying the starting grid lines of a grid item's grid area . A grid item's placement in a grid area consists of a grid position and a grid span. See also ( grid-row-start, grid-row-end, and grid-column-end)
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-start
   */
  gridColumnStart?: any

  /**
   * Specifies the gutters between grid rows and columns, Shorthand for for grid-row-gap and grid-column-gap in a single declaration.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-gap
   */
  gridGap?: any

  /**
   * Gets or sets a value that indicates which row an element within a Grid should appear in. Shorthand for setting grid-row-start and grid-row-end in a single declaration.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row
   */
  gridRow?: any

  /**
   * Determines a grid item’s placement by specifying the block-end. A grid item's placement in a grid area consists of a grid position and a grid span. The grid-row-end property (with grid-row-start, grid-column-start, and grid-column-end) determines a grid item's placement by specifying the grid lines of a grid item's grid area.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-end
   */
  gridRowEnd?: any

  /**
   * Specifies the gutter between grid rows.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-gap
   */
  gridRowGap?: any

  /**
   * Determines a grid item’s start position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start edge of its grid area.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-start
   */
  gridRowStart?: any

  /**
   * Specifies a row position based upon an integer location, string value, or desired row size.
   * css/properties/grid-row is used as short-hand for grid-row-position and grid-row-position
   */
  gridRowPosition?: any

  gridRowSpan?: any

  /**
   * Is a shorthand property for defining grid columns, rows, and areas.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas
   */
  gridTemplate?: any

  /**
   * Specifies named grid areas which are not associated with any particular grid item, but can be referenced from the grid-placement properties. The syntax of the grid-template-areas property also provides a visualization of the structure of the grid, making the overall layout of the grid container easier to understand.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas
   */
  gridTemplateAreas?: any

  /**
   * Specifies (with grid-template-rows) the line names and track sizing functions of the grid. Each sizing function can be specified as a length, a percentage of the grid container’s size, a measurement of the contents occupying the column or row, or a fraction of the free space in the grid.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns
   */
  gridTemplateColumns?: any

  /**
   * Specifies (with grid-template-columns) the line names and track sizing functions of the grid. Each sizing function can be specified as a length, a percentage of the grid container’s size, a measurement of the contents occupying the column or row, or a fraction of the free space in the grid.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows
   */
  gridTemplateRows?: any

  /**
   * Sets the height of an element. The content area of the element height does not include the padding, border, and margin of the element.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/height
   */
  height?: 'auto' | cssType.CSSLength | cssType.CSSPercentage | cssType.CSSGlobalValues

  /**
   * Specifies the minimum number of characters in a hyphenated word
   * @see https://msdn.microsoft.com/en-us/library/hh771865(v=vs.85).aspx
   */
  hyphenateLimitChars?: any

  /**
   * Indicates the maximum number of successive hyphenated lines in an element. The ‘no-limit’ value means that there is no limit.
   * @see https://msdn.microsoft.com/en-us/library/hh771867(v=vs.85).aspx
   */
  hyphenateLimitLines?: any

  /**
   * Specifies the maximum amount of trailing whitespace (before justification) that may be left in a line before hyphenation is triggered to pull part of a word from the next line back up into the current one.
   * @see https://msdn.microsoft.com/en-us/library/hh771869(v=vs.85).aspx
   */
  hyphenateLimitZone?: any

  /**
   * Specifies whether or not words in a sentence can be split by the use of a manual or automatic hyphenation mechanism.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/hyphens
   */
  hyphens?: cssType.CSSGlobalValues | string | 'none' | 'manual' | 'auto'

  /**
   * Controls the state of the input method editor for text fields.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/ime-mode
   */
  imeMode?: cssType.CSSGlobalValues | 'auto' | 'normal' | 'active' | 'inactive' | 'disabled'

  /**
   * Defines how the browser distributes space between and around flex items
   * along the main-axis of their container.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content
   */
  justifyContent?: cssType.JustifyContent
  '-webkit-justify-content'?: cssType.JustifyContent
  '-ms-flex-pack'?: string

  /**
   * Defines the default justify-self for all items of the box, given them the
   * default way of justifying each box along the appropriate axis
   */
  justifyItems?: cssType.JustifyItems

  /**
   * Defines the way of justifying a box inside its container along the appropriate axis.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/justify-self
   */
  justifySelf?: cssType.JustifySelf

  layoutGrid?: any

  layoutGridChar?: any

  layoutGridLine?: any

  layoutGridMode?: any

  layoutGridType?: any

  /**
   * Sets the left edge of an element
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/left
   */
  left?: 'auto' | cssType.CSSLength | cssType.CSSPercentage | cssType.CSSGlobalValues

  /**
   * The letter-spacing CSS property specifies the spacing behavior between text characters.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing
   */
  letterSpacing?: any

  /**
   * Deprecated. Gets or sets line-breaking rules for text in selected languages such as Japanese, Chinese, and Korean.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/line-break
   */
  lineBreak?: any

  lineClamp?: number

  /**
   * Specifies the height of an inline block level element.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/line-height
   */
  lineHeight?: cssType.CSSLength | cssType.CSSPercentage

  /**
   * Shorthand property that sets the list-style-type, list-style-position and list-style-image properties in one declaration.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/list-style
   */
  listStyle?: any

  /**
   * This property sets the image that will be used as the list item marker. When the image is available, it will replace the marker set with the 'list-style-type' marker. That also means that if the image is not available, it will show the style specified by list-style-property
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-image
   */
  listStyleImage?: any

  /**
   * Specifies if the list-item markers should appear inside or outside the content flow.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-position
   */
  listStylePosition?: cssType.CSSGlobalValues | 'inside' | 'outside'

  /**
   * Specifies the type of list-item marker in a list.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type
   */
  listStyleType?: any

  /**
   * The margin property is shorthand to allow you to set all four margins of an element at once. Its equivalent longhand properties are margin-top, margin-right, margin-bottom and margin-left. Negative values are also allowed.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
   */
  margin?: any

  /**
   * margin-bottom sets the bottom margin of an element.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin-bottom
   */
  marginBottom?: any

  /**
   * margin-left sets the left margin of an element.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin-left
   */
  marginLeft?: any

  /**
   * margin-right sets the right margin of an element.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin-right
   */
  marginRight?: any

  /**
   * margin-top sets the top margin of an element.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin-top
   */
  marginTop?: number | string

  /**
   * The marquee-direction determines the initial direction in which the marquee content moves.
   */
  marqueeDirection?: any

  /**
   * The 'marquee-style' property determines a marquee's scrolling behavior.
   */
  marqueeStyle?: any

  /**
   * This property is shorthand for setting mask-image, mask-mode, mask-repeat, mask-position, mask-clip, mask-origin, mask-composite and mask-size. Omitted values are set to their original properties' initial values.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/mask
   */
  mask?: any

  /**
   * This property is shorthand for setting mask-border-source, mask-border-slice, mask-border-width, mask-border-outset, and mask-border-repeat. Omitted values are set to their original properties' initial values.
   */
  maskBorder?: any

  /**
   * This property specifies how the images for the sides and the middle part of the mask image are scaled and tiled. The first keyword applies to the horizontal sides, the second one applies to the vertical ones. If the second keyword is absent, it is assumed to be the same as the first, similar to the CSS border-image-repeat property.
   */
  maskBorderRepeat?: any

  /**
   * This property specifies inward offsets from the top, right, bottom, and left edges of the mask image, dividing it into nine regions: four corners, four edges, and a middle. The middle image part is discarded and treated as fully transparent black unless the fill keyword is present. The four values set the top, right, bottom and left offsets in that order, similar to the CSS border-image-slice property.
   */
  maskBorderSlice?: any

  /**
   * Specifies an image to be used as a mask. An image that is empty, fails to download, is non-existent, or cannot be displayed is ignored and does not mask the element.
   */
  maskBorderSource?: any

  /**
   * This property sets the width of the mask box image, similar to the CSS border-image-width property.
   */
  maskBorderWidth?: cssType.CSSLength | cssType.CSSPercentage

  /**
   * Determines the mask painting area, which defines the area that is affected by the mask. The painted content of an element may be restricted to this area.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/mask-clip
   */
  maskClip?: any

  /**
   * For elements rendered as a single box, specifies the mask positioning area. For elements rendered as multiple boxes (e.g., inline boxes on several lines, boxes on several pages) specifies which boxes box-decoration-break operates on to determine the mask positioning area(s).
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/mask-origin
   */
  maskOrigin?: any

  /**
   * This property must not be used. It is no longer included in any standard or standard track specification, nor is it implemented in any browser. It is only used when the text-align-last property is set to size. It controls allowed adjustments of font-size to fit line content.
   */
  maxFontSize?: any

  /**
   * Sets the maximum height for an element. It prevents the height of the element to exceed the specified value. If min-height is specified and is greater than max-height, max-height is overridden.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/max-height
   */
  maxHeight?: cssType.CSSLength | cssType.CSSPercentage

  /**
   * Sets the maximum width for an element. It limits the width property to be larger than the value specified in max-width.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/max-width
   */
  maxWidth?: cssType.CSSLength | cssType.CSSPercentage

  /**
   * Sets the minimum height for an element. It prevents the height of the element to be smaller than the specified value. The value of min-height overrides both max-height and height.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/min-height
   */
  minHeight?: cssType.CSSLength | cssType.CSSPercentage

  /**
   * Sets the minimum width of an element. It limits the width property to be not smaller than the value specified in min-width.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/min-width
   */
  minWidth?: cssType.CSSLength | cssType.CSSPercentage

  /**
   * The blend mode defines the formula that must be used to mix the colors with the backdrop
   * @see https://drafts.fxtf.org/compositing-1/#mix-blend-mode
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode
   */
  mixBlendMode?: cssType.CSSBlendMode

  /**
   * Specifies how the contents of a replaced element should be fitted to the box established by its used height and width.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit
   */
  objectFit?: cssType.CSSObjectFit

  /**
   * Determines the alignment of the element inside its box.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/object-position
   */
  objectPosition?: string | cssType.CSSGlobalValues

  /**
   * Specifies the transparency of an element.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/opacity
   */
  opacity?: number | cssType.CSSGlobalValues

  /**
   * Specifies the order used to lay out flex items in their flex container.
   * Elements are laid out in the ascending order of the order value.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/order
   */
  order?: number

  /**
   * In paged media, this property defines the minimum number of lines in
   * a block container that must be left at the bottom of the page.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/orphans
   */
  orphans?: number

  /**
   * The CSS outline property is a shorthand property for setting one or more of the individual outline properties outline-style, outline-width and outline-color in a single rule. In most cases the use of this shortcut is preferable and more convenient.
   * Outlines differ from borders in the following ways:  •       Outlines do not take up space, they are drawn above the content.
   *      •       Outlines may be non-rectangular. They are rectangular in Gecko/Firefox. Internet Explorer attempts to place the smallest contiguous outline around all elements or shapes that are indicated to have an outline. Opera draws a non-rectangular shape around a construct.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/outline
   */
  outline?: any

  /**
   * The outline-color property sets the color of the outline of an element. An outline is a line that is drawn around elements, outside the border edge, to make the element stand out.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/outline-color
   */
  outlineColor?: cssType.CSSColor

  /**
   * The outline-style property sets the style of the outline of an element.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/outline-style
   */
  outlineStyle?:
    | cssType.CSSGlobalValues
    | 'auto'
    | 'none'
    | 'dotted'
    | 'dashed'
    | 'solid'
    | 'double'
    | 'groove'
    | 'ridge'
    | 'inset'
    | 'outset'

  /**
   * The outline-offset property offsets the outline and draw it beyond the border edge.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/outline-offset
   */
  outlineOffset?: any

  /**
   * The outline-width CSS property is used to set the width of the outline of an element. An outline is a line that is drawn around elements, outside the border edge, to make the element stand out
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/outline-width
   */
  outlineWidth?: cssType.CSSGlobalValues | 'thin' | 'medium' | 'thick' | cssType.CSSLength

  /**
   * The overflow property controls how extra content exceeding the bounding box of an element is rendered. It can be used in conjunction with an element that has a fixed width and height, to eliminate text-induced page distortion.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/overflow
   */
  overflow?: cssType.CSSOverflow

  /**
   * Specifies the preferred scrolling methods for elements that overflow.
   */
  overflowStyle?: any

  /**
   * The overflow-wrap CSS property specifies whether or not the browser should insert line breaks within words to prevent
   * text from overflowing its content box. In contrast to word-break, overflow-wrap will only create a break if an entire
   * word cannot be placed on its own line without overflowing.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-wrap
   */
  overflowWrap?: cssType.CSSGlobalValues | 'normal' | 'break-word'

  /**
   * Controls how extra content exceeding the x-axis of the bounding box of an element is rendered.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-x
   */
  overflowX?: cssType.CSSOverflow

  /**
   * Controls how extra content exceeding the y-axis of the bounding box of an element is rendered.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-y
   */
  overflowY?: cssType.CSSOverflow

  /**
   * The padding optional CSS property sets the required padding space on one to four sides of an element. The padding area is the space between an element and its border. Negative values are not allowed but decimal values are permitted. The element size is treated as fixed, and the content of the element shifts toward the center as padding is increased.
   * The padding property is a shorthand to avoid setting each side separately (padding-top, padding-right, padding-bottom, padding-left).
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
   */
  padding?: any

  /**
   * The padding-bottom CSS property of an element sets the padding space required on the bottom of an element. The padding area is the space between the content of the element and its border. Contrary to margin-bottom values, negative values of padding-bottom are invalid.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding-bottom
   */
  paddingBottom?: cssType.CSSLength | cssType.CSSPercentage

  /**
   * The padding-left CSS property of an element sets the padding space required on the left side of an element. The padding area is the space between the content of the element and its border. Contrary to margin-left values, negative values of padding-left are invalid.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding-left
   */
  paddingLeft?: cssType.CSSLength | cssType.CSSPercentage

  /**
   * The padding-right CSS property of an element sets the padding space required on the right side of an element. The padding area is the space between the content of the element and its border. Contrary to margin-right values, negative values of padding-right are invalid.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding-right
   */
  paddingRight?: cssType.CSSLength | cssType.CSSPercentage

  /**
   * The padding-top CSS property of an element sets the padding space required on the top of an element. The padding area is the space between the content of the element and its border. Contrary to margin-top values, negative values of padding-top are invalid.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding-top
   */
  paddingTop?: cssType.CSSLength | cssType.CSSPercentage

  /**
   * The page-break-after property is supported in all major browsers. With CSS3, page-break-* properties are only aliases of the break-* properties. The CSS3 Fragmentation spec defines breaks for all CSS box fragmentation.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/page-break-after
   */
  pageBreakAfter?: cssType.CSSGlobalValues | 'auto' | 'always' | 'avoid' | 'left' | 'right' | 'recto' | 'verso'

  /**
   * The page-break-before property sets the page-breaking behavior before an element. With CSS3, page-break-* properties are only aliases of the break-* properties. The CSS3 Fragmentation spec defines breaks for all CSS box fragmentation.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/page-break-before
   */
  pageBreakBefore?: cssType.CSSGlobalValues | 'auto' | 'always' | 'avoid' | 'left' | 'right' | 'recto' | 'verso'

  /**
   * Sets the page-breaking behavior inside an element. With CSS3, page-break-* properties are only aliases of the break-* properties. The CSS3 Fragmentation spec defines breaks for all CSS box fragmentation.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/page-break-inside
   */
  pageBreakInside?: cssType.CSSGlobalValues | 'auto' | 'avoid'

  /**
   * The pause property determines how long a speech media agent should pause before and after presenting an element. It is a shorthand for the pause-before and pause-after properties.
   */
  pause?: any

  /**
   * The pause-after property determines how long a speech media agent should pause after presenting an element. It may be replaced by the shorthand property pause, which sets pause time before and after.
   */
  pauseAfter?: any

  /**
   * The pause-before property determines how long a speech media agent should pause before presenting an element. It may be replaced by the shorthand property pause, which sets pause time before and after.
   */
  pauseBefore?: any

  /**
   * The perspective property defines how far an element is placed from the view on the z-axis, from the screen to the viewer.
   * Perspective defines how an object is viewed. In graphic arts, perspective is the representation on a flat surface of what the viewer's eye would see in a 3D space. (See Wikipedia for more information about graphical perspective and for related illustrations.)
   * The illusion of perspective on a flat surface, such as a computer screen, is created by projecting points on the flat surface as they would appear if the flat surface were a window through which the viewer was looking at the object. In discussion of virtual environments, this flat surface is called a projection plane.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/perspective
   */
  perspective?: any

  /**
   * The perspective-origin property establishes the origin for the perspective property. It effectively sets the X and Y position at which the viewer appears to be looking at the children of the element.
   * When used with perspective, perspective-origin changes the appearance of an object, as if a viewer were looking at it from a different origin. An object appears differently if a viewer is looking directly at it versus looking at it from below, above, or from the side. Thus, the perspective-origin is like a vanishing point.
   * The default value of perspective-origin is 50% 50%. This displays an object as if the viewer's eye were positioned directly at the center of the screen, both top-to-bottom and left-to-right. A value of 0% 0% changes the object as if the viewer was looking toward the top left angle. A value of 100% 100% changes the appearance as if viewed toward the bottom right angle.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/perspective-origin
   */
  perspectiveOrigin?: any

  /**
   * The pointer-events property allows you to control whether an element can be the target for the pointing device (e.g, mouse, pen) events.
   * @see https://developer.mozilla.org/en/docs/Web/CSS/pointer-events
   */
  pointerEvents?:
    | cssType.CSSGlobalValues
    | 'auto'
    | 'none'
    | 'visiblePainted'
    | 'visibleFill'
    | 'visibleStroke'
    | 'visible'
    | 'painted'
    | 'fill'
    | 'stroke'
    | 'all'

  /**
   * The position property controls the type of positioning used by an element within its parent elements. The effect of the position property depends on a lot of factors, for example the position property of parent elements.
   * @see https://developer.mozilla.org/en/docs/Web/CSS/position
   */
  position?: cssType.CSSGlobalValues | 'static' | 'relative' | 'absolute' | 'sticky' | '-webkit-sticky' | 'fixed'

  /**
   * Obsolete: unsupported.
   * This property determines whether or not a full-width punctuation mark character should be trimmed if it appears at the beginning of a line, so that its "ink" lines up with the first glyph in the line above and below.
   */
  punctuationTrim?: any

  /**
   * Sets the type of quotation marks for embedded quotations.
   * @see https://developer.mozilla.org/en/docs/Web/CSS/quotes
   */
  quotes?: any

  /**
   * Controls whether the last region in a chain displays additional 'overset' content according its default overflow property, or if it displays a fragment of content as if it were flowing into a subsequent region.
   */
  regionFragment?: any

  /**
   * The resize CSS property lets you control the resizability of an element.
   * @see https://developer.mozilla.org/en/docs/Web/CSS/resize
   */
  resize?: cssType.CSSGlobalValues | 'none' | 'both ' | 'horizontal' | 'vertical'

  /**
   * The rest-after property determines how long a speech media agent should pause after presenting an element's main content, before presenting that element's exit cue sound. It may be replaced by the shorthand property rest, which sets rest time before and after.
   */
  restAfter?: any

  /**
   * The rest-before property determines how long a speech media agent should pause after presenting an intro cue sound for an element, before presenting that element's main content. It may be replaced by the shorthand property rest, which sets rest time before and after.
   */
  restBefore?: any

  /**
   * Specifies the position an element in relation to the right side of the containing element.
   * @see https://developer.mozilla.org/en/docs/Web/CSS/right
   */
  right?: 'auto' | cssType.CSSLength | cssType.CSSPercentage | cssType.CSSGlobalValues

  /**
   * Specifies the distribution of the different ruby elements over the base.
   * @see https://developer.mozilla.org/en/docs/Web/CSS/ruby-align
   */
  rubyAlign?: cssType.CSSGlobalValues | 'start' | 'center' | 'space-between' | 'space-around'

  /**
   * Specifies the position of a ruby element relatives to its base element. It can be position over the element (over), under it (under), or between the characters, on their right side (inter-character).
   * @see https://developer.mozilla.org/en/docs/Web/CSS/ruby-position
   */
  rubyPosition?: cssType.CSSGlobalValues | 'over' | 'under' | 'inter-character'

  /**
   * SVG: For the <ellipse> element, this attribute defines the x-radius of the element. A value of zero disables rendering of the element.
   * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/rx
   */
  rx?: number

  /**
   * SVG: For the <ellipse> element, this attribute defines the y-radius of the element. A value of zero disables rendering of the element.
   * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/ry
   */
  ry?: number

  /**
   * Defines the alpha channel threshold used to extract a shape from an image. Can be thought of as a "minimum opacity" threshold; that is, a value of 0.5 means that the shape will enclose all the pixels that are more than 50% opaque.
   * @see https://developer.mozilla.org/en/docs/Web/CSS/shape-image-threshold
   */
  shapeImageThreshold?: any

  /**
   * A future level of CSS Shapes will define a shape-inside property, which will define a shape to wrap content within the element. See Editor's Draft <http://dev.w3.org/csswg/css-shapes/> and CSSWG wiki page on next-level plans <http://wiki.csswg.org/spec/css-shapes>
   */
  shapeInside?: any

  /**
   * Adds a margin to a shape-outside. In effect, defines a new shape that is the smallest contour around all the points that are the shape-margin distance outward perpendicular to each point on the underlying shape. For points where a perpendicular direction is not defined (e.g., a triangle corner), takes all points on a circle centered at the point and with a radius of the shape-margin distance. This property accepts only non-negative values.
   * @see https://developer.mozilla.org/en/docs/Web/CSS/shape-margin
   */
  shapeMargin?: any

  /**
   * Declares a shape around which text should be wrapped, with possible modifications from the shape-margin property. The shape defined by shape-outside and shape-margin changes the geometry of a float element's float area.
   * @see https://developer.mozilla.org/en/docs/Web/CSS/shape-outside
   */
  shapeOutside?: any

  /**
   * The speak property determines whether or not a speech synthesizer will read aloud the contents of an element.
   */
  speak?: any

  /**
   * The speak-as property determines how the speech synthesizer interprets the content: words as whole words or as a sequence of letters, numbers as a numerical value or a sequence of digits, punctuation as pauses in speech or named punctuation characters.
   */
  speakAs?: any

  /**
   * Location of a font-face.  Used with the @font-face at rule
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/src
   */
  src?: string

  /**
   * SVG: Defines the color of the outline on a given graphical element.
   * @see https://developer.mozilla.org/en/docs/Web/CSS/stroke
   */
  stroke?: string

  /**
   * SVG: Controls the pattern of dashes and gaps used to stroke paths.
   * @see https://developer.mozilla.org/en/docs/Web/CSS/stroke-dasharray
   */
  strokeDasharray?: number[]

  /**
   * SVG: Specifies the distance into the dash pattern to start the dash
   * @see https://developer.mozilla.org/en/docs/Web/SVG/Attribute/stroke-dashoffset
   */
  strokeDashoffset?: cssType.CSSGlobalValues | cssType.CSSLength | cssType.CSSPercentage

  /**
   * SVG: Specifies the shape to be used at the end of open subpaths when they are stroked.
   * @see https://developer.mozilla.org/en/docs/Web/SVG/Attribute/stroke-linecap
   */
  strokeLinecap?: cssType.CSSGlobalValues | 'butt' | 'round' | 'square'

  /**
   * SVG: Specifies the opacity of the outline on the current object.
   * @see https://developer.mozilla.org/en/docs/Web/CSS/stroke-opacity
   */
  strokeOpacity?: number

  /**
   * SVG: Specifies the width of the outline on the current object.
   * @see https://developer.mozilla.org/en/docs/Web/CSS/stroke-width
   */
  strokeWidth?: cssType.CSSLength | cssType.CSSPercentage

  /**
   * The tab-size CSS property is used to customise the width of a tab (U+0009) character.
   * @see https://developer.mozilla.org/en/docs/Web/CSS/tab-size
   */
  tabSize?: any

  /**
   * The 'table-layout' property controls the algorithm used to lay out the table cells, rows, and columns.
   * @see https://developer.mozilla.org/en/docs/Web/CSS/table-layout
   */
  tableLayout?: any

  /**
   * SVG: The text-anchor attribute is used to align (start-, middle- or end-alignment) a string of text relative to a given point.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/text-anchor
   */
  textAnchor?: 'start' | 'middle' | 'end' | 'inherit'

  /**
   * The text-align CSS property describes how inline content like text is aligned in its parent block element. text-align does not control the alignment of block elements itself, only their inline content.
   * @see https://developer.mozilla.org/en/docs/Web/CSS/text-align
   */
  textAlign?:
    | cssType.CSSGlobalValues
    | 'start'
    | 'end'
    | 'left'
    | 'right'
    | 'center'
    | 'justify'
    | 'justify-all'
    | 'match-parent'

  /**
   * The text-align-last CSS property describes how the last line of a block element or a line before line break is aligned in its parent block element.
   * @see https://developer.mozilla.org/en/docs/Web/CSS/text-align-last
   */
  textAlignLast?: cssType.CSSGlobalValues | 'auto' | 'start' | 'end' | 'left' | 'right' | 'center' | 'justify'

  /**
   * The text-decoration CSS property is used to set the text formatting to underline, overline, line-through or blink.
   * underline and overline decorations are positioned under the text, line-through over it.
   * @see https://developer.mozilla.org/en/docs/Web/CSS/text-decoration
   */
  textDecoration?: any

  /**
   * Sets the color of any text decoration, such as underlines, overlines, and strike throughs.
   * @see https://developer.mozilla.org/en/docs/Web/CSS/text-decoration-color
   */
  textDecorationColor?: cssType.CSSColor

  /**
   * Sets what kind of line decorations are added to an element, such as underlines, overlines, etc.
   * @see https://developer.mozilla.org/en/docs/Web/CSS/text-decoration-line
   */
  textDecorationLine?: any

  textDecorationLineThrough?: any

  textDecorationNone?: any

  textDecorationOverline?: any

  /**
   * Specifies what parts of an element’s content are skipped over when applying any text decoration.
   * @see https://developer.mozilla.org/en/docs/Web/CSS/text-decoration-skip
   */
  textDecorationSkip?: any

  /**
   * This property specifies the style of the text decoration line drawn on the specified element. The intended meaning for the values are the same as those of the border-style-properties.
   * @see https://developer.mozilla.org/en/docs/Web/CSS/text-decoration-style
   */
  textDecorationStyle?: cssType.CSSGlobalValues | 'solid' | 'double' | 'dotted' | 'dashed' | 'wavy'

  textDecorationUnderline?: any

  /**
   * The text-emphasis property will apply special emphasis marks to the elements text. Slightly similar to the text-decoration property only that this property can have affect on the line-height. It also is noted that this is shorthand for text-emphasis-style and for text-emphasis-color.
   * @see https://developer.mozilla.org/en/docs/Web/CSS/text-emphasis
   */
  textEmphasis?: any

  /**
   * The text-emphasis-color property specifies the foreground color of the emphasis marks.
   * @see https://developer.mozilla.org/en/docs/Web/CSS/text-emphasis-color
   */
  textEmphasisColor?: cssType.CSSColor

  /**
   * The text-emphasis-style property applies special emphasis marks to an element's text.
   * @see https://developer.mozilla.org/en/docs/Web/CSS/text-emphasis-style
   */
  textEmphasisStyle?: any

  /**
   * This property helps determine an inline box's block-progression dimension, derived from the text-height and font-size properties for non-replaced elements, the height or the width for replaced elements, and the stacked block-progression dimension for inline-block elements. The block-progression dimension determines the position of the padding, border and margin for the element.
   */
  textHeight?: cssType.CSSLength | cssType.CSSPercentage

  /**
   * Specifies the amount of space horizontally that should be left on the first line of the text of an element. This horizontal spacing is at the beginning of the first line and is in respect to the left edge of the containing block box.
   * @see https://developer.mozilla.org/en/docs/Web/CSS/text-indent
   */
  textIndent?: any

  textJustifyTrim?: any

  textKashidaSpace?: any

  /**
   * The text-line-through property is a shorthand property for text-line-through-style, text-line-through-color and text-line-through-mode. (Considered obsolete; use text-decoration instead.)
   */
  textLineThrough?: any

  /**
   * Specifies the line colors for the line-through text decoration.
   * (Considered obsolete; use text-decoration-color instead.)
   */
  textLineThroughColor?: cssType.CSSColor

  /**
   * Sets the mode for the line-through text decoration, determining whether the text decoration affects the space characters or not.
   * (Considered obsolete; use text-decoration-skip instead.)
   */
  textLineThroughMode?: any

  /**
   * Specifies the line style for line-through text decoration.
   * (Considered obsolete; use text-decoration-style instead.)
   */
  textLineThroughStyle?: any

  /**
   * Specifies the line width for the line-through text decoration.
   */
  textLineThroughWidth?: cssType.CSSLength | cssType.CSSPercentage

  /**
   * The text-overflow shorthand CSS property determines how overflowed content that is not displayed is signaled to the users. It can be clipped, display an ellipsis ('…', U+2026 HORIZONTAL ELLIPSIS) or a Web author-defined string. It covers the two long-hand properties text-overflow-mode and text-overflow-ellipsis
   * @see https://developer.mozilla.org/en/docs/Web/CSS/text-overflow
   */
  textOverflow?: cssType.CSSGlobalValues | 'clip' | 'ellipsis' | string

  /**
   * The text-overline property is the shorthand for the text-overline-style, text-overline-width, text-overline-color, and text-overline-mode properties.
   */
  textOverline?: any

  /**
   * Specifies the line color for the overline text decoration.
   */
  textOverlineColor?: cssType.CSSColor

  /**
   * Sets the mode for the overline text decoration, determining whether the text decoration affects the space characters or not.
   */
  textOverlineMode?: any

  /**
   * Specifies the line style for overline text decoration.
   */
  textOverlineStyle?: any

  /**
   * Specifies the line width for the overline text decoration.
   */
  textOverlineWidth?: cssType.CSSLength | cssType.CSSPercentage

  /**
   * The text-rendering CSS property provides information to the browser about how to optimize when rendering text. Options are: legibility, speed or geometric precision.
   * @see https://developer.mozilla.org/en/docs/Web/CSS/text-rendering
   */
  textRendering?: cssType.CSSGlobalValues | 'auto' | 'optimizeSpeed' | 'optimizeLegibility' | 'geometricPrecision'

  /**
   * Obsolete: unsupported.
   */
  textScript?: any

  /**
   * The CSS text-shadow property applies one or more drop shadows to the text and <text-decorations> of an element. Each shadow is specified as an offset from the text, along with optional color and blur radius values.
   * @see https://developer.mozilla.org/en/docs/Web/CSS/text-shadow
   */
  textShadow?: any

  /**
   * This property transforms text for styling purposes. (It has no effect on the underlying content.)
   * @see https://developer.mozilla.org/en/docs/Web/CSS/text-transform
   */
  textTransform?: cssType.CSSGlobalValues | 'none' | 'capitalize' | 'uppercase' | 'lowercase' | 'full-width'

  /**
   * Unsupported.
   * This property will add a underline position value to the element that has an underline defined.
   */
  textUnderlinePosition?: any

  /**
   * After review this should be replaced by text-decoration should it not?
   * This property will set the underline style for text with a line value for underline, overline, and line-through.
   */
  textUnderlineStyle?: any

  /**
   * This property specifies how far an absolutely positioned box's top margin edge is offset below the top edge of the box's containing block. For relatively positioned boxes, the offset is with respect to the top edges of the box itself (i.e., the box is given a position in the normal flow, then offset from that position according to these properties).
   * @see https://developer.mozilla.org/en/docs/Web/CSS/top
   */
  top?: 'auto' | cssType.CSSLength | cssType.CSSPercentage | cssType.CSSGlobalValues

  /**
   * Determines whether touch input may trigger default behavior supplied by the user agent, such as panning or zooming.
   * @see https://developer.mozilla.org/en/docs/Web/CSS/touch-action
   */
  touchAction?:
    | cssType.CSSGlobalValues
    | 'auto'
    | 'none'
    | 'pan-x'
    | 'pan-left'
    | 'pan-right'
    | 'pan-y'
    | 'pan-up'
    | 'pan-down'
    | 'manipulation'

  /**
   * CSS transforms allow elements styled with CSS to be transformed in two-dimensional or three-dimensional space. Using this property, elements can be translated, rotated, scaled, and skewed. The value list may consist of 2D and/or 3D transform values.
   * @see https://developer.mozilla.org/en/docs/Web/CSS/transform
   */
  transform?: cssType.CSSTransformFunction

  /**
   * This property defines the origin of the transformation axes relative to the element to which the transformation is applied.
   * @see https://developer.mozilla.org/en/docs/Web/CSS/transform-origin
   */
  transformOrigin?: any

  /**
   * This property allows you to define the relative position of the origin of the transformation grid along the z-axis.
   */
  transformOriginZ?: any

  /**
   * This property specifies how nested elements are rendered in 3D space relative to their parent.
   * @see https://developer.mozilla.org/en/docs/Web/CSS/transform-style
   */
  transformStyle?: cssType.CSSGlobalValues | 'flat' | 'preserve-3d'

  /**
   * The transition CSS property is a shorthand property for transition-property, transition-duration, transition-timing-function, and transition-delay. It allows to define the transition between two states of an element.
   * @see https://developer.mozilla.org/en/docs/Web/CSS/transition
   */
  transition?: any

  /**
   * Defines when the transition will start. A value of ‘0s’ means the transition will execute as soon as the property is changed. Otherwise, the value specifies an offset from the moment the property is changed, and the transition will delay execution by that offset.
   * @see https://developer.mozilla.org/en/docs/Web/CSS/transition-delay
   */
  transitionDelay?: any

  /**
   * The 'transition-duration' property specifies the length of time a transition animation takes to complete.
   * @see https://developer.mozilla.org/en/docs/Web/CSS/transition-duration
   */
  transitionDuration?: any

  /**
   * The 'transition-property' property specifies the name of the CSS property to which the transition is applied.
   * @see https://developer.mozilla.org/en/docs/Web/CSS/transition-property
   */
  transitionProperty?: string

  /**
   * Sets the pace of action within a transition
   * @see https://developer.mozilla.org/en/docs/Web/CSS/transition-timing-function
   */
  transitionTimingFunction?: cssType.CSSTimingFunction

  /**
   * The unicode-bidi CSS property specifies the level of embedding with respect to the bidirectional algorithm.
   * @see https://developer.mozilla.org/en/docs/Web/CSS/unicode-bidi
   */
  unicodeBidi?: any

  /**
   * unicode-range allows you to set a specific range of characters to be downloaded from a font (embedded using @font-face) and made available for use on the current page.
   * @see https://developer.mozilla.org/en/docs/Web/CSS/unicode-range
   */
  unicodeRange?: any

  /**
   * This is for all the high level UX stuff.
   */
  userFocus?: any

  /**
   * For inputing user content
   */
  userInput?: any

  /**
   * User select
   * @see https://developer.mozilla.org/en/docs/Web/CSS/user-select
   */
  userSelect?: 'auto' | 'text' | 'none' | 'contain' | 'all'
  '-moz-user-select'?: 'auto' | 'text' | 'none' | 'contain' | 'all'
  '-webkit-user-select'?: 'auto' | 'text' | 'none' | 'contain' | 'all'
  '-ms-user-select'?: 'auto' | 'text' | 'none' | 'contain' | 'all'

  /**
   * The vertical-align property controls how inline elements or text are vertically aligned compared to the baseline. If this property is used on table-cells it controls the vertical alignment of content of the table cell.
   * @see https://developer.mozilla.org/en/docs/Web/CSS/vertical-align
   */
  verticalAlign?:
    | cssType.CSSGlobalValues
    | 'baseline'
    | 'sub'
    | 'super'
    | 'text-top'
    | 'text-bottom'
    | 'middle'
    | 'top'
    | 'bottom'
    | cssType.CSSLength
    | cssType.CSSPercentage

  /**
   * The visibility property specifies whether the boxes generated by an element are rendered.
   * @see https://developer.mozilla.org/en/docs/Web/CSS/visibility
   */
  visibility?: cssType.CSSGlobalValues | 'visible' | 'hidden' | 'collapse'

  /**
   * The voice-balance property sets the apparent position (in stereo sound) of the synthesized voice for spoken media.
   */
  voiceBalance?: any

  /**
   * The voice-duration property allows the author to explicitly set the amount of time it should take a speech synthesizer to read an element's content, for example to allow the speech to be synchronized with other media. With a value of auto (the default) the length of time it takes to read the content is determined by the content itself and the voice-rate property.
   */
  voiceDuration?: any

  /**
   * The voice-family property sets the speaker's voice used by a speech media agent to read an element. The speaker may be specified as a named character (to match a voice option in the speech reading software) or as a generic description of the age and gender of the voice. Similar to the font-family property for visual media, a comma-separated list of fallback options may be given in case the speech reader does not recognize the character name or cannot synthesize the requested combination of generic properties.
   */
  voiceFamily?: any

  /**
   * The voice-pitch property sets pitch or tone (high or low) for the synthesized speech when reading an element; the pitch may be specified absolutely or relative to the normal pitch for the voice-family used to read the text.
   */
  voicePitch?: any

  /**
   * The voice-range property determines how much variation in pitch or tone will be created by the speech synthesize when reading an element. Emphasized text, grammatical structures and punctuation may all be rendered as changes in pitch, this property determines how strong or obvious those changes are; large ranges are associated with enthusiastic or emotional speech, while small ranges are associated with flat or mechanical speech.
   */
  voiceRange?: any

  /**
   * The voice-rate property sets the speed at which the voice synthesized by a speech media agent will read content.
   */
  voiceRate?: any

  /**
   * The voice-stress property sets the level of vocal emphasis to be used for synthesized speech reading the element.
   */
  voiceStress?: any

  /**
   * The voice-volume property sets the volume for spoken content in speech media. It replaces the deprecated volume property.
   */
  voiceVolume?: any

  /**
   * The white-space property controls whether and how white space inside the element is collapsed, and whether lines may wrap at unforced "soft wrap" opportunities.
   * @see https://developer.mozilla.org/en/docs/Web/CSS/white-space
   */
  whiteSpace?: cssType.CSSGlobalValues | 'normal' | 'nowrap' | 'pre' | 'pre-line' | 'pre-wrap'

  /**
   * Obsolete: unsupported.
   */
  whiteSpaceTreatment?: any

  /**
   * In paged media, this property defines the mimimum number of lines
   * that must be left at the top of the second page.
   * @see https://developer.mozilla.org/en/docs/Web/CSS/widows
   */
  widows?: number

  /**
   * Specifies the width of the content area of an element. The content area of the element width does not include the padding, border, and margin of the element.
   * @see https://developer.mozilla.org/en/docs/Web/CSS/width
   */
  width?: 'auto' | cssType.CSSLength | cssType.CSSPercentage | cssType.CSSGlobalValues

  /**
   * The ‘will-change’ CSS property provides a way for authors to hint browsers about the kind of changes to be expected on an element, so that the browser can set up appropriate optimizations ahead of time before the element is actually changed. These kind of optimizations can increase the responsiveness of a page by doing potentially expensive work ahead of time before they are actually required.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/will-change
   */
  willChange?: 'auto' | 'scroll-position' | 'contents' | string

  /**
   * The word-break property is often used when there is long generated content that is strung together without and spaces or hyphens to beak apart. A common case of this is when there is a long URL that does not have any hyphens. This case could potentially cause the breaking of the layout as it could extend past the parent element.
   * @see https://developer.mozilla.org/en/docs/Web/CSS/word-break
   */
  wordBreak?: cssType.CSSGlobalValues | 'normal' | 'break-all' | 'keep-all'

  /**
   * The word-spacing CSS property specifies the spacing behavior between "words".
   * @see https://developer.mozilla.org/en/docs/Web/CSS/word-spacing
   */
  wordSpacing?: cssType.CSSGlobalValues | 'normal' | cssType.CSSLength | cssType.CSSPercentage

  /**
   * An alias of css/properties/overflow-wrap, word-wrap defines whether to break words when the content exceeds the boundaries of its container.
   * @see https://developer.mozilla.org/en/docs/Web/CSS/word-wrap
   */
  wordWrap?: cssType.CSSGlobalValues | 'normal' | 'break-word'

  /**
   * Specifies how exclusions affect inline content within block-level elements. Elements lay out their inline content in their content area but wrap around exclusion areas.
   */
  wrapFlow?: any

  /**
   * Set the value that is used to offset the inner wrap shape from other shapes. Inline content that intersects a shape with this property will be pushed by this shape's margin.
   */
  wrapMargin?: any

  /**
   * Obsolete and unsupported. Do not use.
   * This CSS property controls the text when it reaches the end of the block in which it is enclosed.
   */
  wrapOption?: any

  /**
   * writing-mode specifies if lines of text are laid out horizontally or vertically, and the direction which lines of text and blocks progress.
   * @see https://developer.mozilla.org/en/docs/Web/CSS/writing-mode
   */
  writingMode?:
    | cssType.CSSGlobalValues
    | 'horizontal-tb'
    | 'vertical-rl'
    | 'vertical-lr'
    | 'sideways-rl'
    | 'sideways-lr'

  /**
   * The z-index property specifies the z-order of an element and its descendants.
   * When elements overlap, z-order determines which one covers the other.
   * @see https://developer.mozilla.org/en/docs/Web/CSS/z-index
   */
  zIndex?: cssType.CSSGlobalValues | 'auto' | number

  /**
   * Sets the initial zoom factor of a document defined by @viewport.
   * @see https://developer.mozilla.org/en/docs/Web/CSS/zoom
   */
  zoom?: 'auto' | number

  // VENDOR prefixes
  // non-authoritative source: http://peter.sh/experiments/vendor-prefixed-css-property-overview/
  '-apple-trailing-word'?: number | string
  '-epub-caption-side'?: number | string
  '-epub-hyphens'?: number | string
  '-epub-text-combine'?: number | string
  '-epub-text-emphasis'?: number | string
  '-epub-text-emphasis-color'?: number | string
  '-epub-text-emphasis-style'?: number | string
  '-epub-text-orientation'?: number | string
  '-epub-text-transform'?: number | string
  '-epub-word-break'?: number | string
  '-epub-writing-mode'?: number | string
  '-internal-marquee-direction'?: number | string
  '-internal-marquee-increment'?: number | string
  '-internal-marquee-repetition'?: number | string
  '-internal-marquee-speed'?: number | string
  '-internal-marquee-style'?: number | string
  '-moz-appearance'?: number | string
  '-moz-binding'?: number | string
  '-moz-border-bottom-colors'?: number | string
  '-moz-border-end'?: number | string
  '-moz-border-end-color'?: number | string
  '-moz-border-end-style'?: number | string
  '-moz-border-end-width'?: number | string
  '-moz-border-left-colors'?: number | string
  '-moz-border-right-colors'?: number | string
  '-moz-border-start'?: number | string
  '-moz-border-start-color'?: number | string
  '-moz-border-start-style'?: number | string
  '-moz-border-start-width'?: number | string
  '-moz-border-top-colors'?: number | string
  '-moz-box-align'?: number | string
  '-moz-box-direction'?: number | string
  '-moz-box-flex'?: number | string
  '-moz-box-ordinal-group'?: number | string
  '-moz-box-orient'?: number | string
  '-moz-box-pack'?: number | string
  '-moz-column-count'?: number | string
  '-moz-column-fill'?: number | string
  '-moz-column-gap'?: number | string
  '-moz-column-rule'?: number | string
  '-moz-column-rule-color'?: number | string
  '-moz-column-rule-style'?: number | string
  '-moz-column-rule-width'?: number | string
  '-moz-column-width'?: number | string
  '-moz-columns'?: number | string
  '-moz-control-character-visibility'?: number | string
  '-moz-float-edge'?: number | string
  '-moz-force-broken-image-icon'?: number | string
  '-moz-hyphens'?: number | string
  '-moz-image-region'?: number | string
  '-moz-margin-end'?: number | string
  '-moz-margin-start'?: number | string
  '-moz-math-display'?: number | string
  '-moz-math-variant'?: number | string
  '-moz-min-font-size-ratio'?: number | string
  '-moz-orient'?: number | string
  '-moz-osx-font-smoothing'?: number | string
  '-moz-outline-radius'?: number | string
  '-moz-outline-radius-bottomleft'?: number | string
  '-moz-outline-radius-bottomright'?: number | string
  '-moz-outline-radius-topleft'?: number | string
  '-moz-outline-radius-topright'?: number | string
  '-moz-padding-end'?: number | string
  '-moz-padding-start'?: number | string
  '-moz-script-level'?: number | string
  '-moz-script-min-size'?: number | string
  '-moz-script-size-multiplier'?: number | string
  '-moz-stack-sizing'?: number | string
  '-moz-tab-size'?: number | string
  '-moz-text-align-last'?: number | string
  '-moz-text-decoration-color'?: number | string
  '-moz-text-decoration-line'?: number | string
  '-moz-text-decoration-style'?: number | string
  '-moz-text-size-adjust'?: number | string
  '-moz-top-layer'?: number | string
  '-moz-transform'?: number | string
  '-moz-user-focus'?: number | string
  '-moz-user-input'?: number | string
  '-moz-user-modify'?: number | string
  '-moz-window-dragging'?: number | string
  '-moz-window-shadow'?: number | string
  '-ms-accelerator'?: number | string
  '-ms-animation'?: number | string
  '-ms-animation-delay'?: number | string
  '-ms-animation-direction'?: number | string
  '-ms-animation-duration'?: number | string
  '-ms-animation-fill-mode'?: number | string
  '-ms-animation-iteration-count'?: number | string
  '-ms-animation-name'?: number | string
  '-ms-animation-play-state'?: number | string
  '-ms-animation-timing-function'?: number | string
  '-ms-backface-visibility'?: number | string
  '-ms-background-position-x'?: number | string
  '-ms-background-position-y'?: number | string
  '-ms-behavior'?: number | string
  '-ms-block-progression'?: number | string
  '-ms-content-zoom-chaining'?: number | string
  '-ms-content-zoom-limit'?: number | string
  '-ms-content-zoom-limit-max'?: number | string
  '-ms-content-zoom-limit-min'?: number | string
  '-ms-content-zoom-snap'?: number | string
  '-ms-content-zoom-snap-points'?: number | string
  '-ms-content-zoom-snap-type'?: number | string
  '-ms-content-zooming'?: number | string
  '-ms-filter'?: number | string
  '-ms-flex-flow'?: number | string
  '-ms-flex-line-pack'?: number | string
  '-ms-flex-order'?: number | string
  '-ms-flex-preferred-size'?: number | string
  '-ms-flow-from'?: number | string
  '-ms-flow-into'?: number | string
  '-ms-font-feature-settings'?: number | string
  '-ms-grid-column'?: number | string
  '-ms-grid-column-align'?: number | string
  '-ms-grid-column-span'?: number | string
  '-ms-grid-columns'?: number | string
  '-ms-grid-row'?: number | string
  '-ms-grid-row-align'?: number | string
  '-ms-grid-row-span'?: number | string
  '-ms-grid-rows'?: number | string
  '-ms-high-contrast-adjust'?: number | string
  '-ms-hyphenate-limit-chars'?: number | string
  '-ms-hyphenate-limit-lines'?: number | string
  '-ms-hyphenate-limit-zone'?: number | string
  '-ms-hyphens'?: number | string
  '-ms-ime-align'?: number | string
  '-ms-ime-mode'?: number | string
  '-ms-interpolation-mode'?: number | string
  '-ms-layout-flow'?: number | string
  '-ms-layout-grid'?: number | string
  '-ms-layout-grid-char'?: number | string
  '-ms-layout-grid-line'?: number | string
  '-ms-layout-grid-mode'?: number | string
  '-ms-layout-grid-type'?: number | string
  '-ms-line-break'?: number | string
  '-ms-overflow-style'?: number | string
  '-ms-overflow-x'?: number | string
  '-ms-overflow-y'?: number | string
  '-ms-perspective'?: number | string
  '-ms-perspective-origin'?: number | string
  '-ms-perspective-origin-x'?: number | string
  '-ms-perspective-origin-y'?: number | string
  '-ms-scroll-chaining'?: number | string
  '-ms-scroll-limit'?: number | string
  '-ms-scroll-limit-x-max'?: number | string
  '-ms-scroll-limit-x-min'?: number | string
  '-ms-scroll-limit-y-max'?: number | string
  '-ms-scroll-limit-y-min'?: number | string
  '-ms-scroll-rails'?: number | string
  '-ms-scroll-snap-points-x'?: number | string
  '-ms-scroll-snap-points-y'?: number | string
  '-ms-scroll-snap-type'?: number | string
  '-ms-scroll-snap-x'?: number | string
  '-ms-scroll-snap-y'?: number | string
  '-ms-scroll-translation'?: number | string
  '-ms-scrollbar-3dlight-color'?: number | string
  '-ms-scrollbar-arrow-color'?: number | string
  '-ms-scrollbar-base-color'?: number | string
  '-ms-scrollbar-darkshadow-color'?: number | string
  '-ms-scrollbar-face-color'?: number | string
  '-ms-scrollbar-highlight-color'?: number | string
  '-ms-scrollbar-shadow-color'?: number | string
  '-ms-scrollbar-track-color'?: number | string
  '-ms-text-align-last'?: number | string
  '-ms-text-autospace'?: number | string
  '-ms-text-combine-horizontal'?: number | string
  '-ms-text-justify'?: number | string
  '-ms-text-kashida-space'?: number | string
  '-ms-text-overflow'?: number | string
  '-ms-text-size-adjust'?: number | string
  '-ms-text-underline-position'?: number | string
  '-ms-touch-action'?: number | string
  '-ms-touch-select'?: number | string
  '-ms-transform'?: number | string
  '-ms-transform-origin'?: number | string
  '-ms-transform-origin-x'?: number | string
  '-ms-transform-origin-y'?: number | string
  '-ms-transform-origin-z'?: number | string
  '-ms-transform-style'?: number | string
  '-ms-transition'?: number | string
  '-ms-transition-delay'?: number | string
  '-ms-transition-duration'?: number | string
  '-ms-transition-property'?: number | string
  '-ms-transition-timing-function'?: number | string
  '-ms-word-break'?: number | string
  '-ms-word-wrap'?: number | string
  '-ms-wrap-flow'?: number | string
  '-ms-wrap-margin'?: number | string
  '-ms-wrap-through'?: number | string
  '-ms-writing-mode'?: number | string
  '-ms-zoom'?: number | string
  '-webkit-align-content'?: number | string
  '-webkit-alt'?: number | string
  '-webkit-animation'?: number | string
  '-webkit-animation-delay'?: number | string
  '-webkit-animation-direction'?: number | string
  '-webkit-animation-duration'?: number | string
  '-webkit-animation-fill-mode'?: number | string
  '-webkit-animation-iteration-count'?: number | string
  '-webkit-animation-name'?: number | string
  '-webkit-animation-play-state'?: number | string
  '-webkit-animation-timing-function'?: number | string
  '-webkit-animation-trigger'?: number | string
  '-webkit-app-region'?: number | string
  '-webkit-appearance'?: number | string
  '-webkit-aspect-ratio'?: number | string
  '-webkit-backdrop-filter'?: number | string
  '-webkit-backface-visibility'?: number | string
  '-webkit-background-clip'?: number | string
  '-webkit-background-composite'?: number | string
  '-webkit-background-origin'?: number | string
  '-webkit-background-size'?: number | string
  '-webkit-border-after'?: number | string
  '-webkit-border-after-color'?: number | string
  '-webkit-border-after-style'?: number | string
  '-webkit-border-after-width'?: number | string
  '-webkit-border-before'?: number | string
  '-webkit-border-before-color'?: number | string
  '-webkit-border-before-style'?: number | string
  '-webkit-border-before-width'?: number | string
  '-webkit-border-bottom-left-radius'?: number | string
  '-webkit-border-bottom-right-radius'?: number | string
  '-webkit-border-end'?: number | string
  '-webkit-border-end-color'?: number | string
  '-webkit-border-end-style'?: number | string
  '-webkit-border-end-width'?: number | string
  '-webkit-border-fit'?: number | string
  '-webkit-border-horizontal-spacing'?: number | string
  '-webkit-border-image'?: number | string
  '-webkit-border-radius'?: number | string
  '-webkit-border-start'?: number | string
  '-webkit-border-start-color'?: number | string
  '-webkit-border-start-style'?: number | string
  '-webkit-border-start-width'?: number | string
  '-webkit-border-top-left-radius'?: number | string
  '-webkit-border-top-right-radius'?: number | string
  '-webkit-border-vertical-spacing'?: number | string
  '-webkit-box-align'?: number | string
  '-webkit-box-decoration-break'?: number | string
  '-webkit-box-direction'?: number | string
  '-webkit-box-flex'?: number | string
  '-webkit-box-flex-group'?: number | string
  '-webkit-box-lines'?: number | string
  '-webkit-box-ordinal-group'?: number | string
  '-webkit-box-orient'?: number | string
  '-webkit-box-pack'?: number | string
  '-webkit-box-reflect'?: number | string
  '-webkit-box-shadow'?: number | string
  '-webkit-clip-path'?: number | string
  '-webkit-color-correction'?: number | string
  '-webkit-column-axis'?: number | string
  '-webkit-column-break-after'?: number | string
  '-webkit-column-break-before'?: number | string
  '-webkit-column-break-inside'?: number | string
  '-webkit-column-count'?: number | string
  '-webkit-column-fill'?: number | string
  '-webkit-column-gap'?: number | string
  '-webkit-column-progression'?: number | string
  '-webkit-column-rule'?: number | string
  '-webkit-column-rule-color'?: number | string
  '-webkit-column-rule-style'?: number | string
  '-webkit-column-rule-width'?: number | string
  '-webkit-column-span'?: number | string
  '-webkit-column-width'?: number | string
  '-webkit-columns'?: number | string
  '-webkit-cursor-visibility'?: number | string
  '-webkit-dashboard-region'?: number | string
  '-webkit-filter'?: number | string
  '-webkit-flex-basis'?: number | string
  '-webkit-flex-flow'?: number | string
  '-webkit-flow-from'?: number | string
  '-webkit-flow-into'?: number | string
  '-webkit-font-feature-settings'?: number | string
  '-webkit-font-kerning'?: number | string
  '-webkit-font-size-delta'?: number | string
  '-webkit-font-smoothing'?: number | string
  '-webkit-font-variant-ligatures'?: number | string
  '-webkit-grid'?: number | string
  '-webkit-grid-area'?: number | string
  '-webkit-grid-auto-columns'?: number | string
  '-webkit-grid-auto-flow'?: number | string
  '-webkit-grid-auto-rows'?: number | string
  '-webkit-grid-column'?: number | string
  '-webkit-grid-column-end'?: number | string
  '-webkit-grid-column-gap'?: number | string
  '-webkit-grid-column-start'?: number | string
  '-webkit-grid-gap'?: number | string
  '-webkit-grid-row'?: number | string
  '-webkit-grid-row-end'?: number | string
  '-webkit-grid-row-gap'?: number | string
  '-webkit-grid-row-start'?: number | string
  '-webkit-grid-template'?: number | string
  '-webkit-grid-template-areas'?: number | string
  '-webkit-grid-template-columns'?: number | string
  '-webkit-grid-template-rows'?: number | string
  '-webkit-highlight'?: number | string
  '-webkit-hyphenate-character'?: number | string
  '-webkit-hyphenate-limit-after'?: number | string
  '-webkit-hyphenate-limit-before'?: number | string
  '-webkit-hyphenate-limit-lines'?: number | string
  '-webkit-hyphens'?: number | string
  '-webkit-initial-letter'?: number | string
  '-webkit-justify-items'?: number | string
  '-webkit-justify-self'?: number | string
  '-webkit-line-align'?: number | string
  '-webkit-line-box-contain'?: number | string
  '-webkit-line-break'?: number | string
  '-webkit-line-clamp'?: number | string
  '-webkit-line-grid'?: number | string
  '-webkit-line-snap'?: number | string
  '-webkit-locale'?: number | string
  '-webkit-logical-height'?: number | string
  '-webkit-logical-width'?: number | string
  '-webkit-margin-after'?: number | string
  '-webkit-margin-after-collapse'?: number | string
  '-webkit-margin-before'?: number | string
  '-webkit-margin-before-collapse'?: number | string
  '-webkit-margin-bottom-collapse'?: number | string
  '-webkit-margin-collapse'?: number | string
  '-webkit-margin-end'?: number | string
  '-webkit-margin-start'?: number | string
  '-webkit-margin-top-collapse'?: number | string
  '-webkit-marquee'?: number | string
  '-webkit-marquee-direction'?: number | string
  '-webkit-marquee-increment'?: number | string
  '-webkit-marquee-repetition'?: number | string
  '-webkit-marquee-speed'?: number | string
  '-webkit-marquee-style'?: number | string
  '-webkit-mask'?: number | string
  '-webkit-mask-box-image'?: number | string
  '-webkit-mask-box-image-outset'?: number | string
  '-webkit-mask-box-image-repeat'?: number | string
  '-webkit-mask-box-image-slice'?: number | string
  '-webkit-mask-box-image-source'?: number | string
  '-webkit-mask-box-image-width'?: number | string
  '-webkit-mask-clip'?: number | string
  '-webkit-mask-composite'?: number | string
  '-webkit-mask-image'?: number | string
  '-webkit-mask-origin'?: number | string
  '-webkit-mask-position'?: number | string
  '-webkit-mask-position-x'?: number | string
  '-webkit-mask-position-y'?: number | string
  '-webkit-mask-repeat'?: number | string
  '-webkit-mask-repeat-x'?: number | string
  '-webkit-mask-repeat-y'?: number | string
  '-webkit-mask-size'?: number | string
  '-webkit-mask-source-type'?: number | string
  '-webkit-max-logical-height'?: number | string
  '-webkit-max-logical-width'?: number | string
  '-webkit-min-logical-height'?: number | string
  '-webkit-min-logical-width'?: number | string
  '-webkit-nbsp-mode'?: number | string
  '-webkit-opacity'?: number | string
  '-webkit-order'?: number | string
  '-webkit-padding-after'?: number | string
  '-webkit-padding-before'?: number | string
  '-webkit-padding-end'?: number | string
  '-webkit-padding-start'?: number | string
  '-webkit-perspective'?: number | string
  '-webkit-perspective-origin'?: number | string
  '-webkit-perspective-origin-x'?: number | string
  '-webkit-perspective-origin-y'?: number | string
  '-webkit-print-color-adjust'?: number | string
  '-webkit-region-break-after'?: number | string
  '-webkit-region-break-before'?: number | string
  '-webkit-region-break-inside'?: number | string
  '-webkit-region-fragment'?: number | string
  '-webkit-rtl-ordering'?: number | string
  '-webkit-ruby-position'?: number | string
  '-webkit-scroll-snap-coordinate'?: number | string
  '-webkit-scroll-snap-destination'?: number | string
  '-webkit-scroll-snap-points-x'?: number | string
  '-webkit-scroll-snap-points-y'?: number | string
  '-webkit-scroll-snap-type'?: number | string
  '-webkit-shape-image-threshold'?: number | string
  '-webkit-shape-margin'?: number | string
  '-webkit-shape-outside'?: number | string
  '-webkit-svg-shadow'?: number | string
  '-webkit-tap-highlight-color'?: number | string
  '-webkit-text-align-last'?: number | string
  '-webkit-text-combine'?: number | string
  '-webkit-text-decoration'?: number | string
  '-webkit-text-decoration-color'?: number | string
  '-webkit-text-decoration-line'?: number | string
  '-webkit-text-decoration-skip'?: number | string
  '-webkit-text-decoration-style'?: number | string
  '-webkit-text-decorations-in-effect'?: number | string
  '-webkit-text-emphasis'?: number | string
  '-webkit-text-emphasis-color'?: number | string
  '-webkit-text-emphasis-position'?: number | string
  '-webkit-text-emphasis-style'?: number | string
  '-webkit-text-fill-color'?: number | string
  '-webkit-text-justify'?: number | string
  '-webkit-text-orientation'?: number | string
  '-webkit-text-security'?: number | string
  '-webkit-text-size-adjust'?: number | string
  '-webkit-text-stroke'?: number | string
  '-webkit-text-stroke-color'?: number | string
  '-webkit-text-stroke-width'?: number | string
  '-webkit-text-underline-position'?: number | string
  '-webkit-text-zoom'?: number | string
  '-webkit-touch-callout'?: number | string
  '-webkit-transform'?: number | string
  '-webkit-transform-origin'?: number | string
  '-webkit-transform-origin-x'?: number | string
  '-webkit-transform-origin-y'?: number | string
  '-webkit-transform-origin-z'?: number | string
  '-webkit-transform-style'?: number | string
  '-webkit-transition'?: number | string
  '-webkit-transition-delay'?: number | string
  '-webkit-transition-duration'?: number | string
  '-webkit-transition-property'?: number | string
  '-webkit-transition-timing-function'?: number | string
  '-webkit-user-drag'?: number | string
  '-webkit-user-modify'?: number | string
  '-webkit-writing-mode'?: number | string
}
