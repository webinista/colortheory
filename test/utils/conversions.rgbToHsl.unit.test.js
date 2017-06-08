import { expect } from 'chai';

import {
  rgbToHsl,
} from '../../src/utils/conversions';

const rgb = [
  {
    color: 'rgb(0, 204, 0)',
    expectation: 'hsl(120, 100%, 40%)',
  },
  {
    color: 'rgb(0, 0, 0)',
    expectation: 'hsl(0, 0%, 0%)',
  },
  {
    color: 'rgb(153, 0, 255)',
    expectation: 'hsl(276, 100%, 50%)'
  }
];

const rgbToHslTest = (vals) => {
  vals.forEach((v) => {
    it(`should return ${v.expectation} for ${v.color}`, () => {
      expect(rgbToHsl(v.color)).to.equal(v.expectation);
    });
  });
};

describe('rgbToHsl helper function', () => {
  rgbToHslTest(rgb);
});

