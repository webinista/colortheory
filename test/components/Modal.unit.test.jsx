import React from 'react';
import { expect } from 'chai';
import SkinDeep from 'skin-deep';

import Modal from '../../src/components/Modal';

const props = {
  content: (<div><h1>Hi</h1><p>Bye</p></div>),
  cssClass: 'modal',
  id: 'modal',
  onClose: () => { return 'baywatch'; },
  visible: true
};

describe('<Modal />', () => {
  const tree = SkinDeep.shallowRender(<Modal {...props} />);

  it('should have an h1 and a text of Hi', () => {
    expect(tree.subTree('h1')).to.equal(true);
    expect(tree.subTree('h1').text()).to.equal('Hi');
  });

  it('onClose should be defined and return baywatch', () => {
    expect(props.onClose()).to.equal('baywatch');
  });

  it(`its className should contain ${props.cssClass}`, () => {
    expect(tree.className).to.include(props.cssClass);
  });

  it(`its id should be "${props.id}"`, () => {
    expect(tree.id).to.equal(props.id);
  });

  it('it should be visible', () => {
    expect(tree.visible).to.equal(props.visible);
  });
});
