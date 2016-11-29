import { style, css, reinit, classes, cssRule } from '../index';
import * as assert from 'assert';

describe("initial test", () => {
  it("should pass", () => {
    reinit();
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
    style({ color: 'red', nested: { '&>*': { color: 'red' } } });
    assert.equal(css(), '.f1nv0def,.f1nv0def>*{color:red}');
  });

  it("child different", () => {
    reinit();
    style({ color: 'red', nested: { '&>*': { color: 'blue' } } });
    assert.equal(css(), '.fv84gyi{color:red}.fv84gyi>*{color:blue}');
  });

  it("media same", () => {
    reinit();
    style({ color: 'red', nested: { '@media (min-width: 400px)': { color: 'red' } } });
    assert.equal(css(), '.f12z113b{color:red}@media (min-width: 400px){.f12z113b{color:red}}');
  });

  it("media different", () => {
    reinit();
    style({ color: 'red', nested: { '@media (min-width: 400px)': { color: 'blue' } } });
    assert.equal(css(), '.fxfrsga{color:red}@media (min-width: 400px){.fxfrsga{color:blue}}');
  });

  it("classes should compose", () => {
    assert.equal(classes("a", "b"), "a b");
    assert.equal(classes("a", false && "b"), "a");
    assert.equal(classes("a", false && "b", "c"), "a c");
  });

  it("transparent string should render transparent in color property", () => {
    reinit();
    cssRule('.transparent', { color: 'transparent' });
    style({ color: 'transparent' });
    assert.equal(css(), '.transparent{color:transparent}.fwarpl0{color:transparent}');
  });
})
