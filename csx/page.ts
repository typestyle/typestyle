import { cssRule } from '../src';

/**
 * Recommended Page setup
 * - Sets up the body to be full size
 * - Sets up box sizing to be border box
 **/
export function setupPage(rootSelector: string) {
  /** Use full window size for application */
  cssRule('html, body', {
    height: '100%',
    width: '100%',
    padding: 0,
    margin: 0
  });

  /** Use border box */
  cssRule('html', {
    boxSizing: 'border-box'
  });
  cssRule('*,*:before,*:after', {
    boxSizing: 'inherit',
  });

  /** Also use fullSize for root */
  cssRule(rootSelector, {
    height: '100%',
    width: '100%',
  });
}
