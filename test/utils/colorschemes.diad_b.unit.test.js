import { expect } from 'chai';

import {
  getDiad,
} from '../../src/utils/colorschemes';

const colors = [
  {
    color: '#ff0000',
    expectation: [
      'hsl(0, 100%, 50%)',
      'hsl(300, 100%, 50%)'
    ]
  },
  {
    color: '#eaff00',
    expectation: [
      'hsl(65, 100%, 50%)',
      'hsl(5, 100%, 50%)'
    ]
  }
];

const getDiadTest = (vals) => {
  vals.forEach((v) => {
    it(`should return ${v.expectation} for ${v.color}`, () => {
      const scheme = getDiad(v.color, false);

      expect(scheme[0]).to.equal(v.expectation[0]);
      expect(scheme[1]).to.equal(v.expectation[1]);
    });
  });
};

describe('getDiad helper function, version B', () => {
  getDiadTest(colors);
});
