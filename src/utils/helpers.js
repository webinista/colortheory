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

/*
 Test whether the string is a 3 or 6 character hex color
 TODO: Figure out how to combine these into one RegExp
 */
const isHex = (string) => {
  return (/#(?:[A-F0-9]{6}$)/i).test(string) || (/#(?:[A-F0-9]{3}$)/i).test(string);
};

/**
 * Return true/false if the provided string is in the named color list.
 * @param {Array} namedColorList - should be an array of Objects
 * with name, hex keys.
 */
const isNamedColor = (string, namedColorList) => {
  return !!namedColorList.find((color) => {
    return string.toLowerCase() === color.name.toLowerCase();
  });
}

/* 
const isColorFunction = (string) => {
  return (/(?:rgb|hsl)/i);
};
*/

export function validateColorSyntax(colorString, namedColorList) {
}

