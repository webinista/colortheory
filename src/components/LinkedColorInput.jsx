import React from 'react';
import PropTypes from 'prop-types';

import TextInput from './TextInput';
import ColorInput from './ColorInput';

import {
  OPTIONS_COLOR_INPUT_MESSAGE
} from '../utils/conf';


class LinkedColorInput extends React.Component {
  render() {
    const id = this.props.id || this.props.name;

    return (
      <fieldset className={this.props.cssClass}>
        <div>
          <legend>{this.props.legendText}</legend>
          <div className={`${this.props.cssClass}-group`}>
            <TextInput
              id={id}
              labelText={this.props.labelTextInput}
              name={this.props.name}
              onChangeHandler={this.props.onChangeHandler}
              value={this.props.value} />
            <ColorInput
              id={`${id}-vis`}
              labelText={this.props.labelColorInput}
              name={this.props.name}
              onChangeHandler={this.props.onChangeHandler}
              value={this.props.value} />
          </div>
          <span className="error" hidden={!this.props.error}>{this.props.error}</span>
          <span className="input-notice">{OPTIONS_COLOR_INPUT_MESSAGE}</span>
        </div>
      </fieldset>);
  }
}

LinkedColorInput.defaultProps = {
  error: '',
  cssClass: null,
  id: null,
};

LinkedColorInput.propTypes = {
  id: PropTypes.string,
  error: PropTypes.string.isRequired,
  labelTextInput: PropTypes.string.isRequired,
  labelColorInput: PropTypes.string.isRequired,
  legendText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  cssClass: PropTypes.string,
  onChangeHandler: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default LinkedColorInput;
