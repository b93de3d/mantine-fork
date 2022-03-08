import React from 'react';
import { GearIcon } from '@modulz/radix-icons';
import { Group, ActionIcon } from '@mantine/core';

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
const iconSizes = {
  xs: 12,
  sm: 14,
  md: 18,
  lg: 26,
  xl: 34
};
function Wrapper(props) {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(ActionIcon, __spreadValues({}, props), /* @__PURE__ */ React.createElement(GearIcon, {
    style: { width: iconSizes[props.size], height: iconSizes[props.size] }
  })));
}
const codeTemplate = (props) => `<ActionIcon${props}>
  <GearIcon />
</ActionIcon>`;
const configurator = {
  type: "configurator",
  component: Wrapper,
  codeTemplate,
  configurator: [
    { name: "color", type: "color", initialValue: "gray", defaultValue: "gray" },
    { name: "size", type: "size", initialValue: "md", defaultValue: "md" },
    { name: "radius", type: "size", initialValue: "sm", defaultValue: "sm" },
    {
      name: "variant",
      type: "select",
      data: [
        { label: "transparent", value: "transparent" },
        { label: "hover", value: "hover" },
        { label: "filled", value: "filled" },
        { label: "light", value: "light" },
        { label: "outline", value: "outline" },
        { label: "default", value: "default" }
      ],
      initialValue: "hover",
      defaultValue: "hover"
    },
    { name: "disabled", type: "boolean", initialValue: false, defaultValue: false },
    { name: "loading", type: "boolean", initialValue: false, defaultValue: false }
  ]
};

export { configurator };
//# sourceMappingURL=configurator.js.map
