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
          nested: { '&:hover': { color: 'red' } }
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
        { nested: { '&:hover': { color: 'red' } } },
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
        { nested: { '&:hover': { color: 'red' } } },
        { nested: { '&:hover': { backgroundColor: 'red' } } },
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
        extend({ nested: { '&:hover': { color: 'red' } } }),
        { nested: { '&:hover': { backgroundColor: 'red' } } },
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
        extend({ nested: { '&:hover': { color: 'red' } } }),
        extend({ nested: { '&:hover': { backgroundColor: 'red' } } }),
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
        { nested: { '&:hover': { color: 'red' } } },
        { nested: { '&:hover': { backgroundColor: 'red' } } },
        { nested: { '&:focus': { backgroundColor: 'red' } } },
        { nested: { '&:hover': { fontSize: '14px' }, '&:focus': { fontFamily: 'arial' } } },
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
