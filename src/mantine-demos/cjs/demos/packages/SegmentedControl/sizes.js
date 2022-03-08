'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Wrapper = require('./Wrapper.js');

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
const getSizes = (props) => ["xs", "sm", "md", "lg", "xl"].map((size, index) => /* @__PURE__ */ React__default.createElement("div", {
  style: { marginTop: index === 0 ? 0 : 15 },
  key: size
}, /* @__PURE__ */ React__default.createElement(Wrapper.SegmentedControlWrapper, __spreadValues({
  size
}, props))));
function Demo() {
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, getSizes());
}
const sizes = {
  type: "demo",
  component: Demo
};

exports.sizes = sizes;
//# sourceMappingURL=sizes.js.map
