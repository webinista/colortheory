import { expect } from 'chai';

import {
  hslToRgb,
} from '../../src/utils/helpers';

const rgb = [
  {
    color: 'hsl(120, 100%, 40%)',
    expectation: 'rgb(0, 204, 0)',
  },
  {
    color: 'hsl(0,0%,0%)',
    expectation: 'rgb(0, 0, 0)',
  }
];

const hslToRgbTest = (vals) => {
  vals.forEach((v) => {
    it(`should return ${v.expectation} for ${v.color}`, () => {
      expect(hslToRgb(v.color)).to.equal(v.expectation);
    });
  });
};

describe('hslToRgb helper function', () => {
  hslToRgbTest(rgb);
});

