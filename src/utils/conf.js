import {
  randomColor
} from '../utils/helpers';

export const HSL_MAX = 360;

export const OPTIONS_START_COLOR = randomColor();

export const OPTIONS_COLOR_SCHEME = [
  {
    label: 'Complementary',
    value: 'complementary',
    definition: 'Colors that sit opposite each other (180\u00B0 apart) on the color wheel.'
  },
  {
    label: 'Analogous',
    value: 'analogous',
    definition: 'Adjacent colors (30\u00B0 apart) on the color wheel.'
  },
  {
    label: 'Analogous B',
    value: 'analogous_b',
    definition: 'Adjacent colors (-30\u00B0 apart) on the color wheel (counter-clockwise).'
  },
  {
    label: 'Triad',
    value: 'triad',
    definition: 'Three colors that are equidistant from each other.'
  },
  {
    label: 'Split complementary',
    value: 'splitcomp',
    definition: 'A three-color scheme in which two of the colors are adjacent to the complement of the first.'
  },
  {
    label: 'Square',
    value: 'square',
    definition: 'Four colors that are equidistant from each other.'
  },
  // Two complementary pairs
  {
    label: 'Tetrad',
    value: 'tetrad',
    definition: 'A four-color scheme made of pairs of complementary colors.'
  },
  {
    label: 'Diad',
    value: 'diad',
    definition: 'Scheme in which colors are two colors apart on the color wheel.'
  },
  {
    label: 'Diad B',
    value: 'diad_b',
    definition: 'Scheme in which colors are two colors apart on the color wheel (counter-clockwise).'
  },
  {
    label: 'Random',
    value: 'random',
    definition: 'Four hues with the same saturation and lightness values, chosen randomly.'
  }
];

export const OPTIONS_COLOR_INPUT_MESSAGE = 'Accepts #rgb, #rrggbb, rgb(), hsl() values, and named colors. No alpha support (yet).';
export const OPTIONS_COLOR_INPUT_ERROR_MESSAGE = "The value you entered isn't supported.";
