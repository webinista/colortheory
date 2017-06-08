import {
  convertToHsl
} from './conversions';

import {
  getColorParts
} from './helpers';

export function getComplement(colorString) {
  const degree = 180;
  const palette = [];
  const cs = convertToHsl(colorString);
  const [h, s, l] = getColorParts(cs);

  // If hue > 180, subtract 180. Otherwise, add 180.
  // Use + to convert h to a number
  const newHue = (+h > degree) ? (+h - degree) : (+h + degree);

  palette[0] = cs;
  palette[1] = `hsl(${newHue}, ${s}%, ${l}%)`;

  return palette;
}

export function getTriad(colorString) {
  const degree = 120;
  const palette = [];
  const cs = convertToHsl(colorString);
  const [h, s, l] = getColorParts(cs);

  const triad1 = +h + degree;
  let triad2 = +h - degree;

  // 360 = number of degrees in an HSL wheel
  triad2 = (triad2 < 0) ? (360 + triad2) : triad2;

  palette[0] = cs;
  palette[1] = `hsl(${triad1}, ${s}%, ${l}%)`;
  palette[2] = `hsl(${triad2}, ${s}%, ${l}%)`;

  return palette;
}

export function getSquare(colorString) {
  const degree = 90;
  const palette = [];
  const cs = convertToHsl(colorString);
  const [h, s, l] = getColorParts(cs);

  const square1 = +h + degree;
  const square2 = +h + (degree * 2);

  let square3 = +h - degree;

  square3 = (square3 < 0) ? (360 + square3) : square3;

  palette[0] = cs;
  palette[1] = `hsl(${square1}, ${s}%, ${l}%)`;
  palette[2] = `hsl(${square2}, ${s}%, ${l}%)`;
  palette[3] = `hsl(${square3}, ${s}%, ${l}%)`;

  return palette;
}
