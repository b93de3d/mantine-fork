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
  return /* @__PURE__ */ React__default.createElement(core.Group, __spreadValues({}, props), /* @__PURE__ */ React__default.createElement(core.Button, {
    variant: "outline"
  }, "1"), /* @__PURE__ */ React__default.createElement(core.Button, {
    variant: "outline"
  }, "2"), /* @__PURE__ */ React__default.createElement(core.Button, {
    variant: "outline"
  }, "3"));
}
const codeTemplate = (props) => `<Group${props}>
  <Button variant="outline">1</Button>
  <Button variant="outline">2</Button>
  <Button variant="outline">3</Button>
</Group>`;
const configurator = {
  type: "configurator",
  component: Wrapper,
  codeTemplate,
  configurator: [
    {
      name: "position",
      type: "select",
      data: [
        { label: "left", value: "left" },
        { label: "center", value: "center" },
        { label: "right", value: "right" },
        { label: "apart", value: "apart" }
      ],
      initialValue: "left",
      defaultValue: "left"
    },
    {
      name: "direction",
      type: "segmented",
      data: [
        { label: "row", value: "row" },
        { label: "column", value: "column" }
      ],
      initialValue: "row",
      defaultValue: "row"
    },
    { name: "spacing", type: "size", initialValue: "md", defaultValue: "md" },
    { name: "grow", type: "boolean", initialValue: false, defaultValue: false }
  ]
};

exports.configurator = configurator;
//# sourceMappingURL=configurator.js.map
