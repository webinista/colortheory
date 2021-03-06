import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class CloseButton extends React.Component {
  render() {
    const cssClasses = classNames('button-icon', 'button-icon-close', this.props.cssClass);

    return (
      <button
        className={cssClasses}
        id={this.props.id}
        onClick={this.props.onClickHandler}
        type="button">
        <svg focusable="false" pointerEvents="none" width="83" height="83" viewBox="0 0 83 83">
          <title>{this.props.assistiveText}</title>
          <g id="icongroup" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <circle fill={this.props.colorBackground} cx="41.5" cy="41.5" r="41.5" />
            <polygon fill={this.props.colorForeground} points="28.5 64.6 42.3 50.8 56.1 64.6 64.6 56.1 50.8 42.3 64.6 28.5 56.1 20 42.3 33.8 28.5 20 20 28.5 33.8 42.3 20 56.1" />
          </g>
        </svg>
      </button>
    );
  }
}

CloseButton.defaultProps = {
  colorBackground: '#3e464c',
  colorForeground: '#ffffff',
  type: 'button',
  assistiveText: 'Close',
  cssClass: null,
  id: null,
  onClickHandler: null
};

CloseButton.propTypes = {
  colorBackground: PropTypes.string,
  colorForeground: PropTypes.string,
  id: PropTypes.string,
  assistiveText: PropTypes.string.isRequired,
  cssClass: PropTypes.string,
  onClickHandler: PropTypes.func
};

export default CloseButton;
