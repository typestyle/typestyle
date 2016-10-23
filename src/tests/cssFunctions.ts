import { style, css, hsl, hsla, keyframes, linearGradient, repeatingLinearGradient, reinit } from '../index';
import * as assert from 'assert';

describe("cssFunctions", () => {
  it("hsl should resolve", () => {
    const red = hsl(0, '100%', '50%');
    assert.equal(red, 'hsl(0,100%,50%)');
  });

  it("style should resolve hsl correctly", () => {
    reinit();
    style({
      backgroundColor: hsl(0, '100%', '50%')
    })
    assert.equal(css(), '.f1ri67gz{background-color:hsl(0,100%,50%)}');
  });

  it("hsla should resolve", () => {
    const red = hsla(0, '100%', '50%', .1).toString();
    assert.equal(red, 'hsla(0,100%,50%,0.1)');
  });

  it("style should resolve hsla correctly", () => {
    reinit();
    style({
      backgroundColor: hsla(0, '100%', '50%', .1)
    })
    assert.equal(css(), '.f8x8s41{background-color:hsla(0,100%,50%,0.1)}');
  });

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

  it("style should resolve keyframes with colors inside of it", () => {
    reinit();
    const colorAnimation = keyframes({
      from: {
        backgroundColor: hsl(250, '50%', '30%')
      },
      to: {
        backgroundColor: hsl(250, '50%', '50%')
      }
    });
    style({
      animationName: colorAnimation
    });
    assert.equal(css(), '@keyframes fic7j4e{from{background-color:hsl(250,50%,30%)}to{background-color:hsl(250,50%,50%)}}.f1f9piqr{animation-name:fic7j4e}');
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
