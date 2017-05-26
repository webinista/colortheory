import React from 'react';

class ColorSwatch extends React.Component {
  render() {
    return (
      <svg className="swatch">
        <rect x="0" y="0" width="20vw" height="20vw" fill={this.props.fill}/>
      </svg>
    );    
  }
}

export default ColorSwatch;
