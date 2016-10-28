import { css, style, keyframes, reinit } from '../../index';
import { color, hsl, hsla, rgb, rgba } from '../../../csx';
import * as assert from 'assert';

describe('color', () => {
  it('handles named colors', () => {
    const c1 = color('red').toString();
    assert.equal(c1, 'rgb(255,0,0)');
  });

  it('handles transparency', () => {
    const c1 = color('transparent').toString();
    assert.equal(c1, 'rgba(0,0,0,0)');
  });

  it('handles rgb with numbers', () => {
    const color = rgb(255, 0, 0);
    assert.equal(color, 'rgb(255,0,0)');
  });

  it('handles rgba with numbers', () => {
    const color = rgba(255, 0, 0, 1);
    assert.equal(color, 'rgba(255,0,0,1)');
  });

  it('handles rgba with percent string', () => {
    const color = rgba(255, 0, 0, '80%');
    assert.equal(color, 'rgba(255,0,0,0.8)');
  });

  it('handles hsl with percent strings', () => {
    const color = hsl(0, '100%', '50%').toString();
    assert.equal(color, 'hsl(0,100%,50%)');
  });

  it('handles hsl with percent numbers', () => {
    const color = hsl(0, 1, .5).toString();
    assert.equal(color, 'hsl(0,100%,50%)');
  });

  it('handles hsla with (all) percent strings', () => {
    const color = hsla(0, '80%', '1%', '50%').toString();
    assert.equal(color, 'hsla(0,80%,1%,0.5)');
  });

  it('handles hsl in style', () => {
    reinit();
    style({
      backgroundColor: hsl(0, '100%', '50%')
    })
    assert.equal(css(), '.f1ri67gz{background-color:hsl(0,100%,50%)}');
  });

  it('handles hsla with percent strings', () => {
    const color = hsla(0, '100%', '50%', .1).toString();
    assert.equal(color, 'hsla(0,100%,50%,0.1)');
  });

  it('handles hsla with percent numbers', () => {
    const color = hsla(0, 1, .5, .1).toString();
    assert.equal(color, 'hsla(0,100%,50%,0.1)');
  });

  it('adds hsla into style', () => {
    reinit();
    style({
      backgroundColor: hsla(0, '100%', '50%', .1)
    })
    assert.equal(css(), '.f8x8s41{background-color:hsla(0,100%,50%,0.1)}');
  });

  it('adds hsl into keyframes', () => {
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

  it('converts from a named color to rgb', () => {
    const color1 = color('red').toString();
    const color2 = rgb(255, 0, 0).toString();
    assert.equal(color1, color2);
  });

  it('converts from a named color to rgba', () => {
    const color1 = color('red').toRGBA().toString();
    const color2 = rgba(255, 0, 0, 1).toString();
    assert.equal(color1, color2)
  });

it('converts from a hex color (3 digit) to rgb', () => {
    const color1 = color('#FF0000').toString();
    const color2 = rgb(255, 0, 0).toString();
    assert.equal(color1, color2);
  });

  it('converts from a hex color (6 digit) to rgb', () => {
    const color1 = color('#F00').toString();
    const color2 = rgb(255, 0, 0).toString();
    assert.equal(color1, color2);
  });

  it('converts from a named color to hsl', () => {
    const color1 = color('red').toHSL().toString();
    const color2 = hsl(0, 1, .5).toString();
    assert.equal(color1, color2)
  });

  it('converts from a named color to hsla', () => {
    const color1 = color('red').toHSLA().toString();
    const color2 = hsla(0, 1, .5, 1).toString();
    assert.equal(color1, color2)
  });

  it('converts from rgb to hsl', () => {
    const color1 = rgb(255, 0, 0).toHSL().toString();
    const color2 = hsl(0, 1, .5).toString();
    assert.equal(color1, color2)
  });

  it('converts from rgb to hsla', () => {
    const color1 = rgb(255, 0, 0).toHSLA().toString();
    const color2 = hsla(0, 1, .5, 1).toString();
    assert.equal(color1, color2)
  });

   it('converts from rgba to hsla', () => {
    const color1 = rgba(255, 0, 0, .5).toHSLA().toString();
    const color2 = hsla(0, 1, .5, .5).toString();
    assert.equal(color1, color2)
  });

  it('converts from hsl to rgb', () => {
    const color1 = hsl(0, 1, .5).toRGB().toString();
    const color2 = rgb(255, 0, 0).toString();
    assert.equal(color1, color2)
  });

  it('converts from hsla to rgb', () => {
    const color1 = hsla(0, 1, .5, .5).toRGB().toString();
    const color2 = rgb(255, 0, 0).toString();
    assert.equal(color1, color2)
  });

  it('converts from hsla to rgba', () => {
    const color1 = hsla(0, 1, .5, .5).toRGBA().toString();
    const color2 = rgba(255, 0, 0, .5).toString();
    assert.equal(color1, color2)
  });

  it('returns the red channel from rgb', () => {
    const color1 = rgb(255, 0, 0);
    assert.equal(255, color1.red())
  });

  it('returns the green channel from rgb', () => {
    const color1 = rgb(0, 255, 0);
    assert.equal(255, color1.green())
  });

  it('returns the blue channel from rgb', () => {
    const color1 = rgb(0, 0, 255);
    assert.equal(255, color1.blue())
  });

  it('returns the alpha channel from rgb', () => {
    const color1 = rgb(0, 0, 0);
    assert.equal(1, color1.alpha())
    assert.equal(1, color1.opacity())
  });

 it('returns the red channel from rgba', () => {
    const color1 = rgba(255, 0, 0, .5);
    assert.equal(255, color1.red())
  });

  it('returns the green channel from rgba', () => {
    const color1 = rgba(0, 255, 0, .5);
    assert.equal(255, color1.green())
  });

  it('returns the blue channel from rgba', () => {
    const color1 = rgba(0, 0, 255, .5);
    assert.equal(255, color1.blue())
  });

  it('returns the alpha channel from rgba', () => {
    const color1 = rgba(0, 0, 0, .5);
    assert.equal(.5, color1.alpha())
    assert.equal(.5, color1.opacity())
  });

})
