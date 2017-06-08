import {
  UPDATE_FORM_COLOR_VALUE,
  UPDATE_FORM_COLOR_SCHEME_VALUE,
  UPDATE_PALETTE,
  OPEN_MODAL,
  CLOSE_MODAL
} from '../utils/constants';

export function updateInputColor(value) {
  return {
    type: UPDATE_FORM_COLOR_VALUE,
    value
  };
}

export function updateSchemeType(value) {
  return {
    type: UPDATE_FORM_COLOR_SCHEME_VALUE,
    value
  };
}

export function updatePalette(form) {
  return {
    type: UPDATE_PALETTE,
    form
  };
}

export function openModal() {
  return {
    type: OPEN_MODAL
  };
}

export function closeModal() {
  return {
    type: CLOSE_MODAL
  };
}
