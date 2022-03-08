import React from 'react';
import { SegmentedControlWrapper } from './Wrapper.js';

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
const getRadius = (props) => ["xs", "sm", "md", "lg", "xl"].map((size, index) => /* @__PURE__ */ React.createElement("div", {
  style: { marginTop: index === 0 ? 0 : 15 },
  key: size
}, /* @__PURE__ */ React.createElement(SegmentedControlWrapper, __spreadValues({
  size: "lg",
  radius: size
}, props))));
function Demo() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, getRadius());
}
const radius = {
  type: "demo",
  component: Demo
};

export { radius };
//# sourceMappingURL=radius.js.map
