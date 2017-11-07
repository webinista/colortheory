export const dec2Hex = (integer) => {
  const hx = (+integer).toString(16);

  // If the integer is less than 16, it will return
  // a single digit number instead of a 2 digit one.
  // So we need to left pad
  const hxstring = (+integer < 16) ? `0${hx}` : hx;

  return hxstring;
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

/**
 * Convert an HSL, RGB, etc string to an array
 * @colorString string of color either RGB, RGB hexadecimal or HSL
 * @isRGB Boolean. Allow for the possibility that we're dealing with RGB
 * percent values such as rgb(100%, 100%,100%)
 */
export const getColorParts = (colorString, isRGB = false) => {
  // Remove all characters except , %, and 0-9 and split into an array
  const colorComponents = colorString.replace(/[^,%0-9]/g, '').split(',');
  let colorParts;

  if (!isRGB) {
    colorParts = colorComponents;
  } else {
    /*
      For each R, G, or B value, determine whether there's a percentage sign
      in the string. If so, convert it to a decimal/float number. Then multiply
      it by 255.
    */
    colorParts = colorComponents.map((value) => {
      let val;
      if (value.indexOf('%') > -1) {
        val = Math.round(255 * (parseInt(value, 10) / 100));
      } else {
        val = value;
      }
      return val;
    });
  }
  return colorParts;
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

// Returns true if the browser supports input[type=color]
export function isColorTypeSupported() {
  const inp = document.createElement('input');
  inp.setAttribute('type', 'color');
  return inp.type === 'color';
}

// Finds numbers *between* the min and max
// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function pickRandom(min, max) {
  const minb = Math.ceil(min);
  const maxb = Math.floor(max);
  return Math.floor(Math.random() * ((maxb - minb) + 1)) + minb;
}

export function randomColor() {
  let i = 0;
  const rgb = [];

  // Pick 3 random color component values
  while (i < 3) {
    rgb[i] = pickRandom(0, 255);
    i++;
  }

  // Convert each decimal channel value to a hex value
  const rgbhex = rgb.map((channel) => {
    return dec2Hex(channel);
  });

  // Add a # as the beginning of the array
  rgbhex.unshift('#');

  // Return a #rrggbb color
  return rgbhex.join('');
}
