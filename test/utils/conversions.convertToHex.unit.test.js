import {
  convertToHex,
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
  },
  {
    color: 'hsl(0, 0%, 50%)',
    expectation: '#808080'
  },
  {
    color: 'hsl(0, 100%, 50%)',
    expectation: '#ff0000'
  },
  {
    color: 'hsl(300, 100%, 50%)',
    expectation: '#ff00ff'
  },
  {
    color: 'hsl(60, 100%, 50%)',
    expectation: '#ffff00'
  }
];

describe.each( rgb )( '[convertToHex] Does this correctly convert rgb() and hsl() values to hexadecimal ones?', ({ color, expectation }) => {
  test(`should return ${ expectation } for ${ color }`, () => {
    expect( convertToHex( color ) ).toBe( expectation );
  });
});


