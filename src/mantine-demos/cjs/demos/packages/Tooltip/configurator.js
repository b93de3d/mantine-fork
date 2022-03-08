'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
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
const Wrapper = (props) => /* @__PURE__ */ React__default.createElement("div", {
  style: { padding: 30 }
}, /* @__PURE__ */ React__default.createElement(core.Group, {
  position: "center"
}, /* @__PURE__ */ React__default.createElement(core.Tooltip, __spreadValues({
  opened: true
}, props), /* @__PURE__ */ React__default.createElement(core.Button, {
  variant: "outline",
  color: "gray",
  size: "xl"
}, "With tooltip"))));
const codeTemplate = (props) => `<Tooltip
  opened
 ${props}
>
  <Button variant="outline" color="gray" size="xl">
    With tooltip
  </Button>
</Tooltip>`;
const configurator = {
  type: "configurator",
  component: Wrapper,
  codeTemplate,
  configuratorProps: { multiline: true },
  configurator: [
    {
      name: "label",
      type: "string",
      initialValue: "Tooltip"
    },
    {
      name: "color",
      type: "color",
      initialValue: "gray",
      defaultValue: "gray"
    },
    { name: "radius", type: "size", initialValue: "sm", defaultValue: "sm" },
    {
      name: "position",
      type: "select",
      data: [
        { label: "top", value: "top" },
        { label: "left", value: "left" },
        { label: "right", value: "right" },
        { label: "bottom", value: "bottom" }
      ],
      initialValue: "top",
      defaultValue: "top"
    },
    {
      name: "placement",
      type: "segmented",
      data: [
        { label: "start", value: "start" },
        { label: "center", value: "center" },
        { label: "end", value: "end" }
      ],
      initialValue: "center",
      defaultValue: "center"
    },
    { name: "withArrow", type: "boolean", initialValue: true, defaultValue: false }
  ]
};

exports.configurator = configurator;
//# sourceMappingURL=configurator.js.map
