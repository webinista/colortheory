import React from 'react';
import PropTypes from 'prop-types';

import CopyButton from './CopyButton';

const ColorSwatch = ({ fill }) => {
  return (
    <div className="component-swatch-holder">
      <svg className="component-swatch" focusable="false" pointerEvents="none">
        <circle cx="50%" cy="50%" r="25%" fill={fill} />
      </svg>
      <CopyButton text={fill} />
    </div>
  );
};

ColorSwatch.defaultProps = {
  fill: 'black'
};

ColorSwatch.propTypes = {
  fill: PropTypes.string,
};

export default ColorSwatch;
