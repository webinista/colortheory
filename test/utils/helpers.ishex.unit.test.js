import { expect } from 'chai';

import {
  isRoughlyValid,
  isValidColor
} from '../../src/utils/helpers.js';

const roughlyValid = [
  {
    color: '#0c0',
    expectation: true,
  },
  {
    color: '#ff0000',
    expectation: true,
  },
  {
    color: '#ff0000cc',
    expectation: false,
  },
  {
    color: 'rgba(0,0,255,1)',
    expectation: false,
  },
  {
    color: '#aaf',
    expectation: true,
  },
  {
    color: 'hsla(0,10%,90%,.5)',
    expectation: false,
  }
];

const browserValid = [
  {
    color: '#0c0',
    expectation: true,
  },
  {
    color: '#ff0000',
    expectation: true,
  },
  {
    color: '#ff0000cc',
    expectation: false,
  },
  {
    color: 'rgba(0,0,255,1)',
    expectation: true,
  },
  {
    color: '#aafk',
    expectation: false,
  },
  {
    color: 'hsla(0,10%,90%,.5)',
    expectation: false,
  }
];


const isRoughlyValidTests = (vals) => {
  vals.forEach((v) => {
    it(`should return ${v.expectation} for ${v.color}`, () => {
      expect(isRoughlyValid(v.color)).to.equal(v.expectation);
    });
  });
};

describe('isRoughlyValid function helper', () => {
  isRoughlyValidTests(roughlyValid);
});

const isValidColorTests = (vals) => {
  vals.forEach((v) => {
    it(`should return ${v.expectation} for ${v.color}`, () => {
      expect(isValidColor(v.color)).to.equal(v.expectation);
    });
  });
};

describe('isValidColor function helper', () => {
  isValidColorTests(browserValid);
});

