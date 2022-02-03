/* global describe, test, expect */

import {
  hexToRGB,
} from '../../src/utils/conversions';

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

describe.each( colors )(
  '[hexToRGB] Does this correctly convert hex to rgb() values?',
  ({ color, expectation }) => {
    test( `should return ${ expectation } for ${ color }`, () => {
      expect( hexToRGB( color ) ).toBe( expectation );
    });
  }
);
