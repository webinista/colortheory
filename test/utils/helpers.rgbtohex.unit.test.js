import { expect } from 'chai';

import {
  rgbToHex,
} from '../../src/utils/helpers';

const colors = [
  {
    color: 'rgb(255, 0, 0)',
    expectation: '#ff0000'
  },
  {
    color: 'rgb(0, 255, 0)',
    expectation: '#00ff00'
  },
  {
    color: 'rgb(0, 0, 255)',
    expectation: '#0000ff'
  },
  {
    color: 'rgb(204, 204, 204)',
    expectation: '#cccccc'
  }
];

const rgbToHexTest = (vals) => {
  vals.forEach((v) => {
    it(`should return ${v.expectation} for ${v.color}`, () => {
      expect(rgbToHex(v.color)).to.equal(v.expectation);
    });
  });
};

describe('rgbToHex helper function', () => {
  rgbToHexTest(colors);
});

