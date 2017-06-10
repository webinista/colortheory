import React from 'react';
import { expect } from 'chai';
import SkinDeep from 'skin-deep';

import ModalTrigger from '../../src/components/ModalTrigger';

const props = {
  onClickHandler: () => { return 'baywatch'; },
  id: 'openup',
  cssClass: 'modal-trigger',
  opens: 'glossary'
};

describe('<ModalTrigger />', () => {
  const tree = SkinDeep.shallowRender(<ModalTrigger {...props} />);
  const button = tree.subTree('button');

  it('should be a button', () => {
    expect(button.type).to.equal('button');
  });

  it('onClickHandler', () => {
    expect(props.onClickHandler()).to.equal('baywatch');
  });


  it(`its className should contain ${props.cssClass}`, () => {
    expect(button.props.className).to.include(props.cssClass);
  });

  it(`value of opens should be "${props.opens}"`, () => {
    expect(button.props['data-show']).to.equal(props.opens);
  });

  it(`its id should be "${props.id}"`, () => {
    expect(button.props.id).to.equal(props.id);
  });
});
