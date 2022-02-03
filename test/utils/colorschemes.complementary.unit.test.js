/* global describe, test, expect */

import {
  getComplement,
} from '../../src/utils/colorschemes';

const colors = [
  {
    color: '#ff0000',
    expectation: 'hsl(180, 100%, 50%)'
  },
  {
    color: '#eaff00',
    expectation: 'hsl(245, 100%, 50%)'
  },
  {
    color: '#8a8c73',
    expectation: 'hsl(245, 10%, 50%)'
  },
  {
    color: 'rgb(138, 140, 115)',
    expectation: 'hsl(245, 10%, 50%)'
  },
  {
    color: 'rgb(45, 37, 39)',
    expectation: 'hsl(165, 10%, 16%)'
  },
  {
    color: 'hsl(0, 100%, 50%)',
    expectation: 'hsl(180, 100%, 50%)'
  },
  {
    color: 'hsl(285, 100%, 59%)',
    expectation: 'hsl(105, 100%, 59%)'
  }
];

const getComplementTest = (vals) => {
  vals.forEach((v) => {
    it(`should return ${v.expectation} for ${v.color}`, () => {
      expect(getComplement(v.color)[1]).to.equal(v.expectation);
    });
  });
};

describe('getComplement helper function', () => {
  getComplementTest(colors);
});
