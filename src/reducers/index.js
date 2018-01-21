import set from 'lodash/fp/set';

import {
  CLOSE_MODAL,
  OPEN_MODAL,
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
  getAnalogous,
  getComplement,
  getDiad,
  getRandom,
  getSplitComplement,
  getSquare,
  getTetrad,
  getTriad
} from '../utils/colorschemes';

/*
 * currentColor and the first item in swatches need to have the
 * value for UI consistency's sake.
 */
// TODO: Refactor this so that we're not repeating values in
// currentColor and swatches
const initialState = {
  currentColor: OPTIONS_START_COLOR,
  modal: {
    isVisible: false
  },
  options: OPTIONS_COLOR_SCHEME,
  swatches: [OPTIONS_START_COLOR],
  scheme: ''
};

const makePalette = (startColor, type) => {
  let palette;
  switch (type) {
    case 'analogous':
      palette = getAnalogous(startColor);
      break;

    case 'analogous_b':
      palette = getAnalogous(startColor, false);
      break;

    case 'complementary':
      palette = getComplement(startColor);
      break;

    case 'diad':
      palette = getDiad(startColor);
      break;

    case 'diad_b':
      palette = getDiad(startColor, false);
      break;

    case 'random':
      palette = getRandom(startColor);
      break;

    case 'splitcomp':
      palette = getSplitComplement(startColor);
      break;

    case 'square':
      palette = getSquare(startColor);
      break;

    case 'tetrad':
      palette = getTetrad(startColor);
      break;

    case 'triad':
      palette = getTriad(startColor);
      break;

    default:
      palette = ['#ff0000'];
  }
  return palette;
};

const dataSource = (state = initialState, action) => {
  let newState;
  let colors;

  switch (action.type) {
    case CLOSE_MODAL:
      newState = set('modal.isVisible', false, state);
      return newState;

    case OPEN_MODAL:
      return set('modal.isVisible', true, state);

    case UPDATE_FORM_COLOR_VALUE:
      newState = set('currentColor', action.value, state);
      newState = set('swatches', [normalizeColorString(action.value)], newState);
      return newState;

    case UPDATE_FORM_COLOR_SCHEME_VALUE:
      colors = makePalette(state.currentColor, action.value);
      newState = set('swatches', colors, state);
      newState = set('scheme', action.value, newState);
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

