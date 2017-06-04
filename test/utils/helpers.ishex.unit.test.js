import { expect } from 'chai';
import { JSDOM } from 'jsdom';

import {
  isRoughlyValid,
  isValidColor,
  isValidInputColor
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

const isValid = [
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
    color: '#aafk',
    expectation: false,
  },
  {
    color: 'hsla(0,10%,90%,.5)',
    expectation: false,
  },
  {
    color: 'rgb(0,255,255)',
    expectation: true,
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

const isValidInputColorTests = (vals) => {
  const window = (new JSDOM(`...`)).window;
  global.document = window.document;
 
  vals.forEach((v) => {
    it(`should return ${v.expectation} for ${v.color}`, () => {
      expect(isValidInputColor(v.color)).to.equal(v.expectation);
    });
  });
};

describe('isValidInputColor function helper', () => {
  isValidInputColorTests(browserValid);
});

const isValidColorTests = (vals) => {
  const window = (new JSDOM(`...`)).window;
  global.document = window.document;
  
  vals.forEach((v) => {
    it(`should return ${v.expectation} for ${v.color}`, () => {
      expect(isValidColor(v.color)).to.equal(v.expectation);
    });
  });
};

describe('isValidColor function helper', () => {
  isValidColorTests(isValid);
});

