import React from 'react';
import PropTypes from 'prop-types';

import SelectMenu from '../components/SelectMenu';
import ErrorableTextInput from '../components/ErrorableTextInput';
import Button from '../components/Button';

class Controls extends React.Component {
  render() {
    return (
      <form
        className="component-controls"
        id="controls"
        method="post"
        onSubmit={this.props.onSubmitHandler}>
        <ErrorableTextInput name="color" labelText="Enter a color: " />
        <SelectMenu name="scheme" labelText="Choose a scheme type: " options={this.props.options} />
        <Button type="submit" text="Generate scheme" />
      </form>
    );
  }
}

Controls.defaultProps = {
  onSubmitHandler: (domEvent) => { 
    domEvent.preventDefault() 
  }
};

Controls.propTypes = {
  onSubmitHandler: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string
  })).isRequired,
};

export default Controls;
