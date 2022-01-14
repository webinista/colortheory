import React from 'react';
import PropTypes from 'prop-types';

import ColorSwatch from './ColorSwatch';

class Palette extends React.Component {
  constructor(props) {
    super(props);
    this.makeSwatches = this.makeSwatches.bind(this);
  }

  makeSwatches(arrayOfColors) {
    return arrayOfColors.map((o, x) => {
      return <ColorSwatch key={x.toString()} fill={o} />;
    });
  }

  render() {
    const theSwatches = this.makeSwatches(this.props.swatches);
    return (
      <div className="component-palette">
        {theSwatches}
      </div>
    );
  }
}

Palette.defaultProps = {
  swatches: ['hsl(0,0,0)']
};

Palette.propTypes = {
  swatches: PropTypes.array
};

export default Palette;
