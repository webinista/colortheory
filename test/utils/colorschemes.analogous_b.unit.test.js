/* global describe, test, expect */

import {
  getAnalogous,
} from '../../src/utils/colorschemes';

const colors = [
  {
    color: '#ff0000',
    expectation: [
      'hsl(0, 100%, 50%)',
      'hsl(330, 100%, 50%)',
      'hsl(300, 100%, 50%)',
      'hsl(270, 100%, 50%)',
    ]
  },
  {
    color: '#eaff00',
    expectation: [
      'hsl(65, 100%, 50%)',
      'hsl(35, 100%, 50%)',
      'hsl(5, 100%, 50%)',
      'hsl(335, 100%, 50%)'
    ]
  }
];

describe.each( colors )(
  '[getAnalogous] Does this correctly return an analogous color scheme?',
  ({ color, expectation }) => {
    test( `should return ${ expectation } for ${ color }`, () => {
      expect( getAnalogous( color, false ) ).toStrictEqual( expectation );
    });
  }
);
