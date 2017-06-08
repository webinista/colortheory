import {
  convertToHsl
} from './conversions';

import {
  getColorParts
} from './helpers';

export function getComplement(colorString) {
  const palette = [];
  const [h, s, l] = getColorParts(convertToHsl(colorString));

  // If hue > 180, subtract 180. Otherwise, add 180.
  // Use + to convert h to a number
  const newHue = (+h > 180) ? (+h - 180) : (+h + 180);

  palette[0] = colorString;
  palette[1] = `hsl(${newHue}, ${s}%, ${l}%)`;

  return palette;
}
