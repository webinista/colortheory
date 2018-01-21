import React from 'react';
import PropTypes from 'prop-types';

class SelectOption extends React.Component {
  render() {
    return (
      <option value={this.props.value}>{this.props.label}</option>
    );
  }
}

SelectOption.defaultProps = {
  value: '',
  label: ''
};

SelectOption.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default SelectOption;
