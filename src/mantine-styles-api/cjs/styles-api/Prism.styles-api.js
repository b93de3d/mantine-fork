'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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
const Prism = {
  root: "Root element",
  scrollArea: "ScrollArea component wrapping pre element",
  code: "Pre element which contains code",
  copy: "Copy button wrapper",
  line: "Line wrapper, contains line number and content",
  lineNumber: "Line number",
  lineContent: "Line content"
};
const PrismTabs = __spreadValues({
  tabs: "Tabs list",
  tab: "Tab control",
  tabActive: "Active tab control",
  code: "Code wrapper"
}, Prism);

exports.Prism = Prism;
exports.PrismTabs = PrismTabs;
//# sourceMappingURL=Prism.styles-api.js.map
