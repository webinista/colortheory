import React from 'react';
import { expect } from 'chai';
import SkinDeep from 'skin-deep';
import { JSDOM } from 'jsdom';

import Controls from '../../src/components/Controls';

const propsGood = {
  color: '#ff0000',
  errorMsg: 'Help text',
  onSubmitHandler: () => { return true; },
  onColorChangeHandler: () => { return true; },
  onSelectChangeHandler: () => { return true; },
  onModalTriggerClickHandler: () => { return true; },
  options: [{
    label: 'Option A',
    value: 'option_a'
  },
  {
    label: 'Option B',
    value: 'option_b'
  }]
};

describe('<Controls />', () => {
  const window = (new JSDOM('...')).window;
  global.document = window.document;

  const tree = SkinDeep.shallowRender(<Controls {...propsGood} />);
  const colorInput = tree.dive(['LinkedColorInput', 'ColorInput']).subTree('input');
  const textInput = tree.dive(['LinkedColorInput', 'TextInput']).subTree('input');
  const selectControl = tree.dive(['SchemeMenu', 'select']);

  it('expect a <form> element', () => {
    expect(tree.type).to.equal('form');
  });

  it(`error message should match "${propsGood.errorMsg}"`, () => {
    expect(tree.dive(['LinkedColorInput']).subTree('.input-notice').text()).to.equal(propsGood.errorMsg);
  });

  // Tests type of element.
  it('for there to be a color input ...', () => {
    expect(colorInput.props.type).to.equal('color');
  });

  // Tests whether there's a color input, and that its value is set.
  it(`...and for its value to be "${propsGood.color}"`, () => {
    expect(colorInput.props.type).to.equal('color');
  });

  // Tests whether there's a text input, and that its value is set.
  it('for there to be a text input ...', () => {
    expect(textInput.props.type).to.equal('text');
  });

  it(`...and for its value to be "${propsGood.color}"`, () => {
    expect(textInput.props.type).to.equal('text');
  });

  it('For `onSubmitHandler` to be a function', () => {
    return expect(propsGood.onSubmitHandler()).to.be.true;
  });

  it('For `onColorChangeHandler` to be a function', () => {
    return expect(propsGood.onColorChangeHandler()).to.be.true;
  });

  it('For `onSelectChangeHandler` to be a function', () => {
    return expect(propsGood.onSelectChangeHandler()).to.be.true;
  });

  it('For the select menu to have two <SelectOption /> children', () => {
    expect(selectControl.everySubTree('SelectOption').length).to.equal(2);
  });
});
