import {
  rgbToHsl,
} from '../../src/utils/conversions';

const rgb = [
  {
    color: 'rgb(0, 204, 0)',
    expectation: 'hsl(120, 100%, 40%)',
  },
  {
    color: 'rgb(0, 0, 0)',
    expectation: 'hsl(0, 0%, 0%)',
  },
  {
    color: 'rgb(153, 0, 255)',
    expectation: 'hsl(276, 100%, 50%)'
  },
  {
    color: 'rgb(148, 255, 250)',
    expectation: 'hsl(177, 100%, 79%)'
  },
  {
    color: 'rgb(148, 204, 249)',
    expectation: 'hsl(207, 89%, 78%)'
  },
];


describe.each( rgb )( '[rgbToHsl] Does this correctly convert rgb() to hsl() values?', ({ color, expectation }) => {
  test(`should return ${ expectation } for ${ color }`, () => {
    expect( rgbToHsl( color ) ).toBe( expectation );
  });
});

