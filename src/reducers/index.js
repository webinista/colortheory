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

import {
  normalizeColorString
} from '../utils/helpers';

import {
  getComplement,
  getSquare,
  getTriad
} from '../utils/colorschemes';

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

const makePalette = (startColor, type) => {
  let palette;
  switch (type) {
    case 'complementary':
      palette = getComplement(startColor);
      break;

    case 'square':
      palette = getSquare(startColor);
      break;

    case 'triad':
      palette = getTriad(startColor);
      break;

    default:
      palette = ['#000000'];
  }

  return palette;
};

const dataSource = (state = initialState, action) => {
  let newState;
  let colors;

  switch (action.type) {
    case UPDATE_FORM_COLOR_VALUE:
      newState = set('currentColor', action.value, state);
      newState = set('swatches', [normalizeColorString(action.value)], newState);
      return newState;

    case UPDATE_FORM_COLOR_SCHEME_VALUE:
      colors = makePalette(state.currentColor, action.value);
      newState = set('swatches', colors, state);
      return newState;

    case UPDATE_PALETTE:
      colors = makePalette(state.currentColor, action.form.scheme.value);
      newState = set('swatches', colors, state);
      return newState;

    default:
      return state;
  }
};

export default dataSource;

