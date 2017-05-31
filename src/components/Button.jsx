import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Button extends React.Component {
  render() {
    const cssClasses = classNames('input-button', this.props.cssClass);

    return (
      <button
        className={cssClasses}
        id={this.props.id}
        onClick={this.props.onClickHandler}
        onFocus={this.props.onFocusHandler}
        type={this.props.type}>
        {this.props.text}
      </button>
    );
  }
}

Button.defaultProps = {
  type: 'button',
  text: 'Change default text',
  cssClass: null,
  id: null,
  onClickHandler: null,
  onFocusHandler: null
};

Button.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  cssClass: PropTypes.string,
  onClickHandler: PropTypes.func,
  onFocusHandler: PropTypes.func,
};

export default Button;
