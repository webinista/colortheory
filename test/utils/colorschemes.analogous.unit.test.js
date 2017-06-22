import { expect } from 'chai';

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
      expect(getAnalogous(v.color)[0]).to.equal(v.expectation[0]);
      expect(getAnalogous(v.color)[1]).to.equal(v.expectation[1]);
      expect(getAnalogous(v.color)[2]).to.equal(v.expectation[2]);
    });
  });
};

describe('getAnalogous helper function', () => {
  getAnalogousTest(colors);
});
