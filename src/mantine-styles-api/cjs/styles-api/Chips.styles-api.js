'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const Chip = {
  root: "Root element",
  label: "Chip label, includes all other elements except input",
  outline: "Outline chip modifier, added to label",
  filled: "Filled chip modifier, added to label",
  input: "Chip input, hidden by default",
  disabled: "Chip label disabled modifier",
  checked: "Chip label checked modifier",
  iconWrapper: "Check icon wrapper",
  checkIcon: "Check icon, displayed when checkbox or radio is checked"
};
const _a = Chip, otherNames = __objRest(_a, ["root"]);
const Chips = otherNames;

exports.Chip = Chip;
exports.Chips = Chips;
//# sourceMappingURL=Chips.styles-api.js.map
