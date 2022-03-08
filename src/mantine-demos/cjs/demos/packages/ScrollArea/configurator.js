'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var _content = require('./_content.js');

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
function Wrapper(props) {
  return /* @__PURE__ */ React__default.createElement("div", {
    style: { maxWidth: 400, margin: "auto" }
  }, /* @__PURE__ */ React__default.createElement(core.ScrollArea, __spreadValues({
    style: { height: 250 }
  }, props), /* @__PURE__ */ React__default.createElement(_content.Content, null)));
}
const codeTemplate = (props) => `<ScrollArea style={{ height: 250 }}${props}>
  {/* ... content */}
</ScrollArea>`;
const configurator = {
  type: "configurator",
  component: Wrapper,
  codeTemplate,
  configurator: [
    {
      name: "type",
      type: "select",
      data: [
        { value: "hover", label: "Hover" },
        { value: "auto", label: "Auto" },
        { value: "always", label: "Always" },
        { value: "scroll", label: "Scroll" }
      ],
      initialValue: "hover",
      defaultValue: "hover"
    },
    {
      name: "offsetScrollbars",
      type: "boolean",
      defaultValue: false,
      initialValue: false
    },
    {
      name: "scrollbarSize",
      type: "number",
      min: 2,
      max: 20,
      step: 2,
      defaultValue: 10,
      initialValue: 10
    },
    {
      name: "scrollHideDelay",
      type: "number",
      min: 0,
      max: 6e3,
      step: 500,
      defaultValue: 1e3,
      initialValue: 1e3
    }
  ]
};

exports.configurator = configurator;
//# sourceMappingURL=configurator.js.map
