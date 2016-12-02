/**
 * @module scroll helpers
 */
import * as types from '../types';

export const scroll: types.CSSProperties = {
  '-webkit-overflow-scrolling': 'touch',
  overflow: 'auto'
};

export const scrollX: types.CSSProperties = {
  '-webkit-overflow-scrolling': 'touch',
  overflowX: 'auto'
};

export const scrollY: types.CSSProperties = {
  '-webkit-overflow-scrolling': 'touch',
  overflowY: 'auto'
};
