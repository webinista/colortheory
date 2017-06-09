import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Controls from '../components/Controls';
import Palette from '../components/Palette';
import Modal from '../components/Modal';

import { OPTIONS_COLOR_SCHEME } from '../utils/conf';

import {
  closeModal,
  openModal,
  updateInputColor,
  updateSchemeType,
  updatePalette
} from '../actions/';

class AppDisplay extends React.Component {
  render() {
    const content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dignissim, nisi sed commodo ornare, risus nisi viverra lorem, et sollicitudin dui mauris ut ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultricies sapien nec velit blandit, vel luctus justo fermentum. Vestibulum hendrerit blandit orci, vitae rhoncus turpis cursus a. Etiam hendrerit nisl vitae nibh tincidunt rutrum. Phasellus placerat magna vel felis consequat pellentesque. Etiam cursus nunc at lectus cursus, ut blandit purus placerat.\n\nVivamus lacinia lobortis dapibus. Sed quam urna, tempus a metus quis, interdum commodo mauris. Vestibulum in maximus est. Donec mi enim, gravida vel leo id, consectetur bibendum erat. Sed congue lacinia metus at condimentum. Duis et mauris quis lacus pretium blandit vel ac turpis. Proin vitae tellus leo. Cras tempus ligula risus, quis auctor nisi ultricies ac. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam vel nunc ac massa pulvinar molestie et ac dui. Morbi et mi vulputate, sagittis quam sed, congue enim. Curabitur et urna risus. Morbi congue, mauris a euismod luctus, eros orci fermentum massa, vitae congue neque leo non mauris. Curabitur lacinia turpis vitae aliquet tempus. Suspendisse tempus in mi vel imperdiet.';

    return (
      <div>
        <div>
          <Controls
            onColorChangeHandler={this.props.updateInputColor}
            onModalTriggerClickHandler={this.props.openModal}
            onSelectChangeHandler={this.props.updateSchemeType}
            onSubmitHandler={this.props.updatePalette}
            error="error message!"
            options={this.props.options}
            color={this.props.currentColor}
            scheme={this.props.scheme} />
          <Palette swatches={this.props.swatches} />
        </div>
        <Modal
          id="glossary"
          onClose={this.props.closeModal}
          content={content}
          visible={this.props.modal.isVisible} />
      </div>
    );
  }
}

/*
 * Current eslint config throw errors if we don't define PropTypes, but these
 * are passed in as part of Redux. NBD.
 */

AppDisplay.defaultProps = {
  scheme: ''
};

AppDisplay.propTypes = {
  closeModal: PropTypes.func.isRequired,
  modal: PropTypes.shape({
    isVisible: PropTypes.bool
  }).isRequired,
  openModal: PropTypes.func.isRequired,
  updateInputColor: PropTypes.func.isRequired,
  updatePalette: PropTypes.func.isRequired,
  updateSchemeType: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  currentColor: PropTypes.string.isRequired,
  scheme: PropTypes.string,
  swatches: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
  return {
    currentColor: state.currentColor,
    modal: state.modal,
    options: OPTIONS_COLOR_SCHEME,
    swatches: state.swatches
  };
};

const mapDispatchToProps = {
  closeModal,
  openModal,
  updateInputColor,
  updateSchemeType,
  updatePalette
};

export default connect(mapStateToProps, mapDispatchToProps)(AppDisplay);
