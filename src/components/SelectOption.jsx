import React from 'react';
import PropTypes from 'prop-types';

const SelectOption = ({ value, label }) => {
  return <option value={value}>{ label }</option>;
};

SelectOption.defaultProps = {
  value: '',
  label: ''
};

SelectOption.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string
};

export default SelectOption;
