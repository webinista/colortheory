import {
  expandRgb,
} from '../../src/utils/helpers';

const rgb = [
  {
    color: '#0c0',
    expectation: '#00cc00',
  },
  {
    color: '#ff0000',
    expectation: '#ff0000',
  },
  {
    color: '#ff0',
    expectation: '#ffff00',
  } 
];

describe.each( rgb )(
  `[hex2Dec] Does this correctly expand #rgb to #rgba?`,
  ({ color, expectation }) => {
    test( `should return ${ expectation } for ${ color }`, () => {
      expect( expandRgb( color ) ).toBe( expectation );
    });
  }
);

