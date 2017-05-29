import {
  OPTIONS_COLOR_SCHEME,
  UPDATE_FORM_COLOR_VALUE,
  UPDATE_FORM_COLOR_SCHEME_VALUE,
  UPDATE_PALETTE
} from  '../utils/constants';

const initialState = {
  currentColor: '#ff0000',
  error: '',
  options: OPTIONS_COLOR_SCHEME,
  swatches: ['#0c0']
}

const dataSource = (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_FORM_COLOR_VALUE:
      console.log(action.value);
      return state;

    case UPDATE_FORM_COLOR_SCHEME_VALUE:
      console.log(action.value);
      return state;

    case UPDATE_PALETTE:
      console.log(action.value);
      return state;

    default:
      return state;
  }
};

export default dataSource;

