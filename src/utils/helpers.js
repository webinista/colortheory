/**
 * Expand an RGB value to an RRGGB value
 * Works in browsers only.
 */
export function expandRGB(string) {
  if (!(/#[a-f0-9]{3}$/i).test(string)) return string;
  const rgb = string.split('');
  return `#${rgb[1]}${rgb[1]}${rgb[2]}${rgb[2]}${rgb[3]}${rgb[3]}`;
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


export function hexToRGB(string) {
  const rr = parseInt(string.substr(-6, 2), 16);
  const gg = parseInt(string.substr(-4, 2), 16);
  const bb = parseInt(string.substr(-2, 2), 16);

  return `rgb(${rr}, ${gg}, ${bb})`;
}

/**
* Does not yet handle space-separated rgb values
*/
export function rgbToHex(string) {
  const normalize = string.replace('rgb(', '').replace(')', '');
  const rgb = normalize.split(',');

  const rr = (rgb[0] == 0) ? '00' : (+rgb[0]).toString(16);
  const gg = (rgb[1] == 0) ? '00' : (+rgb[1]).toString(16);
  const bb = (rgb[2] == 0) ? '00' : (+rgb[2]).toString(16)

  return `#${rr}${gg}${bb}`;
}



/**
* Converts RGB values to hex, or returns a hex string.
*/
export function convertToHex(string) {
  let hex;

  if((/rgb/i).test(string)) {
    hex = rgbToHex(string);
  } else {
    hex = string;
  }

  return expandRGB(hex);
}
