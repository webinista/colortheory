import { expect } from 'chai';

import {
  getSquare,
} from '../../src/utils/colorschemes';

const colors = [
  {
    color: '#ff0000',
    expectation: [
      'hsl(0, 100%, 50%)',
      'hsl(90, 100%, 50%)',
      'hsl(180, 100%, 50%)',
      'hsl(270, 100%, 50%)'
    ]
  },
  {
    color: '#eaff00',
    expectation: [
      'hsl(65, 100%, 50%)',
      'hsl(155, 100%, 50%)',
      'hsl(245, 100%, 50%)',
      'hsl(335, 100%, 50%)'
    ]
  }
];

const getSquareTest = (vals) => {
  vals.forEach((v) => {
    it(`should return ${v.expectation} for ${v.color}`, () => {
      expect(getSquare(v.color)[0]).to.equal(v.expectation[0]);
      expect(getSquare(v.color)[1]).to.equal(v.expectation[1]);
      expect(getSquare(v.color)[2]).to.equal(v.expectation[2]);
      expect(getSquare(v.color)[3]).to.equal(v.expectation[3]);
    });
  });
};

describe('getSquare helper function', () => {
  getSquareTest(colors);
});
