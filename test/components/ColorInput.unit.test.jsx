import React from 'react';
import { expect } from 'chai';
import SkinDeep from 'skin-deep';

import ColorInput from '../../src/components/ColorInput';

const props = {
  id: 'color-vis',
  labelText: 'Label text',
  name: 'color-vis',
  onChangeHandler: () => true,
  value: 'red'
};

describe('<ColorInput />', () => {
  const tree = SkinDeep.shallowRender(<ColorInput {...props} />).subTree('input');

  // Tests type of element.
  it('it should be an input field.', () => {
    expect(tree.type).to.equal('input');
  });

  // Tests input.type value
  it('it should be an input[type=color] field.', () => {
    expect(tree.props.type).to.equal('color');
  });

  it(`id should be "${props.id}"`, () => {
    expect(tree.props.id).to.equal(props.id);
  });

  it(`name should be "${props.name}"`, () => {
    expect(tree.props.name).to.equal(props.name);
  });

  it('onChangeHandler should be a function', () => {
    expect(tree.props.onChange).to.be.a('function');
  });

  it(`value === ${props.value}`, () => {
    expect(tree.props.value).to.equal(props.value);
  });
});
