import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class ColorInput extends React.Component {
  render() {

    const id = this.props.id || this.props.name;

    return (
      <div className={this.props.cssClass}>
        <label htmlFor={id}>{this.props.labelText}</label>
        <input
          type="color"
          id={id}
          name={this.props.name}
          onChange={this.props.onChangeHandler}
          onFocus={this.props.onFocusHandler}
          onBlur={this.props.onBlurHandler}
          defaultValue={this.props.value} />
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
  onFocusHandler: null,
  value: '#000000'
};

ColorInput.propTypes = {
  id: PropTypes.string,
  labelText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  cssClass: PropTypes.string,
  onChangeHandler: PropTypes.func,
  onFocusHandler: PropTypes.func,
  onBlurHandler: PropTypes.func,
  value: PropTypes.string.isRequired
};

export default ColorInput;
