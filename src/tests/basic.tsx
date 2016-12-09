import { style, getCss, reinit, classes, cssRule } from '../index';
import * as assert from 'assert';

describe("initial test", () => {
  it("should pass", () => {
    reinit();
    assert(getCss() === '');

    style({ color: 'red' });
    assert.equal(getCss(), '.f1jvcvsh{color:red}');
  });

  it("reinit should clear", () => {
    reinit();
    assert(getCss() === '');

    style({ color: 'red' });
    assert.equal(getCss(), '.f1jvcvsh{color:red}');
  });

  it("child same", () => {
    reinit();
    style({ color: 'red', $nest: { '&>*': { color: 'red' } } });
    assert.equal(getCss(), '.f1nv0def,.f1nv0def>*{color:red}');
  });

  it("child same unique", () => {
    reinit();
    style({ color: 'red', $nest: { '&>*': { color: 'red', $unique: true } } });
    assert.equal(getCss(), '.f1nv0def{color:red}.f1nv0def>*{color:red}');
  });

  it("child different", () => {
    reinit();
    style({ color: 'red', $nest: { '&>*': { color: 'blue' } } });
    assert.equal(getCss(), '.fv84gyi{color:red}.fv84gyi>*{color:blue}');
  });

  it("media same", () => {
    reinit();
    style({
      color: 'red',
      $nest: {
        '@media (min-width: 400px)': { color: 'red' }
      }
    });
    assert.equal(getCss(), '.f12z113b{color:red}@media (min-width: 400px){.f12z113b{color:red}}');
  });

  it("media different", () => {
    reinit();
    style({ color: 'red', $nest: { '@media (min-width: 400px)': { color: 'blue' } } });
    assert.equal(getCss(), '.fxfrsga{color:red}@media (min-width: 400px){.fxfrsga{color:blue}}');
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
    assert.equal(getCss(), '.transparent{color:transparent}.fwarpl0{color:transparent}');
  });

  it("should support dedupe by default", () => {
    reinit();
    style({
      color: 'blue',
      $nest: {
        '&::-webkit-input-placeholder': {
          color: `rgba(0, 0, 0, 0)`,
        },
        '&::-moz-placeholder': {
          color: `rgba(0, 0, 0, 0)`,
        },
        '&::-ms-input-placeholder': {
          color: `rgba(0, 0, 0, 0)`,
        }
      }
    });
    assert.equal(getCss(), '.f13byakl{color:blue}.f13byakl::-webkit-input-placeholder,.f13byakl::-moz-placeholder,.f13byakl::-ms-input-placeholder{color:rgba(0, 0, 0, 0)}');
  });

  it("should support $unique", () => {
    reinit();
    style({
      color: 'blue',
      $nest: {
        '&::-webkit-input-placeholder': {
          $unique: true,
          color: `rgba(0, 0, 0, 0)`,
        },
        '&::-moz-placeholder': {
          $unique: true,
          color: `rgba(0, 0, 0, 0)`,
        },
        '&::-ms-input-placeholder': {
          $unique: true,
          color: `rgba(0, 0, 0, 0)`,
        }
      }
    });
    assert.equal(getCss(), '.f13byakl{color:blue}.f13byakl::-webkit-input-placeholder{color:rgba(0, 0, 0, 0)}.f13byakl::-moz-placeholder{color:rgba(0, 0, 0, 0)}.f13byakl::-ms-input-placeholder{color:rgba(0, 0, 0, 0)}');
  });

  it("should support $debugName", () => {
    reinit();
    style({
      $debugName: 'sample',
      color: 'blue',
      $nest: {
        '&:hover': {
          color: 'rgba(0, 0, 0, 0)',
        }
      }
    });
    assert.equal(getCss(), '.sample_fy3xmhm{color:blue}.sample_fy3xmhm:hover{color:rgba(0, 0, 0, 0)}');
  });
})
