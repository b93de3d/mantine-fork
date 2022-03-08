import { Input } from './Input.styles-api.js';
import { InputWrapper } from './InputWrapper.styles-api.js';
import { Calendar } from './Calendar.styles-api.js';

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
const DatePicker = __spreadValues(__spreadValues(__spreadValues({
  wrapper: "Wrapper around input and dropdown",
  placeholder: "Placeholder text",
  dropdownWrapper: "Wrapper around dropdown",
  dropdown: "Dropdown with calendar",
  value: "Value text",
  arrow: "Dropdown arrow",
  freeInput: "Input modifier when free input is allowed"
}, Input), InputWrapper), Calendar);
const DateRangePicker = DatePicker;

export { DatePicker, DateRangePicker };
//# sourceMappingURL=DatePicker.styles-api.js.map
