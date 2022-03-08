'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
function Wrapper(props) {
  return /* @__PURE__ */ React__default.createElement(core.Tabs, __spreadProps(__spreadValues({}, props), {
    styles: { body: { paddingTop: 5 } }
  }), /* @__PURE__ */ React__default.createElement(core.Tabs.Tab, {
    label: "First"
  }, "First tab content"), /* @__PURE__ */ React__default.createElement(core.Tabs.Tab, {
    label: "Second"
  }, "Second tab content"), /* @__PURE__ */ React__default.createElement(core.Tabs.Tab, {
    label: "Third"
  }, "Third tab content"));
}
const codeTemplate = (props) => `<Tabs${props}>
  <Tabs.Tab label="First">First tab content</Tabs.Tab>
  <Tabs.Tab label="Second">Second tab content</Tabs.Tab>
  <Tabs.Tab label="Third">Third tab content</Tabs.Tab>
</Tabs>`;
const positionConfigurator = {
  type: "configurator",
  component: Wrapper,
  codeTemplate,
  configurator: [
    { name: "grow", type: "boolean", defaultValue: false },
    {
      name: "position",
      type: "select",
      initialValue: "left",
      defaultValue: "left",
      data: [
        { label: "left", value: "left" },
        { label: "right", value: "right" },
        { label: "center", value: "center" },
        { label: "apart", value: "apart" }
      ]
    },
    {
      name: "variant",
      type: "segmented",
      initialValue: "default",
      defaultValue: "default",
      data: [
        { value: "default", label: "Default" },
        { value: "outline", label: "Outline" },
        { value: "pills", label: "Pills" }
      ]
    }
  ]
};

exports.positionConfigurator = positionConfigurator;
//# sourceMappingURL=positionConfigurator.js.map
