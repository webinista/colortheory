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

describe.each( isNamed )(
  'Does this return a triad color scheme',
  ({ color, expectation }) => {
    test( `should return ${ expectation } for ${ color }`, ({}) => {
      const scheme = getTriad( color );
      expect( scheme[0] )toBe( expectation[0] );
      expect( scheme[1] )toBe( expectation[1] );
      expect( scheme[2] )toBe( expectation[2] );
    });
  }
);


