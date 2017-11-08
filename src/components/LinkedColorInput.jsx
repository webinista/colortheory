import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import TextInput from './TextInput';
import ColorInput from './ColorInput';

import {
  convertToHex
} from '../utils/conversions';


class LinkedColorInput extends React.Component {
  render() {
    const id = this.props.id || this.props.name;
    const cssClasses = classNames(
      this.props.cssClass,
      { 'input-color-linked--has-error': this.props.error }
    );

    return (
      <fieldset className={cssClasses}>
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
              value={convertToHex(this.props.value)} />
          </div>
          <p className="error-message" role="alert" hidden={!this.props.error}>{this.props.errorText}</p>
          <p className="input-notice">{this.props.helpText}</p>
        </div>
      </fieldset>);
  }
}

LinkedColorInput.defaultProps = {
  error: false,
  errorText: null,
  cssClass: null,
  id: null
};

LinkedColorInput.propTypes = {
  id: PropTypes.string,
  error: PropTypes.bool.isRequired,
  errorText: PropTypes.string,
  labelTextInput: PropTypes.string.isRequired,
  labelColorInput: PropTypes.string.isRequired,
  legendText: PropTypes.string.isRequired,
  helpText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  cssClass: PropTypes.string,
  onChangeHandler: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default LinkedColorInput;
