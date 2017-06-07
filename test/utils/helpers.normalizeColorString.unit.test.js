import { expect } from 'chai';

import {
  normalizeColorString,
} from '../../src/utils/helpers';

const colorStrings = [
  {
    color: 'rgb(100 0 0)',
    expectation: 'rgb(100, 0, 0)',
  },
  {
    color: 'hsl(0 100% 50%)',
    expectation: 'hsl(0, 100%, 50%)',
  }
];

const normalizeColorStringTest = (vals) => {
  vals.forEach((v) => {
    it(`should return ${v.expectation} for ${v.color}`, () => {
      expect(normalizeColorString(v.color)).to.equal(v.expectation);
    });
  });
};

describe('normalizeColorString helper function', () => {
  normalizeColorStringTest(colorStrings);
});

