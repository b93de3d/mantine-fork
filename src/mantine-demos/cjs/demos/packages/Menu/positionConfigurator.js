'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var _menuItems = require('./_menu-items.js');

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
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Menu, __spreadValues({
    opened: true,
    trapFocus: false
  }, props), _menuItems.menuItems));
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

exports.positionConfigurator = positionConfigurator;
//# sourceMappingURL=positionConfigurator.js.map
