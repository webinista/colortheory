import React from 'react';
import PropTypes from 'prop-types';

const Button = ( props ) => {
  const {
    id,
    text,
    onClickHandler,
    onFocusHandler
  } = props;

  return (
    <div className="input-button-wrap">
      <button
        className="input-button"
        id={id}
        onClick={onClickHandler}
        onFocus={onFocusHandler}
        type="submit">
        { text }
      </button>
    </div>
  );
};

Button.defaultProps = {
  text: 'Change default text',
  id: null,
  onClickHandler: null,
  onFocusHandler: null
};

Button.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
  onClickHandler: PropTypes.func,
  onFocusHandler: PropTypes.func,
};

export default Button;
