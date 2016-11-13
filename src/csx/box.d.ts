/**
 * @module Box helpers
 * Having top, left, bottom, right seperated makes it easier to override and maintain individual properties
 */
/**
 * For `number` we assume pixels e.g. 5 => '5px'
 * For `string` *you* should provide the unit e.g. '5px'
 */
export declare type BoxUnit = number | string;
/**
 * A box function is something that can take:
 * - all
 * - topAndBottom + leftRight
 * - top + right + bottom + left
 */
export interface BoxFunction<T> {
    (all: BoxUnit): T;
    (topAndBottom: BoxUnit, leftAndRight: BoxUnit): T;
    (top: BoxUnit, right: BoxUnit, bottom: BoxUnit, left: BoxUnit): T;
}
export declare const padding: BoxFunction<{
    paddingTop: string;
    paddingRight: string;
    paddingBottom: string;
    paddingLeft: string;
}>;
export declare const margin: BoxFunction<{
    marginTop: string;
    marginRight: string;
    marginBottom: string;
    marginLeft: string;
}>;
export declare const border: BoxFunction<{
    borderTop: string;
    borderRight: string;
    borderBottom: string;
    borderLeft: string;
}>;
/**
 * Puts a vertical margin between each child
 */
export declare const verticallySpaced: (margin: string | number) => {
    '&>*': {
        marginBottom: string;
    };
    '&>*:last-child': {
        marginBottom: string;
    };
};
/**
 * Puts a horizontal margin between each child
 */
export declare const horizontallySpaced: (margin: string | number) => {
    '&>*': {
        marginRight: string;
    };
    '&>*:last-child': {
        marginRight: string;
    };
};
/**
 * Gives this element the same size as the nearest offsetParent
 */
export declare const fillParent: {
    width: string;
    height: string;
};
/** mixin: maxWidth */
export declare const maxWidth: (value: string | number) => {
    maxWidth: string;
};
/** mixin: maxHeight */
export declare const maxHeight: (value: string | number) => {
    maxHeight: string;
};
/**
 * Commonly used in layouts for quick and easy centering using margins
 */
export declare const marginCenterHorizontal: {
    marginLeft: string;
    marginRight: string;
};
