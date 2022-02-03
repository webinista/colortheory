import {
  hex2Dec,
} from '../../src/utils/helpers';

const hexNum = [
  {
    number: 'ff',
    expectation: 255
  },
  {
    number: '00',
    expectation: 0
  },
  {
    number: '7f',
    expectation: 127
  },
];

describe.each( hexNum )(
  `[hex2Dec] Does this correctly convert hexadecimal to decimal values?`,
  ({ number, expectation }) => {
    test( `should return ${ expectation } for ${ number }`, () => {
      expect( hex2Dec( number ) ).toBe( expectation );
    });
  }
);
