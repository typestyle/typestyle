import { css, reinit } from '../index';
import * as assert from 'assert';

describe("test rules", () => {
  it("it should provide expected output when used as css framework", () => {
    reinit();
    require('./rule/layout');

    assert.equal(css(), 'html{height:100%}body{background-color:white;color:blue;font-size:14pt;height:100%;margin:0;padding:0}');
  });
});
