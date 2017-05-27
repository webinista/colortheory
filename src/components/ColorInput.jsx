import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class ColorInput extends React.Component {
  render() {
    const cssClasses = classNames('input', this.props.cssClass);
    const id = this.props.id || this.props.name;

    return (
      <div className={cssClasses}>
        <label htmlFor={id}>{this.props.labelText}</label>
        <input
          type="color"
          id={id}
          name={this.props.name}
          onChange={this.props.onChangeHandler}
          onFocus={this.props.onFocusHandler}
          onBlur={this.props.onBlurHandler} />
      </div>
    );
  }
}

ColorInput.defaultProps = {
  cssClass: null,
  labelText: null,
  id: null,
  onChangeHandler: null,
  onBlurHandler: null,
  onFocusHandler: null
};

ColorInput.propTypes = {
  id: PropTypes.string,
  labelText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  cssClass: PropTypes.string,
  onChangeHandler: PropTypes.func,
  onFocusHandler: PropTypes.func,
  onBlurHandler: PropTypes.func
};

export default ColorInput;
