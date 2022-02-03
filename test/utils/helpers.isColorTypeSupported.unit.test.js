/**
 * @jest-environment jsdom
 */
/* global test, expect */

import {
  isColorTypeSupported
} from '../../src/utils/helpers';

test( 'isColorTypeSupported helper function', () => {
  expect( isColorTypeSupported() ).toBe( true );
});

