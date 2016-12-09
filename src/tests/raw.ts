import { style, getCss, reinit, cssRaw } from '../index';
import * as assert from 'assert';

describe("raw css support", () => {
  it('should insert raw css by itself', () => {
    reinit();
    const rawCSS = `
    body {
      width: '100%'
    }
`;
    cssRaw(rawCSS);
    assert.equal(getCss(), rawCSS);
  })
  it('should insert raw CSS followed by style', () => {
    reinit();
    const rawCSS = `
    body {
      width: '100%'
    }
`;
    style({
      color: 'red'
    })
    cssRaw(rawCSS);
    assert.equal(getCss(), rawCSS + '.f1jvcvsh{color:red}');
  })
});
