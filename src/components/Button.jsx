import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const Button = (props) => {
  const { cssClasses } = classNames('input-button-wrap', props.cssClass);

  return (
    <div className={cssClasses}>
      <button
        className="input-button"
        id={props.id}
        onClick={props.onClickHandler}
        onFocus={props.onFocusHandler}
        type={props.type ? props.type : 'button'}>
        {props.text}
      </button>
    </div>
  );
};

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
  type: PropTypes.string,
  text: PropTypes.string,
  cssClass: PropTypes.string,
  onClickHandler: PropTypes.func,
  onFocusHandler: PropTypes.func,
};

export default Button;
