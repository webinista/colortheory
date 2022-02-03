/* global describe, test, expect */

import {
  isNamedColor,
  getHexForNamed
} from '../../src/utils/named-colors';

const isNamed = [
  {
    color: 'yellow',
    expectation: true
  },
  {
    color: 'green',
    expectation: true
  },
  {
    color: 'pineapple',
    expectation: false
  }
];

const hexes = [
  {
    color: 'yellow',
    expectation: '#ffff00'
  },
  {
    color: 'green',
    expectation: '#008000'
  },
  {
    color: 'black',
    expectation: '#000000'
  },
  {
    color: 'papaya',
    expectation: '#000'
  }
];

describe.each( isNamed )(
  'Is this a named color?',
  ({ color, expectation }) => {
    test( `returns ${ expectation }`, () => {
      expect( isNamedColor( color ) ).toBe( expectation );
    });
  }
);

describe.each( hexes )(
  'Does it return the correct hexadecimal value?',
  ({ color, expectation }) => {
    test( `returns ${ expectation }`, () => {
      expect( getHexForNamed( color ) ).toBe( expectation );
    });
  }
);
