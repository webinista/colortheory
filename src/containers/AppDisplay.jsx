import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Controls from '../components/Controls';
import Palette from '../components/Palette';
import { OPTIONS_COLOR_SCHEME } from '../utils/conf';

import {
  updateInputColor,
  updateSchemeType,
  updatePalette
} from '../actions/';

class AppDisplay extends React.Component {
  render() {
    return (
      <div>
        <Controls
          onColorChangeHandler={this.props.updateInputColor}
          onSelectChangeHandler={this.props.updateSchemeType}
          error="error message!"
          options={this.props.options}
          color={this.props.currentColor}
          scheme={this.props.scheme} />
        <Palette swatches={this.props.swatches} />
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
  updateInputColor: PropTypes.func.isRequired,
  updateSchemeType: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  currentColor: PropTypes.string.isRequired,
  scheme: PropTypes.string,
  swatches: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
  return {
    options: OPTIONS_COLOR_SCHEME,
    currentColor: state.currentColor,
    swatches: state.swatches
  };
};

const mapDispatchToProps = {
  updateInputColor,
  updateSchemeType,
  updatePalette
};

export default connect(mapStateToProps, mapDispatchToProps)(AppDisplay);
