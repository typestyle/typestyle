/**
 * Absolute size keywords
 * @see https://drafts.csswg.org/css-fonts-3/#absolute-size-value
 */
export type CSSAbsoluteSize = 'xx-small' | 'x-small' | 'small' | 'medium' | 'large' | 'x-large' | 'xx-large'

/**
 * Type for align-content in flex or grid
 * @see https://www.w3.org/TR/css-align-3/#propdef-align-content
 */
export type AlignContent =
  | 'normal'
  | CSSBoxAlignmentBaselinePosition
  | CSSBoxAlignmentContentDistribution
  | CSSBoxAlignmentContentPositionWithOverflow

/**
 * Type for align-items in flex or grid
 * @see https://www.w3.org/TR/css-align-3/#propdef-align-items
 */
export type AlignItems =
  | 'normal'
  | 'stretch'
  | CSSBoxAlignmentBaselinePosition
  | CSSBoxAlignmentSelfPositionWithOverflow

/**
 * Type for align-self in flex or grid
 * @see https://www.w3.org/TR/css-align-3/#propdef-align-self
 */
export type AlignSelf =
  | 'auto'
  | 'normal'
  | 'stretch'
  | CSSBoxAlignmentBaselinePosition
  | CSSBoxAlignmentSelfPositionWithOverflow

/**
 * an angle; 0' | '0deg' | '0grad' | '0rad' | '0turn' | 'etc.
 * @see https://drafts.csswg.org/css-values-3/#angles
 */
export type CSSAngle = CSSGlobalValues | string | 0

/**
 * initial state of an animation.
 * @see https://drafts.csswg.org/css-animations/#animation-play-state
 */
export type CSSAnimationPlayState = CSSGlobalValues | string | 'paused' | 'running'

/**
 * blend mode
 * @see https://drafts.fxtf.org/compositing-1/#ltblendmodegt
 */
export type CSSBlendMode =
  | 'normal'
  | 'multiply'
  | 'screen'
  | 'overlay'
  | 'darken'
  | 'lighten'
  | 'color-dodge'
  | 'color-burn'
  | 'hard-light'
  | 'soft-light'
  | 'difference'
  | 'exclusion'
  | 'hue'
  | 'saturation'
  | 'color'
  | 'luminosity'

/**
 * border shorthand for style color and width
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-left
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-right
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-top
 */
export type CSSBorderShorthand = CSSGlobalValues | CSSColor | CSSLength | CSSLineStyleSet | string

/**
 * Determines the area within which the background is painted.
 * @see https://drafts.csswg.org/css-backgrounds/#box
 */
export type CSSBox = CSSGlobalValues | string | 'border-box' | 'padding-box' | 'content-box'

/**
 * CSS Type <baseline-position> of Box Alignment
 * @see https://www.w3.org/TR/css-align-3/#typedef-baseline-position
 */
export type CSSBoxAlignmentBaselinePosition = 'baseline' | 'first baseline' | 'last baseline'

/**
 * CSS Type <content-distribution> of Box Alignment
 * @see https://www.w3.org/TR/css-align-3/#typedef-content-distribution
 */
export type CSSBoxAlignmentContentDistribution = 'space-between' | 'space-around' | 'space-evenly' | 'stretch'



export type CSSBoxAlignmentContentPositionWithOverflow =
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'unsafe center'
  | 'unsafe start'
  | 'unsafe end'
  | 'unsafe flex-start'
  | 'unsafe flex-end'
  | 'safe center'
  | 'safe start'
  | 'safe end'
  | 'safe flex-start'
  | 'safe flex-end'

export type CSSBoxAlignmentLeftRightWithOverflow =
  | 'left'
  | 'right'
  | 'unsafe left'
  | 'unsafe right'
  | 'safe left'
  | 'safe right'

