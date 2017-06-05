import set from 'lodash/fp/set';

import {
  UPDATE_FORM_COLOR_VALUE,
  UPDATE_FORM_COLOR_SCHEME_VALUE,
  UPDATE_PALETTE
} from '../utils/constants';

import {
  OPTIONS_COLOR_SCHEME,
  OPTIONS_START_COLOR
} from '../utils/conf';

import { expandRGB } from '../utils/helpers';

/*
 * currentColor and the first item in swatches need to have the
 * value for UI consistency's sake.
 */

const initialState = {
  currentColor: OPTIONS_START_COLOR,
  options: OPTIONS_COLOR_SCHEME,
  swatches: [OPTIONS_START_COLOR],
  scheme: ''
};

const dataSource = (state = initialState, action) => {
  let newState;

  switch (action.type) {
    case UPDATE_FORM_COLOR_VALUE:
      newState = set('currentColor', action.value, state);
      newState = set('swatches', [action.value], newState);
      return newState;

    case UPDATE_FORM_COLOR_SCHEME_VALUE:
      return set('scheme', action.value, state);

    case UPDATE_PALETTE:
      return set('swatches', action.value, state);

    default:
      return state;
  }
};

export default dataSource;

