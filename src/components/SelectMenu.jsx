import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { sortOptions } from '../utils/helpers';

class SelectMenu extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.makeOptions = this.makeOptions.bind(this);
  }

  handleChange(domEvent) {
    this.props.onChangeHandler(domEvent.target.value);
  }

  makeOptions(arrayOfObjects) {
    const ao = arrayOfObjects.sort(sortOptions);

    return ao.map((o, x) => {
      return <option value={o.value} key={x.toString()}>{o.label}</option>;
    });
  }

  render() {
    const cssClasses = classNames('input-select', this.props.cssClass);
    const id = this.props.id || this.props.name;

    const options = this.makeOptions(this.props.options);

    return (
      <div className={cssClasses}>
        <label htmlFor={id}>{this.props.labelText}</label>
        <select
          id={id}
          name={this.props.name}
          onChange={this.handleChange}>
          <option>Select</option>
          {options}
        </select>
      </div>
    );
  }
}

SelectMenu.defaultProps = {
  cssClass: null,
  id: null,
  onChangeHandler: null,
  options: [{ label: 'Empty Menu', value: '' }]
};

SelectMenu.propTypes = {
  id: PropTypes.string,
  labelText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  cssClass: PropTypes.string,
  onChangeHandler: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string
  })).isRequired
};

export default SelectMenu;
