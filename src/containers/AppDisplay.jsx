import React from 'react';
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
          onSelectChangeHandler={(domEvent) => {}}
          error="error message!"
          options={this.props.options}
          color={this.props.currentColor}
          scheme={this.props.scheme} />
        <Palette swatches={this.props.swatches} />
      </div>
    );
  }
}

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
