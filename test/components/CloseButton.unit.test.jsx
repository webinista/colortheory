import React from 'react';
import { expect } from 'chai';
import SkinDeep from 'skin-deep';

import CloseButton from '../../src/components/CloseButton.jsx';

const props = {
  colorBackground: '#000',
  colorForeground: '#f00',
  type: 'button',
  assistiveText: 'Close',
  cssClass: 'close_btn_class',
  id: 'close_id',
  onClickHandler: () => { return true; }
};

describe('<CloseButton />', () => {
  const tree = SkinDeep.shallowRender(<CloseButton {...props} />);
  const button = tree.subTree('button');

  it('should be a button', () => {
    expect(button.type).to.equal('button');
  });

  it(`its className should contain ${props.cssClass}`, () => {
    expect(tree.props.className).to.include(props.cssClass);
  });

  it(`its assistive text should be "${props.assistiveText}"`, () => {
    expect(button.subTree('title').text()).to.equal(props.assistiveText);
  });

  it(`its type should be "${props.type}"`, () => {
    expect(button.props.type).to.equal(props.type);
  });

  it(`its id should be "${props.id}"`, () => {
    expect(button.props.id).to.equal(props.id);
  });
});
