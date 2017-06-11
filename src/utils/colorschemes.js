import {
  convertToHsl
} from './conversions';

import {
  getColorParts
} from './helpers';

export function getAnalogous(colorString, colors = 4) {
  const increment = 30;
  const palette = [];
  const cs = convertToHsl(colorString);
  const hsl = getColorParts(cs);

  palette[0] = cs;

  let i = 1;
  let hue;

  while (i < colors) {
    hue = increment * i;
    palette[i] = `hsl(${hue}, ${hsl[1]}%, ${hsl[2]}%)`;
    i++;
  }

  return palette;
}

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

  let square1 = +h + degree;
  let square2 = +h + (degree * 2);
  let square3 = +h - degree;

  square1 = (square1 < 0) ? (360 + square1) : square1;
  square2 = (square2 < 0) ? (360 + square2) : square2;
  square3 = (square3 < 0) ? (360 + square3) : square3;

  palette[0] = cs;
  palette[1] = `hsl(${square1}, ${s}%, ${l}%)`;
  palette[2] = `hsl(${square2}, ${s}%, ${l}%)`;
  palette[3] = `hsl(${square3}, ${s}%, ${l}%)`;

  return palette;
}

export function getSplitComplement(colorString) {
  const degree = 180;
  const degreeDiff = 30;
  const palette = [];
  const cs = convertToHsl(colorString);
  const [h, s, l] = getColorParts(cs);

  let sc1 = +h + (degree + degreeDiff);
  let sc2 = +h - (degree + degreeDiff);

  sc1 = (sc1 < 0) ? (360 + sc1) : sc1;
  sc2 = (sc2 < 0) ? (360 + sc2) : sc2;

  palette[0] = cs;
  palette[1] = `hsl(${sc1}, ${s}%, ${l}%)`;
  palette[2] = `hsl(${sc2}, ${s}%, ${l}%)`;

  return palette;
}

// Pick four colors with the same saturation and lightness
// but a random hue betwen 0 and 359 degrees.
export function getRandom(colorString, colors = 4) {
  const min = 0;
  const max = 359;
  const palette = [];
  const cs = convertToHsl(colorString);
  const hsl = getColorParts(cs);

  palette[0] = cs;

  let i = 1;
  while (i < colors) {
    const hue = Math.floor(Math.random() * (max - min)) + min;
    palette[i] = `hsl(${hue}, ${hsl[1]}%, ${hsl[2]}%)`;
    i++;
  }

  return palette;
}
