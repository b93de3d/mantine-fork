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
  return /* @__PURE__ */ React__default.createElement("div", null, /* @__PURE__ */ React__default.createElement(core.Skeleton, __spreadValues({
    height: 50,
    circle: true,
    mb: "xl"
  }, props)), /* @__PURE__ */ React__default.createElement(core.Skeleton, __spreadValues({
    height: 8,
    radius: "xl"
  }, props)), /* @__PURE__ */ React__default.createElement(core.Skeleton, __spreadValues({
    height: 8,
    mt: 6,
    radius: "xl"
  }, props)), /* @__PURE__ */ React__default.createElement(core.Skeleton, __spreadValues({
    height: 8,
    mt: 6,
    width: "70%",
    radius: "xl"
  }, props)));
}
const codeTemplate = (props) => `
<Skeleton${props} height={50} circle mb="xl" />
<Skeleton${props} height={8} radius="xl" />
<Skeleton${props} height={8} mt={6} radius="xl" />
<Skeleton${props} height={8} mt={6} width="70%" radius="xl" />
`;
const configurator = {
  type: "configurator",
  component: Wrapper,
  codeTemplate,
  configurator: [{ name: "animate", type: "boolean", initialValue: true, defaultValue: true }]
};

exports.configurator = configurator;
//# sourceMappingURL=configurator.js.map
