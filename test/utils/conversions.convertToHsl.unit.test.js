import { expect } from 'chai';

import {
  convertToHsl,
} from '../../src/utils/conversions';

const colors = [
  {
    color: '#808080',
    expectation: 'hsl(0, 0%, 50%)'
  },
  {
    color: '#ff0000',
    expectation: 'hsl(0, 100%, 50%)'
  },
  {
    color: '#ff00ff',
    expectation: 'hsl(300, 100%, 50%)'
  },
  {
    color: '#ffff00',
    expectation: 'hsl(60, 100%, 50%)'
  },
  {
    color: 'rgb(255, 0, 255)',
    expectation: 'hsl(300, 100%, 50%)'
  },
  {
    color: 'rgb(128,128,128)',
    expectation: 'hsl(0, 0%, 50%)'
  },

];

const convertToHslTest = (vals) => {
  vals.forEach((v) => {
    it(`should return ${v.expectation} for ${v.color}`, () => {
      expect(convertToHsl(v.color)).to.equal(v.expectation);
    });
  });
};

describe('convertToHsl helper function', () => {
  convertToHslTest(colors);
});

