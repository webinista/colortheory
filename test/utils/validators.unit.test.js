/**
 * @jest-environment jsdom
 */
/* global describe, test, expect */

import {
  isRoughlyValid,
  // isValidInputColor,
  isValidColor,
} from '../../src/utils/validators';

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

/* const browserValid = [
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
]; */

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

describe.each( roughlyValid )(
  '[isRoughlyValid] Does this match an accepted syntax?',
  ({ color, expectation }) => {
    test( `should return ${ expectation } for ${ color }`, () => {
      expect( isRoughlyValid( color ) ).toBe( expectation );
    });
  }
);

/* describe.each( browserValid )(
  '[isValidInputColor] Does the color input type accept this value?',
  ({ color, expectation }) => {
    test( `should return ${expectation} for ${color}`, () => {
      expect( isValidInputColor( color ) ).toBe( expectation );
    });
  }
); */

describe.each( isValid )(
  '[isValidColor] Is this a valid color?',
  ({ color, expectation }) => {
    test( `should return ${ expectation } for ${ color }`, () => {
      expect( isValidColor( color ) ).toBe( expectation );
    });
  }
);
