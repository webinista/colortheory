/* global test, expect */

import {
  sortOptions
} from '../../src/utils/helpers';

const objs = [
  {
    label: 'Egret',
    value: 'e'
  },
  {
    label: 'Beaver',
    value: 'b',
  },
  {
    label: 'Aardvark',
    value: 'a',
  },
  {
    label: 'Ant',
    value: 'a',
  },
  {
    label: 'Cat',
    value: 'a',
  },
  {
    label: 'Dog',
    value: 'b',
  }
];

test( 'should return objects in the correct order, Aardvark to Egret', () => {
  const so = objs.sort( sortOptions );
  expect( so[0].label ).toBe( 'Aardvark' );
  expect( so[1].label ).toBe( 'Ant' );
  expect( so[2].label ).toBe( 'Beaver' );
  expect( so[3].label ).toBe( 'Cat' );
  expect( so[4].label ).toBe( 'Dog' );
  expect( so[5].label ).toBe( 'Egret' );
});

