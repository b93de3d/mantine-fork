'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var dates = require('@mantine/dates');

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
const codeTemplate = (props) => `<TimeInput
  defaultValue={new Date()}
 ${props}
/>`;
const configurator = {
  type: "configurator",
  component: (props) => /* @__PURE__ */ React__default.createElement(dates.TimeInput, __spreadValues({
    defaultValue: new Date()
  }, props)),
  codeTemplate,
  configuratorProps: { multiline: true },
  configurator: [
    {
      name: "label",
      type: "string",
      initialValue: "Pick time"
    },
    {
      name: "description",
      type: "string",
      initialValue: ""
    },
    {
      name: "error",
      type: "string",
      initialValue: ""
    },
    {
      name: "variant",
      type: "select",
      data: [
        { label: "default", value: "default" },
        { label: "filled", value: "filled" },
        { label: "unstyled", value: "unstyled" }
      ],
      initialValue: "default",
      defaultValue: "default"
    },
    { name: "radius", type: "size", initialValue: "sm", defaultValue: "sm" },
    { name: "size", type: "size", initialValue: "sm", defaultValue: "sm" },
    {
      name: "format",
      type: "select",
      data: [
        { label: "24", value: "24" },
        { label: "12", value: "12" }
      ],
      initialValue: "24",
      defaultValue: "24"
    },
    {
      name: "withSeconds",
      type: "boolean",
      initialValue: false,
      defaultValue: false
    },
    { name: "disabled", type: "boolean", initialValue: false, defaultValue: false },
    {
      name: "required",
      type: "boolean",
      initialValue: true,
      defaultValue: false
    },
    {
      name: "clearable",
      type: "boolean",
      initialValue: false,
      defaultValue: false
    }
  ]
};

exports.configurator = configurator;
//# sourceMappingURL=configurator.js.map
