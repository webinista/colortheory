import {
  convertToHsl,
} from '../../src/utils/conversions';

const colors = [
  {
    color: '#808080',
    expectation: 'hsl(0, 0%, 50%)'
  },
  {
    color: '#ff0000',
    expectation: 'hsl(0, 100%, 50%)'
  },
  {
    color: '#ff00ff',
    expectation: 'hsl(300, 100%, 50%)'
  },
  {
    color: '#ffff00',
    expectation: 'hsl(60, 100%, 50%)'
  },
  {
    color: 'rgb(255, 0, 255)',
    expectation: 'hsl(300, 100%, 50%)'
  },
  {
    color: 'rgb(128,128,128)',
    expectation: 'hsl(0, 0%, 50%)'
  },
  {
    color: '#94fff9',
    expectation: 'hsl(177, 100%, 79%)'
  },
  {
    color: '#94ccf9',
    expectation: 'hsl(207, 89%, 78%)'
  },
];

describe.each( rgb )( '[hexToRGB] Does this correctly convert hex and rgb() values to hsl() ones?', ({ color, expectation }) => {
  test(`should return ${ expectation } for ${ color }`, () => {
    expect( convertToHsl( color ) ).toBe( expectation );
  });
});


