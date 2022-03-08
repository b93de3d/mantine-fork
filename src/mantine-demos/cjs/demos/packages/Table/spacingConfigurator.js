'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var data = require('./data.js');

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
  return /* @__PURE__ */ React__default.createElement(core.Table, __spreadValues({}, props), /* @__PURE__ */ React__default.createElement("thead", null, /* @__PURE__ */ React__default.createElement("tr", null, /* @__PURE__ */ React__default.createElement("th", null, "Position"), /* @__PURE__ */ React__default.createElement("th", null, "Name"), /* @__PURE__ */ React__default.createElement("th", null, "Symbol"), /* @__PURE__ */ React__default.createElement("th", null, "Mass"))), /* @__PURE__ */ React__default.createElement("tbody", null, data.elements.map((element) => /* @__PURE__ */ React__default.createElement("tr", {
    key: element.name
  }, /* @__PURE__ */ React__default.createElement("td", null, element.position), /* @__PURE__ */ React__default.createElement("td", null, element.name), /* @__PURE__ */ React__default.createElement("td", null, element.symbol), /* @__PURE__ */ React__default.createElement("td", null, element.mass)))));
}
const codeTemplate = (props) => `
<Table${props}>
  /* {...rows} */
</Table>
`;
const spacingConfigurator = {
  type: "configurator",
  component: Wrapper,
  codeTemplate,
  configurator: [
    { name: "horizontalSpacing", type: "size", defaultValue: "xs", initialValue: "xs" },
    { name: "verticalSpacing", type: "size", initialValue: "xs" }
  ]
};

exports.spacingConfigurator = spacingConfigurator;
//# sourceMappingURL=spacingConfigurator.js.map
