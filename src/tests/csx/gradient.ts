import { css, style, reinit } from '../../index';
import { hsl, linearGradient, repeatingLinearGradient } from '../../../csx';
import * as assert from 'assert';

describe("csx/gradient", () => {
  it("linear-gradient should resolve", () => {
    const redBlue = linearGradient('top left', 'red', 'blue').toString();
    assert.equal(redBlue, 'linear-gradient(top left,red,blue)');
  });

  it("style should resolve linear-gradient correctly", () => {
    reinit();
    style({
      backgroundImage: linearGradient('top left', 'red', 'blue')
    })
    assert.equal(css(), '.fw0gyi9{background-image:linear-gradient(top left,red,blue)}');
  });

  it("linear-gradient should resolve colors inside of it", () => {
    const redBlue = linearGradient('top left', hsl(0, '100%', '50%'), ['blue', '40%']).toString();
    assert.equal(redBlue, 'linear-gradient(top left,hsl(0,100%,50%),blue 40%)');
  });

  it("style should resolve linear-gradient with colors inside of it", () => {
    reinit();
    style({
      backgroundImage: linearGradient('top left', hsl(0, '100%', '50%'), ['blue', '40%'])
    })
    assert.equal(css(), '.f20pb75{background-image:linear-gradient(top left,hsl(0,100%,50%),blue 40%)}');
  });

  it("repeating-linear-gradient should resolve", () => {
    const redBlue = repeatingLinearGradient('top left', 'red', 'blue').toString();
    assert.equal(redBlue, 'repeating-linear-gradient(top left,red,blue)');
  });

  it("style should resolve repeating-linear-gradient correctly", () => {
    reinit();
    style({
      backgroundImage: repeatingLinearGradient('top left', 'red', 'blue')
    })
    assert.equal(css(), '.f9s170r{background-image:repeating-linear-gradient(top left,red,blue)}');
  });
})
