import { style, getStyles, reinit, debugName } from '../index';
import * as assert from 'assert';

describe('utilities', () => {
  describe('debugName', () => {
    it("should return $debugName when asked to", () => {
      reinit();
      style(
        debugName('sample', true),
        {
          color: 'blue',
          $nest: {
            '&:hover': {
              color: 'rgba(0, 0, 0, 0)',
            }
          }
        }
      );
      assert.equal(getStyles(), '.sample_fy3xmhm{color:blue}.sample_fy3xmhm:hover{color:rgba(0, 0, 0, 0)}');
    });

    it("should filter out $debugName when asked to", () => {
      reinit();
      style(
        debugName('sample', false),
        {
          color: 'blue',
          $nest: {
            '&:hover': {
              color: 'rgba(0, 0, 0, 0)',
            }
          }
        }
      );
      assert.equal(getStyles(), '.fy3xmhm{color:blue}.fy3xmhm:hover{color:rgba(0, 0, 0, 0)}');
    });

    it("should show $debugName when environment is not available", () => {
      reinit();
      const oldEnv = process.env;
      process.env = {};

      style(
        debugName('sample'),
        {
          color: 'blue',
          $nest: {
            '&:hover': {
              color: 'rgba(0, 0, 0, 0)',
            }
          }
        }
      );
      assert.equal(getStyles(), '.sample_fy3xmhm{color:blue}.sample_fy3xmhm:hover{color:rgba(0, 0, 0, 0)}');
      process.env = oldEnv;
    });

    it("should show $debugName in non-production environment", () => {
      reinit();
      const oldEnv = process.env.NODE_ENV;
      process.env.NODE_ENV = 'development';

      style(
        debugName('sample'),
        {
          color: 'blue',
          $nest: {
            '&:hover': {
              color: 'rgba(0, 0, 0, 0)',
            }
          }
        }
      );
      assert.equal(getStyles(), '.sample_fy3xmhm{color:blue}.sample_fy3xmhm:hover{color:rgba(0, 0, 0, 0)}');

      process.env.NODE_ENV = oldEnv;
    });

    it("should filter out $debugName in production environment", () => {
      reinit();
      const oldEnv = process.env.NODE_ENV;
      process.env.NODE_ENV = 'production';

      style(
        debugName('sample'),
        {
          color: 'blue',
          $nest: {
            '&:hover': {
              color: 'rgba(0, 0, 0, 0)',
            }
          }
        }
      );
      assert.equal(getStyles(), '.fy3xmhm{color:blue}.fy3xmhm:hover{color:rgba(0, 0, 0, 0)}');

      process.env.NODE_ENV = oldEnv;
    });
  });
});

