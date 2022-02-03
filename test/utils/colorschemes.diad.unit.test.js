/* global describe, test, expect */

import {
  getDiad,
} from '../../src/utils/colorschemes';

const colors = [
  {
    color: '#ff0000',
    expectation: [
      'hsl(0, 100%, 50%)',
      'hsl(60, 100%, 50%)'
    ]
  },
  {
    color: '#eaff00',
    expectation: [
      'hsl(65, 100%, 50%)',
      'hsl(125, 100%, 50%)'
    ]
  }
];

describe.each( colors )(
  '[getDiad] Does this correctly return a diad?',
  ({ color, expectation }) => {
    test( `should return ${ expectation } for ${ color }`, () => {
      expect( getDiad( color ) ).toStrictEqual( expectation );
    });
  }
);