export type CSSBoxAlignmentSelfPositionWithOverflow =
  | 'center'
  | 'start'
  | 'end'
  | 'self-start'
  | 'self-end'
  | 'flex-start'
  | 'flex-end'
  | 'unsafe center'
  | 'unsafe start'
  | 'unsafe end'
  | 'unsafe self-start'
  | 'unsafe self-end'
  | 'unsafe flex-start'
  | 'unsafe flex-end'
  | 'safe center'
  | 'safe start'
  | 'safe end'
  | 'safe self-start'
  | 'safe self-end'
  | 'safe flex-start'
  | 'safe flex-end'

/**
 * Color can be a named color, transparent, or a color function
 * @see https://drafts.csswg.org/css-color-3/#valuea-def-color
 */
export type CSSColor = CSSNamedColor | CSSGlobalValues | 'currentColor' | string

/**
 * Special type for border-color which can use 1 or 4 colors
 * @see https://drafts.csswg.org/css-backgrounds-3/#border-color
 */
export type CSSColorSet = string | CSSColor

/**
 * This property specifies the type of rendering box used for an element. It is a shorthand property for many other display properties.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/display
 */
export type CSSDisplay =
  /* <display-outside> values */
  | 'block'
  | 'inline'
  | 'run-in'
  /* <display-inside> values */
  | 'flow'
  | 'flow-root'
  | 'table'
  | 'flex'
  | 'grid'
  | 'ruby'
  | 'subgrid'
  /* <display-outside> plus <display-inside> values */
  | 'block flow'
  | 'inline table'
  | 'flex run-in'
  /* <display-listitem> values */
  | 'list-item'
  | 'list-item block'
  | 'list-item inline'
  | 'list-item flow'
  | 'list-item flow-root'
  | 'list-item block flow'
  | 'list-item block flow-root'
  | 'flow list-item block'
  /* <display-internal> values */
  | 'table-row-group'
  | 'table-header-group'
  | 'table-footer-group'
  | 'table-row'
  | 'table-cell'
  | 'table-column-group'
  | 'table-column'
  | 'table-caption'
  | 'ruby-base'
  | 'ruby-text'
  | 'ruby-base-container'
  | 'ruby-text-container'
  /* <display-box> values */
  | 'contents'
  | 'none'
  /* <display-legacy> values */
  | 'inline-block'
  | 'inline-list-item'
  | 'inline-table'
  | 'inline-flex'
  | 'inline-grid'

/**
 * complex type that describes the size of fonts
 * @see https://drafts.csswg.org/css-fonts-3/#propdef-font-size
 */
export type CSSFontSize = CSSGlobalValues | CSSLength | CSSPercentage | CSSAbsoluteSize | CSSRelativeSize

/**
 * Font weights
 */
export type CSSFontWeight =
  | 'normal'
  | 'bold'
  | 'bolder'
  | 'lighter'
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | number
  | CSSGlobalValues

/**
 * a gradient function like linear-gradient
 * @see https://drafts.csswg.org/css-images-3/#gradients
 */
export type CSSGradient = CSSGlobalValues | string

/**
 * a value that serves as an image
 * @see https://drafts.csswg.org/css-images-3/#typedef-image
 */
export type CSSImage = CSSGlobalValues | string | CSSGradient | CSSUrl

/**
 * Type for justify-content in flex or grid
 * @see https://www.w3.org/TR/css-align-3/#propdef-justify-content
 */
export type JustifyContent =
  | 'normal'
  | CSSBoxAlignmentContentDistribution
  | CSSBoxAlignmentContentPositionWithOverflow
  | 'left'
  | 'right'

/**
 * Type for justify-items in flex or grid
 * @see https://www.w3.org/TR/css-align-3/#propdef-justify-items
 */
export type JustifyItems =
  | 'normal'
  | 'stretch'
  | CSSBoxAlignmentBaselinePosition
  | CSSBoxAlignmentSelfPositionWithOverflow
  | 'left'
  | 'right'
  | 'center'
  | 'legacy left'
  | 'legacy right'
  | 'legacy center'

/**
 * Type for justify-self in flex or grid
 * @see https://www.w3.org/TR/css-align-3/#propdef-justify-self
 */
export type JustifySelf =
  | 'auto'
  | 'normal'
  | 'stretch'
  | CSSBoxAlignmentBaselinePosition
  | CSSBoxAlignmentSelfPositionWithOverflow
  | CSSBoxAlignmentLeftRightWithOverflow

