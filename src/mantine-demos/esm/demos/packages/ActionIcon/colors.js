import React from 'react';
import { ImageIcon } from '@modulz/radix-icons';
import { Group, MANTINE_COLORS, ActionIcon } from '@mantine/core';

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
const getColors = (props) => MANTINE_COLORS.slice(1).map((color) => /* @__PURE__ */ React.createElement(ActionIcon, __spreadValues({
  key: color,
  color
}, props), /* @__PURE__ */ React.createElement(ImageIcon, {
  style: { width: 16, height: 16 }
})));
function Demo() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, getColors({ variant: "hover" })), /* @__PURE__ */ React.createElement(Group, {
    position: "center",
    mt: "md"
  }, getColors({ variant: "outline" })), /* @__PURE__ */ React.createElement(Group, {
    position: "center",
    mt: "md"
  }, getColors({ variant: "light" })), /* @__PURE__ */ React.createElement(Group, {
    position: "center",
    mt: "md"
  }, getColors({ variant: "filled" })));
}
const colors = {
  type: "demo",
  component: Demo
};

export { colors };
//# sourceMappingURL=colors.js.map
