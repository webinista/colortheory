/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var form = document.forms[0];
var output = document.getElementById('color');
var swatch = document.getElementById('swatch');

// `s` and `l` should be numbers without a percent character.
function hslValue(h, s, l) {
  return 'hsl(' + h + ', ' + s + '%, ' + l + '%)';
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
function getInputValues(selector) {
  var returnCurrentValues = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  var rngs = document.querySelectorAll(selector);
  var inputs = Array.from(rngs);
  var values = void 0;

  if (returnCurrentValues) {
    values = inputs.map(function (inp) {
      return inp.value; // Current input value.
    });
  } else {
    values = inputs.map(function (inp) {
      return inp.getAttribute('value'); // Original DOM attribute value.
    });
  }
  return values;
}

function handler(domEvent) {
  var useCurrent = domEvent.type == 'input';
  var values = getInputValues('[type=range]', useCurrent);
  var hsl = hslValue(values[0], values[1], values[2]);

  updateBackground(swatch, hsl);
  updateText(output, hsl);
}

form.addEventListener('input', handler);
form.addEventListener('reset', handler);

/***/ })
/******/ ]);