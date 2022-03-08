'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Input_stylesApi = require('./Input.styles-api.js');
var InputWrapper_stylesApi = require('./InputWrapper.styles-api.js');

var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
const Autocomplete = __spreadValues(__spreadValues({
  wrapper: "Wrapper around input and dropdown",
  dropdown: "Dropdown element",
  item: "Item element, rendered inside dropdown",
  hovered: "Hovered item modifier, added to item when it is selected with arrows or hovered",
  nothingFound: "Nothing found label"
}, Input_stylesApi.Input), InputWrapper_stylesApi.InputWrapper);

exports.Autocomplete = Autocomplete;
//# sourceMappingURL=Autocomplete.styles-api.js.map
