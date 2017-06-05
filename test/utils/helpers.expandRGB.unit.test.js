import { expect } from 'chai';

import {
  expandRgb,
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
];

const expandRgbTest = (vals) => {
  vals.forEach((v) => {
    it(`should return ${v.expectation} for ${v.color}`, () => {
      expect(expandRgb(v.color)).to.equal(v.expectation);
    });
  });
};

describe('expandRgb helper function', () => {
  expandRgbTest(rgb);
});

