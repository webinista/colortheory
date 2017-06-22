/*
* This test is slightly bogus because it relies on whatever
* JSDOM supports.
*/

import { expect } from 'chai';
import { JSDOM } from 'jsdom';

import {
  isColorTypeSupported
} from '../../src/utils/helpers';

describe('isColorTypeSupported helper function', () => {
  const window = (new JSDOM('...')).window;
  global.document = window.document;

  it('should support the color type', () => {
    expect(isColorTypeSupported()).to.equal(true);
  });
});

