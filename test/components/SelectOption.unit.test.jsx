import React from 'react';
import { expect } from 'chai';
import SkinDeep from 'skin-deep';

import SelectOption from '../../src/components/SelectOption';

const props = [{
  option: 'Color 1',
  value: 'color_1',
  selected: false,
},
{
  option: 'Color 2',
  value: 'color_2',
  selected: true,
}];


describe('<SelectOption />', () => {
  const tree = SkinDeep.shallowRender(<SelectOption {...props} />);
  const options = tree.everySubTree('option');

  // Duplicates a test from Controls, but I'm okay with that.
  it(`should have ${props.length} options`, () => {
    expect(options.length).to.equal('2');
  });
});
