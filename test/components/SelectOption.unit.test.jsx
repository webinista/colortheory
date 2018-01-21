import React from 'react';
import { expect } from 'chai';
import SkinDeep from 'skin-deep';

import SelectOption from '../../src/components/SelectOption';

const props = {
  label: 'Color 1',
  value: 'color_1'
};


describe('<SelectOption />', () => {
  const tree = SkinDeep.shallowRender(<SelectOption {...props} />);
  const opt = tree.subTree('option');

  it('<SelectOption /> should have a single <option> child.', () => {
    expect(opt.type).to.equal('option');
  });

  it(`Option label should be ${props.label}`, () => {
    expect(opt.props.children).to.equal(props.label);
  });

  it(`Option value should be ${props.value}`, () => {
    expect(opt.props.value).to.equal(props.value);
  });
});
