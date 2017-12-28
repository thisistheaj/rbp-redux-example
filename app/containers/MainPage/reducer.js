/*
 *
 * MainPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({ foo: 'bar' });

function mainPageReducer(state = initialState, action) {
  console.log('in main page reducer');
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default mainPageReducer;
