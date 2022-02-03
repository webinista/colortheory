/* global describe, test, expect */

import {
  getSplitComplement,
} from '../../src/utils/colorschemes';

const colors = [
  {
    color: '#ff0000',
    expectation: [
      'hsl(0, 100%, 50%)',
      'hsl(210, 100%, 50%)',
      'hsl(150, 100%, 50%)'
    ]
  },
  {
    color: '#eaff00',
    expectation: [
      'hsl(65, 100%, 50%)',
      'hsl(275, 100%, 50%)',
      'hsl(215, 100%, 50%)'
    ]
  }
];

describe.each( colors )(
  '[getSplitComplement] Does this return a split complementary scheme?',
  ({ color, expectation }) => {
    test( `should return ${ expectation } for ${ color }`, () => {
      expect( getSplitComplement( color ) ).toStrictEqual( expectation );
    });
  }
);
