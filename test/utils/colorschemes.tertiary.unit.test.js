/* global describe, test, expect */

import {
  getTriad,
} from '../../src/utils/colorschemes';

const colors = [
  {
    color: '#ff0000',
    expectation: [
      'hsl(0, 100%, 50%)',
      'hsl(120, 100%, 50%)',
      'hsl(240, 100%, 50%)'
    ]
  },
  {
    color: '#eaff00',
    expectation: [
      'hsl(65, 100%, 50%)',
      'hsl(185, 100%, 50%)',
      'hsl(305, 100%, 50%)'
    ]
  }
];

describe.each( colors )(
  '[getTriad] Does this return a triad color scheme?',
  ({ color, expectation }) => {
    test( `should return ${ expectation } for ${ color }`, () => {
      expect( getTriad( color ) ).toStrictEqual( expectation );
    });
  }
);

