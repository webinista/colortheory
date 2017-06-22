import React from 'react';
import { expect } from 'chai';
import SkinDeep from 'skin-deep';

import ColorSwatch from '../../src/components/ColorSwatch';

const props = {
  fill: '#0c0',
  cssClass: 'color-swatch'
};

describe('<ColorSwatch />', () => {
  const tree = SkinDeep.shallowRender(<ColorSwatch {...props} />);
  const swatch = tree.subTree('svg');

  it(`its className should contain ${props.cssClass}`, () => {
    expect(swatch.props.className).to.include(props.cssClass);
  });

  it(`it should have a fill of "${props.fill}"`, () => {
    expect(swatch.subTree('rect').props.fill).to.equal(props.fill);
  });
});