/**
 * CSS properties that cascade also support these
 * @see https://drafts.csswg.org/css-cascade/#defaulting-keywords
 */
export type CSSGlobalValues = 'initial' | 'inherit' | /** combination of `initial` and `inherit` */ 'unset' | 'revert'

/**
 * an length; 0 | '0px' | '0em' etc.
 * @see https://drafts.csswg.org/css-values-3/#lengths
 */
export type CSSLength = CSSGlobalValues | string | number

/**
 * Style of a line (e.g. border-style)
 * @see https://drafts.csswg.org/css-backgrounds-3/#line-style
 */
export type CSSLineStyle =
  | string
  | 'none'
  | 'hidden'
  | 'dotted'
  | 'dashed'
  | 'solid'
  | 'double'
  | 'groove'
  | 'ridge'
  | 'inset'
  | 'outset'

/**
 * Special type for border-style which can use 1 or 4 line-style
 * @see https://drafts.csswg.org/css-backgrounds-3/#border-style
 */
export type CSSLineStyleSet = string | CSSLineStyle

export type CSSNamedColor =
  | 'aliceblue'
  | 'antiquewhite'
  | 'aqua'
  | 'aquamarine'
  | 'azure'
  | 'beige'
  | 'bisque'
  | 'black'
  | 'blanchedalmond'
  | 'blue'
  | 'blueviolet'
  | 'brown'
  | 'burlywood'
  | 'cadetblue'
  | 'chartreuse'
  | 'chocolate'
  | 'coral'
  | 'cornflowerblue'
  | 'cornsilk'
  | 'crimson'
  | 'cyan'
  | 'darkblue'
  | 'darkcyan'
  | 'darkgoldenrod'
  | 'darkgray'
  | 'darkgreen'
  | 'darkgrey'
  | 'darkkhaki'
  | 'darkmagenta'
  | 'darkolivegreen'
  | 'darkorange'
  | 'darkorchid'
  | 'darkred'
  | 'darksalmon'
  | 'darkseagreen'
  | 'darkslateblue'
  | 'darkslategray'
  | 'darkslategrey'
  | 'darkturquoise'
  | 'darkviolet'
  | 'deeppink'
  | 'deepskyblue'
  | 'dimgray'
  | 'dimgrey'
  | 'dodgerblue'
  | 'firebrick'
  | 'floralwhite'
  | 'forestgreen'
  | 'fuchsia'
  | 'gainsboro'
  | 'ghostwhite'
  | 'gold'
  | 'goldenrod'
  | 'gray'
  | 'green'
  | 'greenyellow'
  | 'grey'
  | 'honeydew'
  | 'hotpink'
  | 'indianred'
  | 'indigo'
  | 'ivory'
  | 'khaki'
  | 'lavender'
  | 'lavenderblush'
  | 'lawngreen'
  | 'lemonchiffon'
  | 'lightblue'
  | 'lightcoral'
  | 'lightcyan'
  | 'lightgoldenrodyellow'
  | 'lightgray'
  | 'lightgreen'
  | 'lightgrey'
  | 'lightpink'
  | 'lightsalmon'
  | 'lightseagreen'
  | 'lightskyblue'
  | 'lightslategray'
  | 'lightslategrey'
  | 'lightsteelblue'
  | 'lightyellow'
  | 'lime'
  | 'limegreen'
  | 'linen'
  | 'maroon'
  | 'mediumaquamarine'
  | 'mediumblue'
  | 'mediumorchid'
  | 'mediumpurple'
  | 'mediumseagreen'
  | 'mediumslateblue'
  | 'mediumspringgreen'
  | 'mediumturquoise'
  | 'mediumvioletred'
  | 'midnightblue'
  | 'mintcream'
  | 'mistyrose'
  | 'moccasin'
  | 'navajowhite'
  | 'navy'
  | 'oldlace'
  | 'olive'
  | 'olivedrab'
  | 'orange'
  | 'purple'
  | 'rebeccapurple'
  | 'red'
  | 'silver'
  | 'teal'
  | 'transparent'
  | 'white'
  | 'yellow'

