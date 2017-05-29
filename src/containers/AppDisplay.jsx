import React from 'react';
import { connect } from 'react-redux'

import Controls from '../components/Controls';
import Palette from '../components/Palette';
import { OPTIONS_COLOR_SCHEME } from '../utils/constants';

import {
  updateInputColor,
  updateSchemeType,
  updatePalette
} from '../actions/';

class AppDisplay extends React.Component  {
  render() {
    console.log(this.props);
    return (
      <div>
        <Controls
          onColorChangeHandler={(domEvent) => {this.props.updateInputColor(domEvent.target.value)} }
          error="error message!"
          options={this.props.options}
          value={this.props.currentColor} />
        <Palette swatches={this.props.swatches} />
      </div>
    );
  }
};


const mapStateToProps = (state) => {
  return {
    options: OPTIONS_COLOR_SCHEME,
    currentColor: '#000000',
    swatches: ['#000000']
  };
};

const mapDispatchToProps = {
  updateInputColor
}



export default connect(mapStateToProps, mapDispatchToProps)(AppDisplay);
