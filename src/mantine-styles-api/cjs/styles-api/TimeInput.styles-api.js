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
const TimeInput = __spreadValues(__spreadValues({
  controls: "Wrapper around hours, minutes and seconds inputs",
  timeInput: "Hours, minutes and seconds inputs",
  disabled: "Disabled modifier"
}, Input_stylesApi.Input), InputWrapper_stylesApi.InputWrapper);
const TimeRangeInput = TimeInput;

exports.TimeInput = TimeInput;
exports.TimeRangeInput = TimeRangeInput;
//# sourceMappingURL=TimeInput.styles-api.js.map
