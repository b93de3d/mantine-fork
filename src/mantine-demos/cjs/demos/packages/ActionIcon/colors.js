'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var radixIcons = require('@modulz/radix-icons');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
const getColors = (props) => core.MANTINE_COLORS.slice(1).map((color) => /* @__PURE__ */ React__default.createElement(core.ActionIcon, __spreadValues({
  key: color,
  color
}, props), /* @__PURE__ */ React__default.createElement(radixIcons.ImageIcon, {
  style: { width: 16, height: 16 }
})));
function Demo() {
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, getColors({ variant: "hover" })), /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center",
    mt: "md"
  }, getColors({ variant: "outline" })), /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center",
    mt: "md"
  }, getColors({ variant: "light" })), /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center",
    mt: "md"
  }, getColors({ variant: "filled" })));
}
const colors = {
  type: "demo",
  component: Demo
};

exports.colors = colors;
//# sourceMappingURL=colors.js.map
