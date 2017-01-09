import { createTypeStyle } from '../index';
import * as assert from 'assert';

describe("$priority", () => {
  it("should be 0 by default", () => {
    const ts1 = createTypeStyle();
    ts1.style({ color: 'red' });
    assert.equal(ts1.getStyles(), '.f1jvcvsh{color:red}');
  });

  it("0 should have no effect", () => {
    const ts1 = createTypeStyle();
    ts1.style({
      color: 'red'
    });
    assert.equal(ts1.getStyles(), '.f1jvcvsh{color:red}');

    const ts2 = createTypeStyle();
    ts2.style({ $priority: 0, color: 'red' });

    assert.equal(ts2.getStyles(), '.f1jvcvsh{color:red}');
  });

  it("1 should nest the class", () => {
    const ts1 = createTypeStyle();
    ts1.style({
      $nest: {
        '&&': {
          color: 'red'
        }
      }
    });
    assert.equal(ts1.getStyles(), '.f154aqep.f154aqep{color:red}');

    const ts2 = createTypeStyle();
    ts2.style({ $priority: 1, color: 'red' });
    assert.equal(ts2.getStyles(), '.f154aqep.f154aqep{color:red}');
  });

  it("2 should nest the class with higher priority", () => {
    const ts1 = createTypeStyle();
    ts1.style({
      $nest: {
        '&&&': {
          color: 'red'
        }
      }
    });
    assert.equal(ts1.getStyles(), '.f7cp5yv.f7cp5yv.f7cp5yv{color:red}');

    const ts2 = createTypeStyle();
    ts2.style({ $priority: 2, color: 'red' });
    assert.equal(ts2.getStyles(), '.f7cp5yv.f7cp5yv.f7cp5yv{color:red}');
  });

  it("should work for ordering pseudo states", () => {
    const hoverBackground = 'green';
    const focusBackground = 'red';

    const ts1 = createTypeStyle();
    ts1.style({
      $nest: {
        '&:focus': { background: focusBackground },
        /** Use && to increase specifity and show that order matters */
        '&&:hover': { background: hoverBackground },
      },
    });
    assert.equal(ts1.getStyles(), '.f1624loh:focus{background:red}.f1624loh.f1624loh:hover{background:green}');

    const ts2 = createTypeStyle();
    ts2.style({
      $nest: {
        '&:focus': { background: focusBackground },
        /** Use && to increase specifity and show that order matters */
        '&:hover': {
          $nest: {
            '&&': { background: hoverBackground }
          }
        },
      },
    });
    assert.equal(ts2.getStyles(), '.f8zejtz:focus{background:red}.f8zejtz:hover.f8zejtz:hover{background:green}');

    const ts3 = createTypeStyle();
    ts3.style({
      $nest: {
        '&:focus': { background: focusBackground },
        /** Use priority to increase specifity and show that order matters */
        '&:hover': { $priority: 1, background: hoverBackground },
      },
    });
    assert.equal(ts3.getStyles(), '.f8zejtz:focus{background:red}.f8zejtz:hover.f8zejtz:hover{background:green}');
  });

  it("should be nestable", () => {
    const hoverBackground = 'green';
    const focusBackground = 'red';

    const ts1 = createTypeStyle();
    ts1.style({
      $priority: 1,
      $nest: {
        '&:focus': { background: focusBackground },
        /** Use priority to increase specifity and show that order matters */
        '&:hover': { $priority: 1, background: hoverBackground },
      },
    });
    assert.equal(ts1.getStyles(), '.f1fqqfqf.f1fqqfqf:focus{background:red}.f1fqqfqf.f1fqqfqf:hover.f1fqqfqf.f1fqqfqf:hover{background:green}');
  });
});
