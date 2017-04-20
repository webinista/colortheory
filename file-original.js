const form = document.forms[0];
const output = document.getElementById('color');
const swatch = document.getElementById('swatch');

// `s` and `l` should be numbers without a percent character.
function hslValue(h, s, l) {
  return `hsl(${h}, ${s}%, ${l}%)`;
}

function findComplement(hue) {
  return hue + 180;
}

function updateBackground(el, bgvalue) {
  el.style.backgroundColor = bgvalue;
}

function updateText(el, value) {
  el.replaceChild(document.createTextNode(value), el.firstChild);
}

// Return an array of either current or original input values.
function getInputValues(selector, returnCurrentValues = true) {
  const rngs = document.querySelectorAll(selector);
  const inputs = Array.from(rngs);
  let values;

  if(returnCurrentValues) {
    values = inputs.map((inp) => {
      return inp.value; // Current input value.
    });
  } else {
    values = inputs.map((inp) => {
      return inp.getAttribute('value'); // Original DOM attribute value.
    });
  }
  return values;
}

function handler(domEvent) {
  const useCurrent = (domEvent.type == 'input');
  const values = getInputValues('[type=range]', useCurrent);
  const hsl = hslValue(values[0], values[1], values[2]);

  updateBackground(swatch, hsl);
  updateText(output, hsl); 
}

form.addEventListener('input', handler);
form.addEventListener('reset', handler);
