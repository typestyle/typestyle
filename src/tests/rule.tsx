import { css, reinit, globalRule } from '../index';
import * as assert from 'assert';

describe("test rules", () => {
  it("it should provide expected output when used as css framework", () => {
    reinit();

    /** Sample variables */
    const colors = {
      primary: 'blue',
      info: 'lightblue',
      success: 'green',
      warning: 'orange',
      danger: 'red',
      bgColor: 'white'
    };
    const fonts = {
      baseSize: '14pt'
    };

    // set html styles
    globalRule('html', {
      height: '100%'
    });

    // set default body styles
    globalRule('body', {
      fontSize: fonts.baseSize,
      margin: 0,
      padding: 0,
      height: '100%',
      backgroundColor: colors.bgColor,
      color: colors.primary
    });

    assert.equal(css(), 'html{height:100%}body{background-color:white;color:blue;font-size:14pt;height:100%;margin:0;padding:0}');
  });
});
