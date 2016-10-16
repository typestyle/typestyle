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
})