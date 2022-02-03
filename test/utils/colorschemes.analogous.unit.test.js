/* global describe, test, expect */

import {
  getAnalogous,
} from '../../src/utils/colorschemes';

const colors = [
  {
    color: '#ff0000',
    expectation: [
      'hsl(0, 100%, 50%)',
      'hsl(30, 100%, 50%)',
      'hsl(60, 100%, 50%)',
      'hsl(90, 100%, 50%)'
    ]
  },
  {
    color: '#eaff00',
    expectation: [
      'hsl(65, 100%, 50%)',
      'hsl(95, 100%, 50%)',
      'hsl(125, 100%, 50%)',
      'hsl(155, 100%, 50%)'
    ]
  }
];

describe.each( colors )(
  '[getAnalogous] Does this correctly return an analogous scheme?',
  ({ color, expectation }) => {
    test( `should return ${ expectation } for ${ color }`, () => {
      expect( getAnalogous( color ) ).toStrictEqual( expectation );
    });
  }
);
