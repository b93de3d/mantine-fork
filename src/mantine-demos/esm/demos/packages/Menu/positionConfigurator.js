import React from 'react';
import { Group, Menu } from '@mantine/core';
import { menuItems } from './_menu-items.js';

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
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Menu, __spreadValues({
    opened: true,
    trapFocus: false
  }, props), menuItems));
}
const codeTemplate = (props) => `<Menu${props}>
  {/* Menu items */}
</Menu>`;
const positionConfigurator = {
  type: "configurator",
  component: Wrapper,
  codeTemplate,
  configurator: [
    {
      name: "position",
      type: "select",
      initialValue: "bottom",
      defaultValue: "bottom",
      data: [
        { label: "Bottom", value: "bottom" },
        { label: "Top", value: "top" },
        { label: "Right", value: "right" },
        { label: "Left", value: "left" }
      ]
    },
    {
      name: "placement",
      type: "select",
      initialValue: "start",
      defaultValue: "start",
      data: [
        { label: "Start", value: "start" },
        { label: "Center", value: "center" },
        { label: "End", value: "end" }
      ]
    },
    {
      name: "gutter",
      type: "number",
      initialValue: 5,
      defaultValue: 5,
      max: 20,
      min: -20
    },
    {
      name: "withArrow",
      type: "boolean",
      initialValue: false,
      defaultValue: false
    }
  ]
};

export { positionConfigurator };
//# sourceMappingURL=positionConfigurator.js.map
