import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Clipboard from 'clipboard';

class CopyButton extends React.Component {
  componentDidMount( ) {
    this.clipboard = new Clipboard( this.copybutton, {
      text: ( trigger ) => {
        return trigger.dataset.showText;
      }
    } );
  }

  componentWillUnmount( ) {
    this.clipboard.destroy( );
  }

  render( ) {
    const cssClasses = classNames( 'component-copy', this.props.cssClass );

    return (
      <button
        className={ cssClasses }
        type="button"
        ref={ ( copybutton ) => { this.copybutton = copybutton; } }
        data-show-text={ this.props.text }>
        <span>Copy</span>
        <b>{ this.props.text }</b>
      </button>
    );
  }
}

CopyButton.defaultProps = {
  cssClass: null,
  text: 'Change default text'
};

CopyButton.propTypes = {
  cssClass: PropTypes.string,
  text: PropTypes.string,
};

export default CopyButton;
