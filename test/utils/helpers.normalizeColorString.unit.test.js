import {
  normalizeColorString,
} from '../../src/utils/helpers';

const colorStrings = [
  {
    color: 'rgb(100 0 0)',
    expectation: 'rgb(100, 0, 0)',
  },
  {
    color: 'hsl(0 100% 50%)',
    expectation: 'hsl(0, 100%, 50%)',
  }
];

describe.each( colorStrings )( 'normalizeColorString helper function', ({ color, expectation }) => {
  test(`should return ${ expectation } for ${ color }`, () => {
    expect( normalizeColorString( color ) ).toBe( expectation );
  });
});
