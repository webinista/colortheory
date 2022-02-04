import {
  isNamedColor,
  getHexForNamed
} from './named-colors';

export const dec2Hex = ( integer ) => {
  const hx = ( +integer ).toString( 16 );

  // If the integer is less than 16, it will return
  // a single digit number instead of a 2 digit one.
  // So we need to left pad
  const hxstring = ( +integer < 16 ) ? `0${ hx }` : hx;

  return hxstring;
};

export const hex2Dec = ( hexInteger ) => {
  return parseInt( hexInteger, 16 );
};

export const limit360 = ( num ) => {
  const limit = 360;
  let angle;

  // This works, but I think it can be improved.
  // If num is negative, we need to subtract it from limit.
  if ( num < 0 ) {
    angle = limit + ( num );
  } else if ( num > limit ) {
    angle = num - limit;
  } else {
    angle = num;
  }

  return angle;
};

export const percentToFloat = ( percentString ) => {
  return parseInt( percentString, 10 ) / 100;
};

// Convert an HSL, RGB, etc string to an array
export const getColorParts = ( colorString ) => {
  // Remove all characters except ,% and 0-9
  let colorParts = colorString.replace( /[^,.%0-9]/g, '' ).split( ',' );

  // Convert rgb( ) percentage values to a 0-255 range
  if (colorString.indexOf( 'rgb' ) > -1 && colorString.indexOf( '%' ) > -1 ) {
    colorParts = colorParts.map( ( value ) => {
      const v = value.replace( '%', '' ) / 100;
      return Math.round( v * 255 );
    } );
  }
  return colorParts;
};

// Add commas if there aren't any.
export const normalizeColorString = ( colorString ) => {
  let normalized = '';

  // if there's a comma, return the color
  if (colorString.indexOf( ',' ) > -1 ) {
    normalized = colorString;
  } else {
    normalized = colorString.replace( /\s/g, ', ' );
  }

  if (isNamedColor( colorString ) ) {
    normalized = getHexForNamed( colorString );
  }
  // Otherwise return a string with commas
  return normalized;
};

/**
 * Expand an RGB value to an RRGGB value
 * Works in browsers only.
 */
export function expandRgb( string ) {
  if ( !( /#[a-f0-9]{3 }$/i ).test( string ) ) return string;

  const rgb = string.split( '' );

  // Assign rgb[0] to pound, rgb[1] to r, etc
  const [pound, r, g, b] = rgb;

  return `${pound }${r }${r }${g }${g }${b }${b }`;
}

/**
 * Sorts options in an array of objects
 * Objects must have a label property.
 * Used to sort the Select a scheme menu options
 */

export function sortOptions(a, b ) {
  const aLabel = a.label.toLowerCase( );
  const bLabel = b.label.toLowerCase( );

  if ( aLabel < bLabel ) {
    return -1;
  }

  if ( aLabel > bLabel ) {
    return 1;
  }

  // names must be equal
  return 0;
}

// Returns true if the browser supports input[type=color]
export function isColorTypeSupported( ) {
  let isSupported;
  if ( typeof document !== 'undefined' ) {
    const inp = document.createElement( 'input' );
    inp.setAttribute( 'type', 'color' );
    isSupported = inp.type === 'color';
  } else {
    isSupported = false;
  }
  return isSupported;
}

// Finds numbers *between* the min and max
// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function pickRandom( min, max ) {
  const minb = Math.ceil( min );
  const maxb = Math.floor( max );
  return Math.floor(Math.random( ) * (( maxb - minb ) + 1 ) ) + minb;
}

export function randomColor( ) {
  let i = 0;
  const rgb = [];

  // Pick 3 random color component values
  while (i < 3 ) {
    rgb[i] = pickRandom(0, 255 );
    i++;
  }

  // Convert each decimal channel value to a hex value
  const rgbhex = rgb.map(( channel ) => {
    return dec2Hex( channel );
  } );

  // Add a # as the beginning of the array
  rgbhex.unshift( '#' );

  // Return a #rrggbb color
  return rgbhex.join( '' );
}
