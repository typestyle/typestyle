import { style, css, reinit } from '../index';
import * as assert from 'assert';
describe("initial test", () => {
  it("should pass", () => {
    assert(css() === '');

    style({ color: 'red' });
    assert.equal(css(), '.f1jvcvsh{color:red}');
  });

  it("reinit should clear", () => {
    reinit();
    assert(css() === '');

    style({ color: 'red' });
    assert.equal(css(), '.f1jvcvsh{color:red}');
  });

  it("child same", () => {
    reinit();
    style({ color: 'red', '&>*': { color: 'red' } });
    assert.equal(css(), '.f1nv0def,.f1nv0def>*{color:red}');
  });

  it("child different", () => {
    reinit();
    style({ color: 'red', '&>*': { color: 'blue' } });
    assert.equal(css(), '.fv84gyi{color:red}.fv84gyi>*{color:blue}');
  });

  it("media", () => {
    reinit();
    style({ color: 'red', '@media (min-width: 400px)': { color: 'red' } });
    assert.equal(css(), '.f12z113b{color:red}@media (min-width: 400px){.f12z113b{color:red}}');
  });
})