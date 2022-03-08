import { Month } from './Month.styles-api.js';

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
const CalendarBase = __spreadValues({
  calendarBase: "Root element",
  calendarHeader: "Calendar header, contains next/previous and level change controls",
  calendarHeaderControl: "Next/previous controls",
  calendarHeaderLevel: "Level change control (year, month, date)",
  calendarHeaderLevelIcon: "Level control icon (caret)",
  yearPicker: "Year picker root element",
  yearPickerControls: "Year picker controls wrapper",
  yearPickerControl: "Year picker control button",
  yearPickerControlActive: "Year picker control active modifier (currently selected year)",
  monthPicker: "Month picker root element",
  monthPickerControls: "Month picker controls wrapper",
  monthPickerControl: "Month picker control button",
  monthPickerControlActive: "Month picker control active modifier (currently selected month)"
}, Month);

export { CalendarBase };
//# sourceMappingURL=CalendarBase.styles-api.js.map
