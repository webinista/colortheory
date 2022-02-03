/* global describe, test, expect */

import {
  getSquare,
} from '../../src/utils/colorschemes';

const colors = [
  {
    color: '#ff0000',
    expectation: [
      'hsl(0, 100%, 50%)',
      'hsl(90, 100%, 50%)',
      'hsl(180, 100%, 50%)',
      'hsl(270, 100%, 50%)'
    ]
  },
  {
    color: '#eaff00',
    expectation: [
      'hsl(65, 100%, 50%)',
      'hsl(155, 100%, 50%)',
      'hsl(245, 100%, 50%)',
      'hsl(335, 100%, 50%)'
    ]
  }
];

describe.each( colors )(
  '[getSquare] Does this correctly return an square color scheme?',
  ({ color, expectation }) => {
    test( `should return ${ expectation } for ${ color }`, () => {
      expect( getSquare( color ) ).toStrictEqual( expectation );
    });
  }
);
