import { expect } from 'chai';

import {
  getRandom,
} from '../../src/utils/colorschemes';

describe('getRandom helper function', () => {
  const numColors = 5;

  it('should return an array with a length of 4', () => {
    expect(getRandom('#ff0000', numColors)).to.have.lengthOf(numColors);
  });

  it('first color should be hsl(0, 100%, 50%)', () => {
    expect(getRandom('#ff0000')[0]).to.equal('hsl(0, 100%, 50%)');
  });
});
