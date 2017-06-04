/**
 * Strips spaces out of rgb, hsl, lab parameters to normalize for comparisons.
 * @param {string} string: the string to clean up.
 */
const removeSpaces = (string) => {
  return string.replace(' ', '');
};

/* ===================================
 * Color validation functions.
 * =================================== */

/**
 * Tests whether this is a supported (for the purposes of this project)
 * color value without checking whether it's an actual valid value.
 */
export const isRoughlyValid = (string) => {
  const wontWork = (/(?:lab|gray|hwb|hsla|rgba)\(|#[a-f0-9]{8}$/i).test(string);
  return !wontWork;
}

/**
 * Tests whether the provided color is a valid one.
 * Works in browsers only.
 */
export const isValidInputColor = (string) => {
  const testEl = document.createElement('testEl');
  testEl.style.color =  string;
  return !!testEl.style.color;
};

export function isValidColor(string) {
  return isRoughlyValid(string) && isValidInputColor(string);
}

export function expandRGB(string) {
  if(!(/#[a-f0-9]{3}$/i).test(string)) return string;

  const rrggbb = [];
  const rgb = string.split('');
  
  return `#${rgb[1]}${rgb[1]}${rgb[2]}${rgb[2]}${rgb[3]}${rgb[3]}`;
}
