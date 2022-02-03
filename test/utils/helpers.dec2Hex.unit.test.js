/* global describe, test, expect */

import {
  dec2Hex,
} from '../../src/utils/helpers';

const decimalNum = [
  {
    number: 255,
    expectation: 'ff'
  },
  {
    number: 0,
    expectation: '00'
  },
  {
    number: 138,
    expectation: '8a'
  },
];

describe.each( decimalNum )(
  '[dec2Hex] Does this correctly convert decimal to hex values?',
  ({ number, expectation }) => {
    test( `should return ${ expectation } for ${ number }`, () => {
      expect( dec2Hex( number ) ).toBe( expectation );
    });
  }
);
