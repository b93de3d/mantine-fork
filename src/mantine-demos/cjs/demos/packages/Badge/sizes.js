'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function Demo() {
  const sizes2 = core.MANTINE_SIZES.map((size) => /* @__PURE__ */ React__default.createElement(core.Badge, {
    key: size,
    size
  }, size, " size"));
  const radius = core.MANTINE_SIZES.map((size) => /* @__PURE__ */ React__default.createElement(core.Badge, {
    key: size,
    radius: size
  }, size, " radius"));
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement("div", {
    style: { display: "flex", flexDirection: "column", alignItems: "center" }
  }, /* @__PURE__ */ React__default.createElement(core.Text, {
    size: "lg",
    style: { marginBottom: 20 }
  }, "Predefined sizes from xs to xl:"), /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, sizes2)), /* @__PURE__ */ React__default.createElement("div", {
    style: { display: "flex", flexDirection: "column", alignItems: "center", marginTop: 40 }
  }, /* @__PURE__ */ React__default.createElement(core.Text, {
    size: "lg",
    style: { marginBottom: 20 }
  }, "Theme radius from xs to xl:"), /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, radius)));
}
const sizes = {
  type: "demo",
  component: Demo
};

exports.sizes = sizes;
//# sourceMappingURL=sizes.js.map
