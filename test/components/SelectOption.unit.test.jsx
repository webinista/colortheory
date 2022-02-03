/* global describe, test, expect */
import React from 'react';
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'


import SelectOption from '../../src/components/SelectOption.jsx';

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
