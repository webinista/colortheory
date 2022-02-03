/* global describe, test, expect */

import {
  getRandom,
} from '../../src/utils/colorschemes';

describe( 'getRandom helper function', () => {
  const numColors = 5;

  test( `should return a ${ numColors } item array`, () => {
    expect( getRandom( '#ff0000', numColors ) ).toHaveLength( numColors );
  });

  test( 'first color should be hsl(0, 100%, 50%)', () => {
    expect( getRandom( '#ff0000' )[0] ).toBe( 'hsl(0, 100%, 50%)' );
  });
});
