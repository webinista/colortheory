import React from 'react';
import PropTypes from 'prop-types';

class TextInput extends React.Component {
  constructor( props ) {
    super( props );
    this.handleChange = this.handleChange.bind( this );
  }

  handleChange( domEvent ) {
    this.props.onChangeHandler( domEvent.target.value );
  }

  render( ) {
    const id = this.props.id || this.props.name;
    return (
      <div className={ this.props.cssClass }>
        <label htmlFor={ id }>{ this.props.labelText }</label>
        <input
          type="text"
          id={ id }
          name={ this.props.name }
          onChange={ this.handleChange }
          onFocus={ this.props.onFocusHandler }
          onBlur={ this.props.onBlurHandler }
          value={ this.props.value } />
      </div>
    );
  }
}

TextInput.defaultProps = {
  cssClass: null,
  onChangeHandler: null,
  onBlurHandler: null,
  onFocusHandler: null,
  labelText: 'Needs a label'
};

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string,
  name: PropTypes.string.isRequired,
  cssClass: PropTypes.string,
  onChangeHandler: PropTypes.func,
  onFocusHandler: PropTypes.func,
  onBlurHandler: PropTypes.func,
  value: PropTypes.string.isRequired
};

export default TextInput;
