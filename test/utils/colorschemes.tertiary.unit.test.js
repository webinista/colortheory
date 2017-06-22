import { expect } from 'chai';

import {
  getTriad,
} from '../../src/utils/colorschemes';

const colors = [
  {
    color: '#ff0000',
    expectation: [
      'hsl(0, 100%, 50%)',
      'hsl(120, 100%, 50%)',
      'hsl(240, 100%, 50%)'
    ]
  },
  {
    color: '#eaff00',
    expectation: [
      'hsl(65, 100%, 50%)',
      'hsl(185, 100%, 50%)',
      'hsl(305, 100%, 50%)'
    ]
  }
];

const getTriadTest = (vals) => {
  vals.forEach((v) => {
    it(`should return ${v.expectation} for ${v.color}`, () => {
      expect(getTriad(v.color)[0]).to.equal(v.expectation[0]);
      expect(getTriad(v.color)[1]).to.equal(v.expectation[1]);
      expect(getTriad(v.color)[2]).to.equal(v.expectation[2]);
    });
  });
};

describe('getTriad helper function', () => {
  getTriadTest(colors);
});
