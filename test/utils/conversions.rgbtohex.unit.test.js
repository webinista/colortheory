import {
  rgbToHex,
} from '../../src/utils/conversions';

const colors = [
  {
    color: 'rgb(255, 0, 0)',
    expectation: '#ff0000'
  },
  {
    color: 'rgb(0, 255, 0)',
    expectation: '#00ff00'
  },
  {
    color: 'rgb(0, 0, 255)',
    expectation: '#0000ff'
  },
  {
    color: 'rgb(204, 204, 204)',
    expectation: '#cccccc'
  }
];

describe.each( colors )( '[rgbToHex] Does this correctly convert rgb() to hex values?', ({ color, expectation }) => {
  test(`should return ${ expectation } for ${ color }`, () => {
    expect( rgbToHex( color ) ).toBe( expectation );
  });
});

