import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import TextInput from './TextInput';

class ErrorableTextInput extends React.Component {
  render() {
    const id = this.props.id || this.props.name;

    const cssClasses = classNames(
      this.props.cssClass,
      {
        'input-text-errorable': true,
        'input-text-errorable--haserror': this.props.error
      });

    return (
      <div className={cssClasses}>
        <TextInput
          id={id}
          name="color"
          labelText={this.props.labelText}
          onChange={this.props.onChangeHandler}
          onFocus={this.props.onFocusHandler}
          onBlur={this.props.onBlurHandler}
          onError={this.props.onErrorHandler} />
        <span className="error" hidden={!this.props.error}>{this.props.error}</span>
      </div>);
  }
}

ErrorableTextInput.defaultProps = {
  cssClass: null,
  onChangeHandler: null,
  onBlurHandler: null,
  onErrorHandler: null,
  onFocusHandler: null,
  error: '',
  id: null
};

ErrorableTextInput.propTypes = {
  id: PropTypes.string,
  error: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  cssClass: PropTypes.string,
  onChangeHandler: PropTypes.func,
  onFocusHandler: PropTypes.func,
  onBlurHandler: PropTypes.func,
  onErrorHandler: PropTypes.func
};

export default ErrorableTextInput;
