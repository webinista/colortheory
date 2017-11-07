import {
  dec2Hex,
  expandRgb,
  getColorParts,
  hex2Dec,
  normalizeColorString,
  percentToFloat,
} from './helpers';

const getHue = (rgb) => {
  let hue;
  const max = Math.max.apply(null, rgb);
  const min = Math.min.apply(null, rgb);

  const r = rgb[0];
  const g = rgb[1];
  const b = rgb[2];

  // Determine which index and color channel is the max value.
  // That will determine which calculation we use.
  const whichChannelIsMax = rgb.findIndex((obj) => {
    return obj === max;
  });

  switch (whichChannelIsMax) {
    // if red is the max value
    case 0:
      hue = (g - b) / (max - min);
      break;
    // if green is the max value
    case 1:
      hue = ((b - r) / (max - min)) + 2;
      break;
    // if blue is the max value
    case 2:
      hue = ((r - g) / (max - min)) + 4;
      break;
    default:
      hue = 0;
  }

  hue = Math.round(hue * 60);

  // If hue is negative, add 360, otherwise, return hue.
  return hue < 0 ? (360 + hue) : hue;
};

const getSaturation = (lightness, min, max) => {
  const diff = max - min;
  const sat = (lightness > 0.5) ? diff / (2 - max - min) : diff / (max + min);
  return sat;
};

export function rgbToHsl(string) {
  let hue;
  let sat;
  const col = normalizeColorString(string);
  const RGB_MAX = 255;

  // getColorParts returns an array. Sets each item [r,g,b] to the
  // corresponding part of the getColorParts(string) array.
  const [rval, gval, bval] = getColorParts(col, true);

  const rgb = [rval / RGB_MAX, gval / RGB_MAX, bval / RGB_MAX];

  const min = Math.min.apply(null, rgb);
  const max = Math.max.apply(null, rgb);

  const light = (min + max) / 2;

  if (max === min) {
    hue = 0;
    sat = 0;
  } else {
    sat = getSaturation(light, min, max);
    hue = getHue(rgb);
  }

  return `hsl(${hue}, ${Math.round(sat * 100)}%, ${Math.round(light * 100)}%)`;
}

export function hexToRGB(string) {
  const len = 2;

  const hexStr = expandRgb(string);

  const rr = hex2Dec(hexStr.substr(-6, len));
  const gg = hex2Dec(hexStr.substr(-4, len));
  const bb = hex2Dec(hexStr.substr(-2, len));

  return `rgb(${rr}, ${gg}, ${bb})`;
}

export function rgbToHex(string) {
  // Add commas if there aren't any
  const color = normalizeColorString(string);

  // getColorParts returns an array. Sets each item [r,g,b] to the
  // corresponding part of the getColorParts(string) array.
  const [r, g, b] = getColorParts(color, true);

  // Convert each component to a number so that we can do === instead of
  // === comparisons. (thanks, eslint!)
  // If the component is zero, pad the string to be double zeroes
  const rr = (+r === 0) ? '00' : dec2Hex(r);
  const gg = (+g === 0) ? '00' : dec2Hex(g);
  const bb = (+b === 0) ? '00' : dec2Hex(b);

  return `#${rr}${gg}${bb}`;
}

/*
 * Copied, pasted, and modified straight from the CSS4 spec
 * https://drafts.csswg.org/css-color-4/#hsl-to-rgb
 */
const hueToRgb = (t1, t2, hue) => {
  let hu = hue; // Reassigned to preserve parameter
  let hueValue;

  if (hu < 0) hu += 6;
  if (hu >= 6) hu -= 6;

  if (hu < 1) hueValue = (t2 - t1) * (hu + t1);
  else if (hu < 3) hueValue = t2;
  else if (hu < 4) hueValue = (t2 - t1) * ((4 - hu) + t1);
  else hueValue = t1;

  // rgb() needs a value between 0 and 255 for each parameter
  return hueValue * 255;
};

/*
 * Based on math from
 * http://www.niwa.nu/2013/05/math-behind-colorspace-conversions-rgb-hsl/
 * Does not yet handle space-separated hsl values.
 */

export function hslToRgb(string) {
  let rgb;
  const color = normalizeColorString(string);
  const [hue, sat, light] = getColorParts(color);

  /*
   * Convert hue value to an angle. Not sure why we're dividing by 60. I think
   * it's related to hueToRgb using +/-6 (since 6 * 60 = 360). It works though!
   * Parse percentage values into floats so 40% becomes 0.4
   */
  const [h, s, l] = [hue / 60, percentToFloat(sat), percentToFloat(light)];

  /*
   * If there's no saturation, it's a gray. Need to multiply the lightness
   * value by 255 and set r,g,b to that value.
   */
  if (s === 0) {
    const gray = Math.round(l * 255);
    rgb = [gray, gray, gray];
  } else {
    // temp1 and temp2 don't really need names. they're just holders for these
    // calculations
    const temp1 = (l <= 0.5) ? l * (s + 1) : (l + s) - (l * s);
    const temp2 = (l * 2) - temp1;

    rgb = [
      hueToRgb(temp2, temp1, h + 2, true),
      hueToRgb(temp2, temp1, h, true),
      hueToRgb(temp2, temp1, h - 2, true)
    ];
  }

  const rgbStr = `rgb(${rgb.join(', ')})`;
  return rgbStr;
}

/**
* Converts RGB values to hex, or returns a hex string.
*/
export function convertToHex(string) {
  let hex;

  if (string.toLowerCase().indexOf('rgb') > -1) {
    hex = rgbToHex(string);
  } else if (string.toLowerCase().indexOf('hsl') > -1) {
    hex = rgbToHex(hslToRgb(string));
  } else {
    hex = string;
  }

  return expandRgb(hex);
}

export function convertToHsl(string) {
  let color;

  if (string.toLowerCase().indexOf('hsl') > -1) {
    color = string;
  }

  if (string.indexOf('#') > -1) {
    color = rgbToHsl(hexToRGB(string));
  }

  if (string.toLowerCase().indexOf('rgb') > -1) {
    color = rgbToHsl(string);
  }

  return color;
}
