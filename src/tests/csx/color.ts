import * as assert from 'assert';
import { css, style, keyframes, reinit } from '../../index';
import {
  color, hsl, hsla, rgb, rgba, cyan, red, white,
  black, green, blue, purple, transparent, maroon
} from '../../csx';

describe('color', () => {
  describe('toString()', () => {
    it('handles named colors', () => {
      const c1 = red.toString();
      assert.equal(c1, 'rgb(255,0,0)');
    });

    it('handles transparency', () => {
      const c1 = transparent.toString();
      assert.equal(c1, 'rgba(0,0,0,0)');
    });
  });

  describe('rgba()', () => {
    it('handles rgb with numbers', () => {
      const color = rgb(255, 0, 0).toString();
      assert.equal(color, 'rgb(255,0,0)');
    });
  });

  describe('rgba()', () => {
    it('handles rgba with numbers', () => {
      const color = rgba(255, 0, 0, 1).toString();
      assert.equal(color, 'rgba(255,0,0,1)');
    });

    it('handles rgba with percent string', () => {
      const color = rgba(255, 0, 0, '80%').toString();
      assert.equal(color, 'rgba(255,0,0,0.8)');
    });
  });

  describe('hsl()', () => {
    it('handles negative hues', () => {
      const color1 = hsl(-180, 1, .5).toString();
      const color2 = hsl(180, 1, .5).toString();
      assert.equal(color1, color2);
    });

    it('handles out of range hues', () => {
      const color1 = hsl(90, 1, .5).toString();
      const color2 = hsl(360 + 90, 1, .5).toString();
      const color3 = hsl(-360 - 270, 1, .5).toString();
      assert.equal(color1, color2);
      assert.equal(color1, color3);
    });

    it('handles hsl with percent strings', () => {
      const color = hsl(0, '100%', '50%').toString();
      assert.equal(color, 'hsl(0,100%,50%)');
    });

    it('handles hsl with percent numbers', () => {
      const color = hsl(0, 1, .5).toString();
      assert.equal(color, 'hsl(0,100%,50%)');
    });

    it('handles hsl in style', () => {
      reinit();
      style({
        backgroundColor: hsl(0, '100%', '50%')
      })
      assert.equal(css(), '.f1ri67gz{background-color:hsl(0,100%,50%)}');
    });

    it('handles hsl in style with & interpolation', () => {
      reinit();
      style({
        nested: {
          '&:hover': {
            backgroundColor: hsl(0, '100%', '50%'),
          }
        }
      });
      assert.equal(css(), '.f5pxp3d:hover{background-color:hsl(0,100%,50%)}');
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

  });

  describe('hsla()', () => {
    it('handles hsla with percent numbers', () => {
      const color = hsla(0, 1, .5, .1).toString();
      assert.equal(color, 'hsla(0,100%,50%,0.1)');
    });

    it('handles hsla with percent strings', () => {
      const color = hsla(0, '100%', '50%', .1).toString();
      assert.equal(color, 'hsla(0,100%,50%,0.1)');
    });

    it('adds hsla into style', () => {
      reinit();
      style({
        backgroundColor: hsla(0, '100%', '50%', .1)
      })
      assert.equal(css(), '.f8x8s41{background-color:hsla(0,100%,50%,0.1)}');
    });
  });

  it('converts from a named color to rgb', () => {
    const color1 = red.toString();
    const color2 = rgb(255, 0, 0).toString();
    assert.equal(color1, color2);
  });

  describe('color()', () => {
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
  });

  describe('toHexString()', () => {
    it('converts white to #FFFFFF', () => {
      const color = white.toHexString();
      assert.equal(color, '#FFFFFF');
    });
    it('converts black to #000000', () => {
      const color = black.toHexString();
      assert.equal(color, '#000000');
    });
    it('converts red to #FF0000', () => {
      const color = red.toHexString();
      assert.equal(color, '#FF0000');
    });
    it('converts green to #008000', () => {
      const color = green.toHexString();
      assert.equal(color, '#008000');
    });
    it('converts blue to #0000FF', () => {
      const color = blue.toHexString();
      assert.equal(color, '#0000FF');
    });
    it('converts rgb(0, 127.5, 0) to #009900', () => {
      const color = rgb(0, 127.5, 0).toHexString();
      assert.equal(color, '#008000');
    });
  });

  describe('toHSL()', () => {
    it('converts from a named color to hsl', () => {
      const color1 = red.toHSL().toString();
      const color2 = hsl(0, 1, .5).toString();
      assert.equal(color1, color2)
    });

    it('converts from rgb to hsl', () => {
      const color1 = rgb(255, 0, 0).toHSL().toString();
      const color2 = hsl(0, 1, .5).toString();
      assert.equal(color1, color2)
    });
  });

  describe('toHSLA()', () => {
    it('converts from a named color to hsla', () => {
      const color1 = red.toHSLA().toString();
      const color2 = hsla(0, 1, .5, 1).toString();
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
  });

  describe('toRGB()', () => {
    it('converts from a named color to rgba', () => {
      const color1 = red.toRGBA().toString();
      const color2 = rgba(255, 0, 0, 1).toString();
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
  });

  describe('toRGBA()', () => {
    it('converts from hsla to rgba', () => {
      const color1 = hsla(0, 1, .5, .5).toRGBA().toString();
      const color2 = rgba(255, 0, 0, .5).toString();
      assert.equal(color1, color2)
    });
  });

  describe('red()', () => {
    it('returns the red channel from rgb', () => {
      const color1 = rgb(255, 0, 0);
      assert.equal(255, color1.red())
    });

    it('returns the red channel from rgba', () => {
      const color1 = rgba(255, 0, 0, .5);
      assert.equal(255, color1.red())
    });
  });

  describe('green()', () => {
    it('returns the green channel from rgb', () => {
      const color1 = rgb(0, 255, 0);
      assert.equal(255, color1.green())
    });

    it('returns the green channel from rgba', () => {
      const color1 = rgba(0, 255, 0, .5);
      assert.equal(255, color1.green())
    });
  });

  describe('blue()', () => {
    it('returns the blue channel from rgb', () => {
      const color1 = rgb(0, 0, 255);
      assert.equal(255, color1.blue())
    });
    it('returns the blue channel from rgba', () => {
      const color1 = rgba(0, 0, 255, .5);
      assert.equal(255, color1.blue())
    });
  });

  describe('opacity()', () => {
    it('returns the alpha channel from rgb', () => {
      const color1 = rgb(0, 0, 0);
      assert.equal(1, color1.alpha())
      assert.equal(1, color1.opacity())
    });

    it('returns the alpha channel from rgba', () => {
      const color1 = rgba(0, 0, 0, .5);
      assert.equal(.5, color1.alpha())
      assert.equal(.5, color1.opacity())
    });
  })

  describe('invert()', () => {
    it('inverts rgb', () => {
      const color1 = rgb(255, 0, 0).invert().toString();
      const color2 = cyan.toString();
      assert.equal(color1, color2);
    });

    it('inverts rgba', () => {
      const color1 = rgba(255, 0, 0, .5).invert().toString();
      const color2 = cyan.fade(.5).toString();
      assert.equal(color1, color2);
    });

    it('inverts hsl', () => {
      const color1 = hsl(0, 1, .5).invert().toString();
      const color2 = cyan.toString();
      assert.equal(color1, color2);
    });

    it('inverts hsla', () => {
      const color1 = hsla(0, 1, .5, 1).invert().toString();
      const color2 = cyan.fade(1).toString();
      assert.equal(color1, color2);
    });
  });

  describe('lighten()', () => {
    it('lightens black to white', () => {
      const color1 = black.lighten(1).toString();
      const color2 = white.toHSL().toString();
      assert.equal(color1, color2);
    });

    it('lightens black to gray', () => {
      const color1 = black.lighten(.5).toString();
      const color2 = hsl(0, 0, .5).toString();
      assert.equal(color1, color2);
    });
  });

  describe('darken()', () => {
    it('changes white to black', () => {
      const color1 = white.darken(1).toString();
      const color2 = black.toHSL().toString();
      assert.equal(color1, color2);
    });

    it('changes black to gray', () => {
      const color1 = white.darken(.5).toString();
      const color2 = hsl(0, 0, .5).toString();
      assert.equal(color1, color2);
    });
  });

  describe('saturate()', () => {
    it('changes white to midred', () => {
      const color1 = hsl(0, 0, 1).saturate(.5).toString();
      const color2 = hsl(0, .5, 1).toString();
      assert.equal(color1, color2);
    });

    it('changes white to red', () => {
      const color1 = hsl(0, 0, 1).saturate(1).toString();
      const color2 = hsl(0, 1, 1).toString();
      assert.equal(color1, color2);
    });
  });

  describe('desaturate()', () => {
    it('changes red to midred', () => {
      const color1 = hsl(0, 1, 1).desaturate(.5).toString();
      const color2 = hsl(0, .5, 1).toString();
      assert.equal(color1, color2);
    });

    it('changes red to white', () => {
      const color1 = red.desaturate(1).toString();
      const color2 = hsl(0, 0, .5).toString();
      assert.equal(color1, color2);
    });
  });

  describe('grayscale()', () => {
    it('handles red', () => {
      const color1 = red.grayscale();
      assert.equal(color1.hue(), 0);
      assert.equal(color1.saturation(), 0);
      assert.equal(Math.round(color1.lightness() * 100), 50);
    });

    it('handles green', () => {
      const color1 = green.grayscale();
      assert.equal(color1.hue(), 120);
      assert.equal(color1.saturation(), 0);
      assert.equal(Math.round(color1.lightness() * 100), 25);
    });

    it('handles blue', () => {
      const color1 = blue.grayscale();
      assert.equal(color1.hue(), 240);
      assert.equal(color1.saturation(), 0);
      assert.equal(Math.round(color1.lightness() * 100), 50);
    });

    it('handles white', () => {
      const color1 = white.grayscale().toString();
      const color2 = hsl(0, 0, 1).toString();
      assert.equal(color1, color2);
    });

    it('handles black', () => {
      const color1 = black.grayscale().toString();
      const color2 = hsl(0, 0, 0).toString();
      assert.equal(color1, color2);
    });
  });

  describe('fade()', () => {
    it('changes rgb to rgba', () => {
      const color1 = rgb(255, 255, 255).fade(1).toString();
      const color2 = rgba(255, 255, 255, 1).toString();
      assert.equal(color1, color2);
    });

    it('changes hsl to hsla', () => {
      const color1 = hsl(0, 0, 1).fade(1).toString();
      const color2 = hsla(0, 0, 1, 1).toString();
      assert.equal(color1, color2);
    });

    it('clamps < 0 at 0% opacity', () => {
      const color1 = rgba(255, 0, 0, 0).fade(-.5).toString();
      const color2 = rgba(255, 0, 0, 0).toString();
      assert.equal(color1, color2);
    });

    it('sets 0 to 0% opacity', () => {
      const color1 = rgba(255, 0, 0, 0).fade(0).toString();
      const color2 = rgba(255, 0, 0, 0).toString();
      assert.equal(color1, color2);
    });

    it('sets .5 to 50% opacity', () => {
      const color1 = rgba(255, 0, 0, 0).fade(.5).toString();
      const color2 = rgba(255, 0, 0, .5).toString();
      assert.equal(color1, color2);
    });

    it('sets 1 to 100% opacity', () => {
      const color1 = rgba(255, 0, 0, 0).fade(1).toString();
      const color2 = rgba(255, 0, 0, 1).toString();
      assert.equal(color1, color2);
    });

    it('clamps > 1 to 100% opacity', () => {
      const color1 = rgba(255, 0, 0, 0).fade(1.5).toString();
      const color2 = rgba(255, 0, 0, 1).toString();
      assert.equal(color1, color2);
    });
  });

  describe('fadeOut', () => {
    it('clamps at 0%', () => {
      const color1 = rgba(255, 0, 0, 0).fadeOut(.25).toString();
      const color2 = rgba(255, 0, 0, 0).toString();
      assert.equal(color1, color2);
    });

    it('.75 = 1 - .25', () => {
      const color1 = rgba(255, 0, 0, 1).fadeOut(.25).toString();
      const color2 = rgba(255, 0, 0, .75).toString();
      assert.equal(color1, color2);
    });

    it('.5 = .75 - .25', () => {
      const color1 = rgba(255, 0, 0, .75).fadeOut(.25).toString();
      const color2 = rgba(255, 0, 0, .5).toString();
      assert.equal(color1, color2);
    });

    it('.25 = .5 - .25', () => {
      const color1 = rgba(255, 0, 0, .5).fadeOut(.25).toString();
      const color2 = rgba(255, 0, 0, .25).toString();
      assert.equal(color1, color2);
    });

    it('0 = .25 - .25', () => {
      const color1 = rgba(255, 0, 0, .25).fadeOut(.25).toString();
      const color2 = rgba(255, 0, 0, 0).toString();
      assert.equal(color1, color2);
    });
  });


  describe('fadeIn', () => {
    it('.25 = 0 - .25', () => {
      const color1 = rgba(255, 0, 0, 0).fadeIn(.25).toString();
      const color2 = rgba(255, 0, 0, .25).toString();
      assert.equal(color1, color2);
    });

    it('.5 = .25 - .25', () => {
      const color1 = rgba(255, 0, 0, .25).fadeIn(.25).toString();
      const color2 = rgba(255, 0, 0, .5).toString();
      assert.equal(color1, color2);
    });

    it('.75 = .5 - .25', () => {
      const color1 = rgba(255, 0, 0, .5).fadeIn(.25).toString();
      const color2 = rgba(255, 0, 0, .75).toString();
      assert.equal(color1, color2);
    });

    it('1 = .75 - .25', () => {
      const color1 = rgba(255, 0, 0, .75).fadeIn(.25).toString();
      const color2 = rgba(255, 0, 0, 1).toString();
      assert.equal(color1, color2);
    });

    it('clamps at 100%', () => {
      const color1 = rgba(255, 0, 0, 1).fadeIn(.25).toString();
      const color2 = rgba(255, 0, 0, 1).toString();
      assert.equal(color1, color2);
    });
  });

  describe('mix()', () => {
     // $c0: mix(red, green);
     // $c1: mix(red, blue);
     // $c2: mix(red, white);
     // $c3: mix(red, transparent);
     // $c4: mix(red, black);

    it('red + green', () => {
      // sass converts rgb to hex, so the actual result should be
      // rgb(127.5, 64, 0) if the numbers were preserved
      const color1 = red.mix(green).toString();
      const color2 = rgb(128, 64, 0).toString();
      assert.equal(color1, color2);
    });

    it('red + blue', () => {
      const color1 = red.mix(blue).toString();
      const color2 = purple.toString();
      assert.equal(color1, color2);
    });

    it('red + white', () => {
      const color1 = red.mix(white).toString();
      const color2 = rgb(255, 128, 128).toString();
      assert.equal(color1, color2);
    });

    it('red + transparent', () => {
      const color1 = red.mix(transparent).toString();
      const color2 = rgba(255, 0, 0, .5).toString();
      assert.equal(color1, color2);
    });

    it('red + black', () => {
      const color1 = red.mix(black).toString();
      const color2 = maroon.toString();
      assert.equal(color1, color2);
    });
  });

  describe('tint()', () => {
    it('changed red to a lighter red', () => {
      const color1 = red.tint(.3).toString();
      // color2 was tested on the SASS compiler with mix(white, red, 30%)
      const color2 = rgb(255, 77, 77).toString();
      assert.equal(color1, color2);
    });
  });

  describe('shade()', () => {
    it('changed red to a darker red', () => {
      const color1 = red.shade(.3).toString();
      // color2 was tested on the SASS compiler with mix(black, red, 30%)
      const color2 = rgb(179, 0, 0).toString();
      assert.equal(color1, color2);
    });
  });

  describe('spin()', () => {
    it('spinning 360 degrees returns same color', () => {
      const color1 = red.toHSL().toString();
      const color2 = red.spin(360).toString();
      assert.equal(color1, color2);
    });

    it('spinning -360 degrees returns same color', () => {
      const color1 = red.toHSL().toString();
      const color2 = red.spin(-360).toString();
      assert.equal(color1, color2);
    });

    it('spinning -120 degrees from red returns blue', () => {
      const color1 = red.spin(-120).toHexString();
      assert.equal('#0000FF', color1);
    });

    it('spinning 120 degrees from red returns yellow', () => {
      const color1 = red.spin(120).toHexString();
      assert.equal('#00FF00', color1);
    });
  });
});
