import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class ModalTrigger extends React.Component {
  constructor(props) {
    super(props);
    this.openModal = this.openModal.bind(this);
  }

  openModal(domEvent) {
    this.props.onClickHandler(domEvent);
  }

  render() {
    const cssClasses = classNames('button-stripped', 'button-modal-trigger', this.props.cssClass);

    return (
      <button
        className={cssClasses}
        data-show={this.props.opens}
        id={this.props.id}
        onClick={this.openModal}
        type="button">What does this mean?</button>
    );
  }
}

ModalTrigger.defaultProps = {
  id: null
};

ModalTrigger.propTypes = {
  cssClass: PropTypes.func.isRequired,
  onClickHandler: PropTypes.func.isRequired,
  id: PropTypes.string,
  opens: PropTypes.string.isRequired
};

export default ModalTrigger;
