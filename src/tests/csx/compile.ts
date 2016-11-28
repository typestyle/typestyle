import { style, reinit } from '../../index';
import * as flex from '../../csx/flex';

describe("Anything exported from csx", () => {
  it('should compile', () => {
    reinit();
    style(flex.flexRoot);
    style(flex.pass);
    style(flex.inlineRoot);
    style(flex.horizontal);
    style(flex.vertical);
  })
});
