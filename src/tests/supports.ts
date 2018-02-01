import { style, getStyles, reinit } from '../index';
import * as assert from 'assert';

describe('@supports', () => {
  it('standard freestyle', () => {
    reinit();
    style({
      color: 'red',
      $nest: {
        '@supports (display: flex)': {
          color: 'white'
        }
      }
    });
    assert.equal(getStyles(), '.f5f13tn{color:red}@supports (display: flex){.f5f13tn{color:white}}');
  });
});
