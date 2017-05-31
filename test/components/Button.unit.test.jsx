import React from 'react';
import { expect } from 'chai';
import SkinDeep from 'skin-deep';

import Button from '../../src/components/Button';

const props = {
  type: 'reset',
  text: 'Submit',
  cssClass: 'button-class',
  id: 'the-button'
};

describe('<Button />', () => {
  const tree = SkinDeep.shallowRender(<Button {...props} />);

  it('should be a button', () => {
    expect(tree.type).to.equal('button');
  });

  it(`its className should contain ${props.cssClass}`, () => {
    expect(tree.props.className).to.include(props.cssClass);
  });

  it(`its text should read "${props.text}"`, () => {
    expect(tree.text()).to.equal(props.text);
  });

  it(`its type should be "${props.type}"`, () => {
    expect(tree.props.type).to.equal(props.type);
  });

  it(`its id should be "${props.id}"`, () => {
    expect(tree.props.id).to.equal(props.id);
  });
});
