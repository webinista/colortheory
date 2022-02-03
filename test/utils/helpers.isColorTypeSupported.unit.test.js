/**
 * @jest-environment jsdom
 */
 
import {
  isColorTypeSupported
} from '../../src/utils/helpers';

test('isColorTypeSupported helper function', () => {
  expect( isColorTypeSupported() ).toBe( true );
});

