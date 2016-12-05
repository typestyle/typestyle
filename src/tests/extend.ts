import { extend } from '../index';
import * as assert from 'assert';

describe("extend", () => {
  it("plain objects should be preserved", () => {
    assert.deepEqual(extend({ color: 'red' }), { color: 'red' });
  });

  it("nested objects should get flattened", () => {
    assert.deepEqual(
      extend(
        {
          $nest: { '&:hover': { color: 'red' } }
        },
      ),
      {
        '&:hover': {
          color: 'red'
        }
      });
  });

  it("nested objects should get flattened and merge", () => {
    assert.deepEqual(
      extend(
        { color: 'grey' },
        { $nest: { '&:hover': { color: 'red' } } },
      ),
      {
        color: 'grey',
        '&:hover': {
          color: 'red'
        }
      });
  });

  it("nested objects should merge", () => {
    assert.deepEqual(
      extend(
        { color: 'grey' },
        { backgroundColor: 'grey' },
        { $nest: { '&:hover': { color: 'red' } } },
        { $nest: { '&:hover': { backgroundColor: 'red' } } },
      ),
      {
        color: 'grey',
        backgroundColor: 'grey',
        '&:hover': {
          color: 'red',
          backgroundColor: 'red'
        }
      });
  });

  it("extend should compose i.e. should be nestable", () => {
    assert.deepEqual(
      extend(
        extend({ $nest: { '&:hover': { color: 'red' } } }),
        { $nest: { '&:hover': { backgroundColor: 'red' } } },
      ),
      {
        '&:hover': {
          color: 'red',
          backgroundColor: 'red'
        }
      });
  });

  it("extend should compose i.e. should be truly nestable", () => {
    assert.deepEqual(
      extend(
        extend({ $nest: { '&:hover': { color: 'red' } } }),
        extend({ $nest: { '&:hover': { backgroundColor: 'red' } } }),
      ),
      {
        '&:hover': {
          color: 'red',
          backgroundColor: 'red'
        }
      });
  });

  it("different nested keys should not merge", () => {
    assert.deepEqual(
      extend(
        { $nest: { '&:hover': { color: 'red' } } },
        { $nest: { '&:hover': { backgroundColor: 'red' } } },
        { $nest: { '&:focus': { backgroundColor: 'red' } } },
        { $nest: { '&:hover': { fontSize: '14px' }, '&:focus': { fontFamily: 'arial' } } },
      ),
      {
        '&:hover': {
          fontSize: '14px',
          color: 'red',
          backgroundColor: 'red'
        },
        '&:focus': {
          fontFamily: 'arial',
          backgroundColor: 'red'
        }
      });
  });
});
