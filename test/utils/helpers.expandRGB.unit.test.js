import { expect } from 'chai';
import { JSDOM } from 'jsdom';

import {
  expandRGB,
} from '../../src/utils/helpers';

const rgb = [
  {
    color: '#0c0',
    expectation: '#00cc00',
  },
  {
    color: '#ff0000',
    expectation: '#ff0000',
  }
]

const expandRGBTest = (vals) => {
  vals.forEach((v) => {
    it(`should return ${v.expectation} for ${v.color}`, () => {
      expect(expandRGB(v.color)).to.equal(v.expectation);
    });
  });
}

describe('expandRGB helper function', () => {
  expandRGBTest(rgb);
});

