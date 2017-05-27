import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    return (
      <div className="input-button">
        <button
          className={this.props.cssClass}
          id={this.props.id}
          onClick={this.props.onClickHandler}
          onFocus={this.props.onFocusHandler}
          type={this.props.type}>
          {this.props.text}
        </button>
      </div>
    );
  }
}

Button.defaultProps = {
  type: 'button',
  text: 'Submit',
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
