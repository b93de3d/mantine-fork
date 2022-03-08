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
function Wrapper(props) {
  return /* @__PURE__ */ React__default.createElement("div", {
    style: { padding: 20 }
  }, /* @__PURE__ */ React__default.createElement(core.Paper, __spreadValues({
    style: { maxWidth: 400, margin: "auto" }
  }, props), /* @__PURE__ */ React__default.createElement(core.Text, null, "Paper is the most basic ui component"), /* @__PURE__ */ React__default.createElement(core.Text, null, "Use it to create cards, dropdowns, modals and other components that require background with shadow")));
}
const codeTemplate = (props) => `<Paper${props}>
  <Text>Paper is the most basic ui component</Text>
  <Text>
    Use it to create cards, dropdowns, modals and other components that require background
    with shadow
  </Text>
</Paper>`;
const configurator = {
  type: "configurator",
  component: Wrapper,
  codeTemplate,
  background: (colorScheme) => colorScheme === "dark" ? core.DEFAULT_THEME.colors.dark[8] : core.DEFAULT_THEME.colors.gray[0],
  configurator: [
    { name: "padding", type: "size", initialValue: "md", defaultValue: 0 },
    { name: "shadow", type: "size", initialValue: "xs", defaultValue: "none" },
    { name: "radius", type: "size", initialValue: "sm", defaultValue: "sm" },
    { name: "withBorder", type: "boolean", initialValue: false, defaultValue: false }
  ]
};

exports.configurator = configurator;
//# sourceMappingURL=configurator.js.map
