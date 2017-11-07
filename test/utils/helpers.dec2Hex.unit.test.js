import { expect } from 'chai';

import {
  dec2Hex,
} from '../../src/utils/helpers';

const decimalNum = [
  {
    number: 255,
    expectation: 'ff'
  },
  {
    number: 0,
    expectation: '00'
  },
  {
    number: 138,
    expectation: '8a'
  },
];

const testDec2Hex = (vals) => {
  vals.forEach((v) => {
    it(`should return ${v.expectation} for ${v.number}`, () => {
      expect(dec2Hex(v.number)).to.equal(v.expectation);
    });
  });
};

describe('dec2Hex helper function', () => {
  testDec2Hex(decimalNum);
});

