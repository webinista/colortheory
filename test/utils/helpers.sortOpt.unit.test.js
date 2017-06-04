import { expect } from 'chai';
import { JSDOM } from 'jsdom';

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

describe('sortOptions helper function', () => {
  it('should return objects in the correct order, Aardvark to Egret', () => {
    const so = objs.sort(sortOptions);
    expect(so[0].label).to.equal('Aardvark');
    expect(so[1].label).to.equal('Ant');
    expect(so[2].label).to.equal('Beaver');
    expect(so[3].label).to.equal('Cat');
    expect(so[4].label).to.equal('Dog');
    expect(so[5].label).to.equal('Egret');
  });
});
 
