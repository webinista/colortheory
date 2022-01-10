import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import CopyButton from './CopyButton.jsx';

class ColorSwatch extends React.Component {
  render() {
    const cssClasses = classNames('component-swatch', this.props.cssClass);

    return (
      <div className="component-swatch-holder">
        <svg className={cssClasses} pointerEvents="none">
          <rect x="0" y="0" width="100%" height="100%" fill={this.props.fill} />
        </svg>
        <CopyButton text={this.props.fill} />
      </div>
    );
  }
}

ColorSwatch.defaultProps = {
  fill: 'black',
  cssClass: null
};

ColorSwatch.propTypes = {
  fill: PropTypes.string.isRequired,
  cssClass: PropTypes.string
};

export default ColorSwatch;
