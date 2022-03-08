import React from 'react';
import { RadioGroup, Radio } from '@mantine/core';

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
const getSizes = (props) => ["xs", "sm", "md", "lg", "xl"].map((size, index) => /* @__PURE__ */ React.createElement(RadioGroup, {
  size,
  key: size
}, /* @__PURE__ */ React.createElement(Radio, __spreadValues({
  value: size,
  style: { marginTop: index === 0 ? 0 : 15 }
}, props), size, " size radio")));
function Demo() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, getSizes());
}
const sizes = {
  type: "demo",
  component: Demo
};

export { sizes };
//# sourceMappingURL=sizes.js.map
