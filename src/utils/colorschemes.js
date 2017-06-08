import {
  convertToHsl
} from './conversions';

import {
  getColorParts
} from './helpers';

export function getComplement(colorString) {
  const palette = [];
  const cs = convertToHsl(colorString);
  const [h, s, l] = getColorParts(cs);

  // If hue > 180, subtract 180. Otherwise, add 180.
  // Use + to convert h to a number
  const newHue = (+h > 180) ? (+h - 180) : (+h + 180);

  palette[0] = cs;
  palette[1] = `hsl(${newHue}, ${s}%, ${l}%)`;

  return palette;
}

export function getTriad(colorString) {
  const palette = [];
  const cs = convertToHsl(colorString);
  const [h, s, l] = getColorParts(cs);

  const triad1 = +h + 120;
  let triad2 = +h - 120;

  triad2 = (triad2 < 0) ? (360 + triad2) : triad2;

  palette[0] = cs;
  palette[1] = `hsl(${triad1}, ${s}%, ${l}%)`;
  palette[2] = `hsl(${triad2}, ${s}%, ${l}%)`;

  return palette;
}
