import React from 'react';
import PropTypes from 'prop-types';

import Button from '../components/Button';
import SchemeMenu from '../components/SchemeMenu';
import LinkedColorInput from '../components/LinkedColorInput';

import { isValidColor } from '../utils/validators';

import {
  OPTIONS_COLOR_INPUT_MESSAGE,
  OPTIONS_COLOR_INPUT_ERROR_MESSAGE
} from '../utils/conf';

class Controls extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(domEvent) {
    domEvent.preventDefault();
    this.props.onSubmitHandler(domEvent.target);
  }

  render() {
    return (
      <form
        className="component-controls"
        id="controls"
        method="post"
        name="controls"
        onSubmit={this.handleSubmit}>
        <LinkedColorInput
          cssClass="input-color-linked"
          error={!isValidColor(this.props.color)}
          errorText={OPTIONS_COLOR_INPUT_ERROR_MESSAGE}
          labelColorInput="Or use the color picker"
          labelTextInput="Enter a CSS color value"
          legendText="Pick a starting color: "
          helpText={this.props.errorMsg}
          name="color"
          onChangeHandler={this.props.onColorChangeHandler}
          value={this.props.color} />
        <SchemeMenu
          labelText="Choose a scheme type: "
          name="scheme"
          onChangeHandler={this.props.onSelectChangeHandler}
          onModalClickHandler={this.props.onModalTriggerClickHandler}
          options={this.props.options}
          defaultValue={this.props.value} />
        <Button type="submit" text="Generate scheme" />
      </form>
    );
  }
}

Controls.defaultProps = {
  errorMsg: OPTIONS_COLOR_INPUT_MESSAGE,
  onSubmitHandler: (domEvent) => {
    domEvent.preventDefault();
  },
  onSelectChangeHandler: (domEvent) => {
    domEvent.preventDefault();
  },
  value: ''
};

Controls.propTypes = {
  color: PropTypes.string.isRequired,
  errorMsg: PropTypes.string,
  onSubmitHandler: PropTypes.func,
  onColorChangeHandler: PropTypes.func.isRequired,
  onSelectChangeHandler: PropTypes.func.isRequired,
  onModalTriggerClickHandler: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string
  })).isRequired,
  value: PropTypes.string
};

export default Controls;
