import { expect } from 'chai';

import {
  rgbToHex,
} from '../../src/utils/conversions';

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
  },
  {
    color: 'rgb(100%, 100%, 100%)',
    expectation: '#ffffff'
  },
  {
    color: 'rgb(0%, 0%, 0%)',
    expectation: '#000000'
  },
  {
    color: 'rgb(90%, 50%, 50%)',
    expectation: '#e68080'
  },
  {
    color: 'rgb(0%, 80%, 0%)',
    expectation: '#00cc00'
  },
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

