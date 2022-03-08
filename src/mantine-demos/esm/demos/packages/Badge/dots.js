import React from 'react';
import { Group, MANTINE_COLORS, Badge } from '@mantine/core';

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
const getDots = (props) => MANTINE_COLORS.map((color) => /* @__PURE__ */ React.createElement(Badge, __spreadValues({
  key: color,
  color,
  variant: "dot"
}, props), color));
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, getDots());
}
const dots = {
  type: "demo",
  component: Demo
};

export { dots };
//# sourceMappingURL=dots.js.map
