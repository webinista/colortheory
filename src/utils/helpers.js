/**
 * Strips spaces out of rgb, hsl, lab parameters to normalize for comparisons.
 * @param {string} string: the string to clean up.
 */
const removeSpaces = (string) => {
  return string.replace(' ', '');
};

/**
 * Expand an RGB value to an RRGGB value
 * Works in browsers only.
 */
export function expandRGB(string) {
  if(!(/#[a-f0-9]{3}$/i).test(string)) return string;

  const rrggbb = [];
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

export function hexToHsl(string) {
  
}
