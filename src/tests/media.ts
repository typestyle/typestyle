import { style, css, reinit, media } from '../index';
import * as assert from 'assert';

describe("media query", () => {
  it("standard freestyle", () => {
    reinit();
    style({ color: 'red', '@media (min-width: 400px)': { color: 'red' } });
    const standardFreeStyle = css();
    reinit();
    style({ color: 'red' }, media({ minWidth: 400 }, { color: 'red' }));
    assert.equal(css(), standardFreeStyle);
  });

  it("support type", () => {
    reinit();
    style({ color: 'red' }, media({ minWidth: 400, type: 'screen' }, { color: 'red' }));
    assert.equal(css(), '.f1960l9c{color:red}@media screen and (min-width: 400px){.f1960l9c{color:red}}');
  });
})
