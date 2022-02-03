/* global describe, test, expect */

import {
  hslToRgb,
} from '../../src/utils/conversions';

const rgb = [
  {
    color: 'hsl(120, 100%, 40%)',
    expectation: 'rgb(0, 204, 0)',
  },
  {
    color: 'hsl(0,0%,0%)',
    expectation: 'rgb(0, 0, 0)',
  }
];

describe.each( rgb )(
  '[hslToRgb] Does this correctly convert hsl() to rgb values?',
  ({ color, expectation }) => {
    test( `should return ${ expectation } for ${ color }`, () => {
      expect( hslToRgb( color ) ).toBe( expectation );
    });
  }
);
