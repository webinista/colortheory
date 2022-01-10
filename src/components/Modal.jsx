import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import CloseButton from './CloseButton.jsx';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.close = this.close.bind(this);
  }

  close() {
    this.props.onClose();
  }

  render() {
    const cssClass = classNames('modal-block', this.props.cssClass);

    return (
      <div id={this.props.id} className={cssClass} hidden={!this.props.visible}>
        <div className="modal-block-content">
          <CloseButton
            cssClass="modal-button-close"
            onClickHandler={this.close} />
          <div className="modal-block-content-overflow">
            {this.props.content}
          </div>
        </div>
      </div>
    );
  }
}

Modal.defaultProps = {
  cssClass: null,
  id: null,
  visible: false
};

Modal.propTypes = {
  content: PropTypes.node.isRequired,
  cssClass: PropTypes.string,
  id: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  visible: PropTypes.bool
};

export default Modal;
