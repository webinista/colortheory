import { expect } from 'chai';

import {
  hex2Dec,
} from '../../src/utils/helpers';

const hexNum = [
  {
    number: 'ff',
    expectation: 255
  },
  {
    number: '00',
    expectation: 0
  },
  {
    number: '7f',
    expectation: 127
  },
];

const testHex2Dec = (vals) => {
  vals.forEach((v) => {
    it(`should return ${v.expectation} for ${v.number}`, () => {
      expect(hex2Dec(v.number)).to.equal(v.expectation);
    });
  });
};

describe('hex2Dec helper function', () => {
  testHex2Dec(hexNum);
});

