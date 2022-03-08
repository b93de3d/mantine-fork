import React from 'react';
import { Accordion } from '@mantine/core';
import { baseAccordionMockdata } from './_mockdata.js';

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
const baseDemoItems = baseAccordionMockdata.map((item) => /* @__PURE__ */ React.createElement(Accordion.Item, {
  label: item.label,
  key: item.label
}, item.content));
function BaseDemo(props) {
  return /* @__PURE__ */ React.createElement(Accordion, __spreadValues({}, props), baseDemoItems);
}

export { BaseDemo, baseDemoItems };
//# sourceMappingURL=_base.js.map
