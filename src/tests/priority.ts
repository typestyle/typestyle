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
});
