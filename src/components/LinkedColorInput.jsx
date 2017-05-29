import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import TextInput from './TextInput';
import ColorInput from './ColorInput';

class LinkedColorInput extends React.Component {
  render() {
    const id = this.props.id || this.props.name;

    return (
      <fieldset className={this.props.cssClass}>
        <div>
          <legend>Enter or pick a color:</legend>
          <span className="input-notice">Use any valid CSS color value.</span>
          <div className={`${this.props.cssClass}-group`}>
            <TextInput
              cssClass={`${this.props.cssClass}-text`}
              id={id}
              name="color"
              labelText={this.props.labelText}
              onChangeHandler={this.props.onChangeHandler}
              onFocusHandler={this.props.onFocusHandler}
              onBlurHandler={this.props.onBlurHandler} />
            <ColorInput
              cssClass={`${this.props.cssClass}-picker`}
              id={`${id}-vis`}
              name="color"
              labelText="Color picker:"
              onChangeHandler={this.props.onChangeHandler}
              onFocusHandler={this.props.onFocusHandler}
              onBlurHandler={this.props.onBlurHandler}/>
          </div>
          <span className="error" hidden={!this.props.error}>{this.props.error}</span>
        </div>
      </fieldset>);
  }
}

LinkedColorInput.defaultProps = {
  error: '',
  cssClass: null,
  id: null,
  onChangeHandler: () => {},
  onBlurHandler: null,
  onErrorHandler: null,
  onFocusHandler: null,
  value: '#000000'
};  

LinkedColorInput.propTypes = {
  id: PropTypes.string,
  error: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  cssClass: PropTypes.string,
  onChangeHandler: PropTypes.func.isRequired,
  onFocusHandler: PropTypes.func,
  onBlurHandler: PropTypes.func,
  onErrorHandler: PropTypes.func,
  value: PropTypes.string.isRequired
};

export default LinkedColorInput;
