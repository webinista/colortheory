import { expect } from 'chai';

import {
  getSplitComplement,
} from '../../src/utils/colorschemes';

const colors = [
  {
    color: '#ff0000',
    expectation: [
      'hsl(0, 100%, 50%)',
      'hsl(210, 100%, 50%)',
      'hsl(150, 100%, 50%)'
    ]
  },
  {
    color: '#eaff00',
    expectation: [
      'hsl(65, 100%, 50%)',
      'hsl(275, 100%, 50%)',
      'hsl(215, 100%, 50%)'
    ]
  }
];

const getSplitComplementTest = (vals) => {
  vals.forEach((v) => {
    it(`should return ${v.expectation} for ${v.color}`, () => {
      expect(getSplitComplement(v.color)[0]).to.equal(v.expectation[0]);
      expect(getSplitComplement(v.color)[1]).to.equal(v.expectation[1]);
      expect(getSplitComplement(v.color)[2]).to.equal(v.expectation[2]);
    });
  });
};

describe('getSplitComplement helper function', () => {
  getSplitComplementTest(colors);
});
