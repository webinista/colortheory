import React from 'react';
import { expect } from 'chai';
import SkinDeep from 'skin-deep';

import TextInput from '../../src/components/TextInput.jsx';

const props = {
  cssClass: 'hoopla',
  id: 'color-vis',
  labelText: 'Label text',
  name: 'color-vis',
  onChangeHandler: () => true,
  value: '#ff0000'
};

describe('<TextInput />', () => {
  const tree = SkinDeep.shallowRender(<TextInput {...props} />);
  const inp = tree.subTree('input');

  it('expect a div element', () => {
    expect(tree.type).to.equal('div');
  });

  it(`class name should match ${props.cssClass}`, () => {
    expect(tree.props.className).to.equal(props.cssClass);
  });


  it(`label text should match "${props.labelText}"`, () => {
    expect(tree.subTree('label').text()).to.equal(props.labelText);
  });

  // Tests type of element.
  it('it should be an input field.', () => {
    expect(inp.type).to.equal('input');
  });

  // Tests input.type value
  it('it should be an input[type=text] field.', () => {
    expect(inp.props.type).to.equal('text');
  });

  it(`id should be "${props.id}"`, () => {
    expect(inp.props.id).to.equal(props.id);
  });

  it(`name should be "${props.name}"`, () => {
    expect(inp.props.name).to.equal(props.name);
  });

  it('onChangeHandler should be a function', () => {
    expect(inp.props.onChange).to.be.a('function');
  });

  it(`value === ${props.value}`, () => {
    expect(inp.props.value).to.equal(props.value);
  });
});
