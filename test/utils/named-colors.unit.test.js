import {
  isNamedColor,
  getHexForNamed
} from '../../src/utils/named-colors';

const isNamed = [
  {
    color: 'yellow',
    expected: true
  },
  {
    color: 'green',
    expected: true
  },
  {
    color: 'pineapple',
    expected: false
  }
];

const hexes = [
  {
    color: 'yellow',
    expected: '#ffff00'
  },
  {
    color: 'green',
    expected: '#008000'
  },
  {
    color: 'black',
    expected: '#000000'
  },
  {
    color: 'papaya',
    expected: '#000'
  }
];

describe.each( isNamed )( 'Is this a named color?', ({ color, expected }) => {
  test( `returns ${expected}`, () => {
    expect( isNamedColor( color ) ).toBe( expected );
  });
});

describe.each( hexes )( 'Does it return the correct hexadecimal value?', ({ color, expected }) => {
  test( `returns ${expected}`, () => {
    expect( getHexForNamed( color ) ).toBe( expected );
  });
});
