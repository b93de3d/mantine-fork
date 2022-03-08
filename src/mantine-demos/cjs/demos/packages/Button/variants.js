'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function Demo() {
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    variant: "subtle"
  }, "Subtle variant"), /* @__PURE__ */ React__default.createElement(core.Button, {
    variant: "light"
  }, "Light variant"), /* @__PURE__ */ React__default.createElement(core.Button, null, "Filled variant"), /* @__PURE__ */ React__default.createElement(core.Button, {
    variant: "outline"
  }, "Outline variant"), /* @__PURE__ */ React__default.createElement(core.Button, {
    variant: "default"
  }, "Default variant")));
}
const variants = {
  type: "demo",
  component: Demo
};

exports.variants = variants;
//# sourceMappingURL=variants.js.map
