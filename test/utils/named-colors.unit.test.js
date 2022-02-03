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


const isItANamedColor = ( colors ) => {
  colors.forEach(( c ) => {
    expect( isNamedColor( c.color ) ).toBe( c.expectation );
  });
};

const doesItGetTheCorrectHexVal = ( colors ) => {
  hexes.forEach(( c ) => {
    expect( getHexForNamed( c.color ) ).toBe( c.expectation );
  });
};

test( 'Is this a named color?', () => {
  isItANamedColor( isNamed ); 
});

test( 'Does it return the correct hexadecimal value?', () => {
  doesItGetTheCorrectHexVal( isNamed ); 
});
