import { Input } from './Input.styles-api.js';
import { InputWrapper } from './InputWrapper.styles-api.js';

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
const Select = __spreadValues(__spreadValues({
  dropdown: "Dropdown element",
  item: "Item element, rendered inside dropdown",
  hovered: "Hovered item modifier, added to item when it is selected with arrows or hovered",
  disabled: "Disabled item modifier",
  selected: "Selected item modifier",
  nothingFound: "Nothing found label",
  separator: "Divider wrapper",
  separatorLabel: "Separator Label"
}, Input), InputWrapper);

export { Select };
//# sourceMappingURL=Select.styles-api.js.map
