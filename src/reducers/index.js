import {
  UPDATE_FORM_COLOR_VALUE,
  UPDATE_FORM_COLOR_SCHEME_VALUE,
  UPDATE_PALETTE
} from '../utils/constants';

import {
  OPTIONS_COLOR_SCHEME,
  OPTIONS_START_COLOR
} from '../utils/conf';

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
  switch (action.type) {
    case UPDATE_FORM_COLOR_VALUE:
      return {
        currentColor: action.value,
        swatches: [action.value]
      };

    case UPDATE_FORM_COLOR_SCHEME_VALUE:
      return {
        scheme: action.value
      };

    case UPDATE_PALETTE:
      return {
        swatches: []
      };

    default:
      return state;
  }
};

export default dataSource;

