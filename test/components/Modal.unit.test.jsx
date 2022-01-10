import React from 'react';
import { expect } from 'chai';
import SkinDeep from 'skin-deep';

import Modal from '../../src/components/Modal.jsx';

const props = {
  content: (<div><h1>Hi</h1><p>Bye</p></div>),
  cssClass: 'modal',
  id: 'modal',
  onClose: () => { return 'baywatch'; },
  visible: true
};

describe('<Modal />', () => {
  const tree = SkinDeep.shallowRender(<Modal {...props} />);

  it('should have an h1, with text of "Hi"', () => {
    expect(tree.subTree('h1').text()).to.equal('Hi');
  });

  it('onClose should be defined and return baywatch', () => {
    expect(props.onClose()).to.equal('baywatch');
  });

  it(`its className should contain ${props.cssClass}`, () => {
    expect(tree.props.className).to.include(props.cssClass);
  });

  it(`its id should be "${props.id}"`, () => {
    expect(tree.props.id).to.equal(props.id);
  });

  it('it should be visible', () => {
    expect(tree.props.hidden).to.equal(!props.visible);
  });
});