/**
 * The numeric-figure-values Controls the usage of alternate glyphs for numbers, fractions, and ordinal markers.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-numeric
 */
export type CSSNumericFigureValue =
  | CSSGlobalValues
  | 'normal'
  | 'ordinal'
  | 'slashed-zero'
  | 'lining-nums'
  | 'oldstyle-nums'
  | 'proportional-nums'
  | 'tabular-nums'
  | 'diagonal-fractions'
  | 'stacked-fractions'
  | 'oldstyle-nums stacked-fractions'

/**
 * Specifies how the contents of a replaced element should be fitted to the box established by its used height and width.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit
 */
export type CSSObjectFit = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down' | CSSGlobalValues

/**
 * Overflow modes
 * @see https://drafts.csswg.org/css-overflow-3/#propdef-overflow
 */
export type CSSOverflow = 'visible' | 'hidden' | 'scroll' | 'clip' | 'auto'

/**
 * a percentage; 0 | '0%' etc.
 * @see https://drafts.csswg.org/css-values-3/#percentage
 */
export type CSSPercentage = CSSGlobalValues | string | 0

/**
 * Defines a position (e.g. background-position)
 * @see https://drafts.csswg.org/css-backgrounds-3/#position
 */
export type CSSPosition = CSSAngle | string

export type CSSRadialGradientEndingShape = 'circle' | 'ellipse'

/**
 * Radial Gradient Size.
 * @see https://drafts.csswg.org/css-images-3/#ending-shape
 */
export type CSSRadialGradientSize =
  | CSSLength
  | Array<CSSLength>
  | 'closest-side'
  | 'farthest-side'
  | 'closest-corner'
  | 'closest-side'

/**
 * Relative size keywords
 * @see https://drafts.csswg.org/css-fonts-3/#relative-size-value
 */
export type CSSRelativeSize = 'larger' | 'smaller'

/**
 * Specifies how background images are tiled after they have been sized and positioned
 * @see https://drafts.csswg.org/css-backgrounds/#repeat-style
 */
export type CSSRepeatStyle =
  | 'repeat-x'
  | 'repeat-y'
  | 'repeat'
  | 'space'
  | 'round'
  | 'no-repeat'
  | 'repeat repeat'
  | 'repeat space'
  | 'repeat round'
  | 'repeat no-repeat'
  | 'space repeat'
  | 'space space'
  | 'space round'
  | 'space no-repeat'
  | 'round repeat'
  | 'round space'
  | 'round round'
  | 'round no-repeat'
  | 'no-repeat repeat'
  | 'no-repeat space'
  | 'no-repeat round'
  | 'no-repeat no-repeat'

/**
 * Starting position for many gradients
 * @see https://drafts.csswg.org/css-images-3/#typedef-side-or-corner
 */
export type CSSSideOrCorner =
  | CSSAngle
  | 'left'
  | 'right'
  | 'top'
  | 'bottom'
  | 'to left'
  | 'to right'
  | 'to top'
  | 'to bottom'
  | 'left top'
  | 'right top'
  | 'left bottom'
  | 'right bottom'
  | 'top left'
  | 'top right'
  | 'bottom left'
  | 'bottom right'
  | 'to left top'
  | 'to right top'
  | 'to left bottom'
  | 'to right bottom'
  | 'to top left'
  | 'to top right'
  | 'to bottom left'
  | 'to bottom right'

/** Supporting by `-timing-function` properties */
export type CSSTimingFunction /** e.g. steps(int,start|end)|cubic-bezier(n,n,n,n) */ =
  | string
  | CSSGlobalValues
  | 'ease'
  | 'ease-in'
  | 'ease-out'
  | 'ease-in-out'
  | 'linear'
  | 'step-start'
  | 'step-end'

/**
 * Tranform list for the element.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function
 */
export type CSSTransformFunction = string | 'none'

/**
 * Expressed as url('protocol://')
 * @see https://drafts.csswg.org/css-values-3/#urls
 */
export type CSSUrl = string
