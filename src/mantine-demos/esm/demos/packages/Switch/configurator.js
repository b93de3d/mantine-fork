import React from 'react';
import { Switch } from '@mantine/core';

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
const codeTemplate = (props) => `<Switch
 ${props}
/>`;
const configurator = {
  type: "configurator",
  component: (props) => /* @__PURE__ */ React.createElement(Switch, __spreadProps(__spreadValues({}, props), {
    defaultChecked: true
  })),
  codeTemplate,
  configuratorProps: { multiline: true },
  configurator: [
    {
      name: "label",
      type: "string",
      initialValue: "I agree to sell my privacy"
    },
    { name: "size", type: "size", initialValue: "sm", defaultValue: "sm" },
    { name: "radius", type: "size", initialValue: "xl", defaultValue: "xl" },
    { name: "color", type: "color", initialValue: "blue", defaultValue: "blue" },
    { name: "disabled", type: "boolean", initialValue: false, defaultValue: false }
  ]
};

export { configurator };
//# sourceMappingURL=configurator.js.map
