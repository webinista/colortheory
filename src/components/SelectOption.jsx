import React from 'react';
import PropTypes from 'prop-types';

class SelectOption extends React.PureComponent {
  render( ) {
    return (
      <option value={this.props.value }>{this.props.label }</option>
    );
  }
}

SelectOption.defaultProps = {
  value: '',
  label: ''
};

SelectOption.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string
};

export default SelectOption;
