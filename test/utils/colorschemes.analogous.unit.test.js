/* global describe, test, expect */

import {
  getAnalogous,
} from '../../src/utils/colorschemes';

const colors = [
  {
    color: '#ff0000',
    expectation: [
      'hsl(0, 100%, 50%)',
      'hsl(30, 100%, 50%)',
      'hsl(60, 100%, 50%)',
      'hsl(90, 100%, 50%)'
    ]
  },
  {
    color: '#eaff00',
    expectation: [
      'hsl(65, 100%, 50%)',
      'hsl(95, 100%, 50%)',
      'hsl(125, 100%, 50%)',
      'hsl(155, 100%, 50%)'
    ]
  }
];

const getAnalogousTest = (vals) => {
  vals.forEach((v) => {
    it(`should return ${v.expectation} for ${v.color}`, () => {
      const scheme = getAnalogous(v.color);

      expect(scheme[0]).to.equal(v.expectation[0]);
      expect(scheme[1]).to.equal(v.expectation[1]);
      expect(scheme[2]).to.equal(v.expectation[2]);
      expect(scheme[3]).to.equal(v.expectation[3]);
    });
  });
};

describe('getAnalogous helper function', () => {
  getAnalogousTest(colors);
});
