import { expect } from 'chai';

import {
  convertToHex,
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
  },
  {
    color: 'hsl(0, 0%, 50%)',
    expectation: '#808080'
  },
  {
    color: 'hsl(0, 100%, 50%)',
    expectation: '#ff0000'
  },
  {
    color: 'hsl(300, 100%, 50%)',
    expectation: '#ff00ff'
  },
  {
    color: 'hsl(60, 100%, 50%)',
    expectation: '#ffff00'
  }
];

const convertToHexTest = (vals) => {
  vals.forEach((v) => {
    it(`should return ${v.expectation} for ${v.color}`, () => {
      expect(convertToHex(v.color)).to.equal(v.expectation);
    });
  });
};

describe('convertToHex helper function', () => {
  convertToHexTest(colors);
});

