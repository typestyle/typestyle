import { css, reinit } from '../../index';
import { normalize } from '../../../csx';
import * as assert from 'assert';

describe("csx/normalize", () => {
  it("normalize should insert normalize", () => {
    reinit();
    normalize();
    assert.equal(css().length, 2154);
  });
});
