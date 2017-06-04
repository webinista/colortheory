import React from 'react';
import PropTypes from 'prop-types';

import Button from '../components/Button';
import SelectMenu from '../components/SelectMenu';
import LinkedColorInput from '../components/LinkedColorInput';

import { isValidColor } from '../utils/helpers';

class Controls extends React.Component {
  render() {
    return (
      <form
        className="component-controls"
        id="controls"
        method="post"
        name="controls"
        onSubmit={this.props.onSubmitHandler}>
        <LinkedColorInput
          cssClass="input-color-linked"
          error={!isValidColor(this.props.color)}
          labelColorInput="Or use the color picker"
          labelTextInput="Enter a CSS color value"
          legendText="Pick a starting color: "
          name="color"
          onChangeHandler={this.props.onColorChangeHandler}
          value={this.props.color} />
        <SelectMenu
          labelText="Choose a scheme type: "
          name="scheme"
          onChangeHandler={this.props.onSelectChangeHandler}
          options={this.props.options}
          value={this.props.scheme} />
          <Button type="submit" text="Generate scheme" />
      </form>
    );
  }
}

Controls.defaultProps = {
  onSubmitHandler: (domEvent) => {
    domEvent.preventDefault();
  },
  onSelectChangeHandler: (domEvent) => {
    domEvent.preventDefault();
  },
  scheme: ''
};

Controls.propTypes = {
  color: PropTypes.string.isRequired,
  onSubmitHandler: PropTypes.func,
  onColorChangeHandler: PropTypes.func.isRequired,
  onSelectChangeHandler: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string
  })).isRequired,
  scheme: PropTypes.string
};

export default Controls;
