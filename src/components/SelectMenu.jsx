import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class SelectMenu extends React.Component {
  constructor(props) {
    super(props);
    this.makeOptions = this.makeOptions.bind(this);
  }

  makeOptions(arrayOfObjects) {
    return arrayOfObjects.map((o, x) => {
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
          onChange={this.props.onChangeHandler}
          onFocus={this.props.onFocusHandler}
          onBlur={this.props.onBlurHandler}>
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
  onBlurHandler: null,
  onFocusHandler: null,
  options: [{ label: 'Empty Menu', value: '' }]
};

SelectMenu.propTypes = {
  id: PropTypes.string,
  labelText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  cssClass: PropTypes.string,
  onChangeHandler: PropTypes.func,
  onBlurHandler: PropTypes.func,
  onFocusHandler: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string
  })).isRequired
};

export default SelectMenu;
