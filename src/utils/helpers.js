export const dec2Hex = (integer) => {
  return (+integer).toString(16);
};

export const hex2Dec = (hexInteger) => {
  return parseInt(hexInteger, 16);
};

export const limit360 = (num) => {
  return (num > 360) ? num - 360 : num;
};


export const percentToFloat = (percentString) => {
  return parseInt(percentString, 10) / 100;
};

// Convert an HSL, RGB, etc string to an array
export const getColorParts = (colorString) => {
  // Remove all characters except , and 0-9
  return colorString.replace(/[^,0-9]/g, '').split(',');
};

// Add commas if there aren't any.
export const normalizeColorString = (colorString) => {
  // if there's a comma, return the color
  if (colorString.indexOf(',') > -1) return colorString;

  // Otherwise return a string with commas
  return colorString.replace(/\s/g, ', ');
};

/**
 * Expand an RGB value to an RRGGB value
 * Works in browsers only.
 */
export function expandRgb(string) {
  if (!(/#[a-f0-9]{3}$/i).test(string)) return string;

  const rgb = string.split('');

  // Assign rgb[0] to pound, rgb[1] to r, etc
  const [pound, r, g, b] = rgb;

  return `${pound}${r}${r}${g}${g}${b}${b}`;
}

/**
 * Sorts options in an array of objects
 * Objects must have a label property.
 * Used to sort the Select a scheme menu options
 */

export function sortOptions(a, b) {
  const aLabel = a.label.toLowerCase();
  const bLabel = b.label.toLowerCase();

  if (aLabel < bLabel) {
    return -1;
  }

  if (aLabel > bLabel) {
    return 1;
  }

  // names must be equal
  return 0;
}

