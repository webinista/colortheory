import { expect } from 'chai';

import {
  hexToRGB,
} from '../../src/utils/helpers';

const colors = [
  {
    color: '#ff0000',
    expectation: 'rgb(255, 0, 0)',
  },
  {
    color: '#00ff00',
    expectation: 'rgb(0, 255, 0)',
  },
  {
    color: '#0000ff',
    expectation: 'rgb(0, 0, 255)',
  },
  {
    color: '#cccccc',
    expectation: 'rgb(204, 204, 204)',
  }
];

const hexToRGBTest = (vals) => {
  vals.forEach((v) => {
    it(`should return ${v.expectation} for ${v.color}`, () => {
      expect(hexToRGB(v.color)).to.equal(v.expectation);
    });
  });
};

describe('hexToRGB helper function', () => {
  hexToRGBTest(colors);
});

