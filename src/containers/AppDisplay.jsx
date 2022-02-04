import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Controls from '../components/Controls';
import Palette from '../components/Palette';
import Glossary from '../components/Glossary';
import Modal from '../components/Modal';

import {
  OPTIONS_COLOR_SCHEME,
  OPTIONS_COLOR_INPUT_MESSAGE,
} from '../utils/conf';

import {
  closeModal,
  openModal,
  updateInputColor,
  updateSchemeType,
  updatePalette
} from '../actions';

class AppDisplay extends React.Component {
  render( ) {
    const glossary = <Glossary terms={ OPTIONS_COLOR_SCHEME } />;

    return (
      <div>
        <div>
          <Controls
            onColorChangeHandler={ this.props.updateInputColor }
            onModalTriggerClickHandler={ this.props.openModal }
            onSelectChangeHandler={ this.props.updateSchemeType }
            onSubmitHandler={ this.props.updatePalette }
            errorMsg={ OPTIONS_COLOR_INPUT_MESSAGE }
            options={ this.props.options }
            color={ this.props.currentColor }
            scheme={ this.props.scheme } />
          <Palette swatches={ this.props.swatches } />
        </div>
        <Modal
          id="modal"
          onClose={ this.props.closeModal }
          content={ glossary }
          visible={ this.props.modal.isVisible } />
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
  modal: PropTypes.shape( {
    isVisible: PropTypes.bool
  } ).isRequired,
  openModal: PropTypes.func.isRequired,
  updateInputColor: PropTypes.func.isRequired,
  updatePalette: PropTypes.func.isRequired,
  updateSchemeType: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  currentColor: PropTypes.string.isRequired,
  scheme: PropTypes.string,
  swatches: PropTypes.array.isRequired
};

const mapStateToProps = ( state ) => {
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

export default connect( mapStateToProps, mapDispatchToProps )( AppDisplay );
