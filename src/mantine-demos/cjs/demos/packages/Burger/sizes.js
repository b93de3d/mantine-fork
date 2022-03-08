'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var _base = require('./_base.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const items = core.MANTINE_SIZES.map((size) => /* @__PURE__ */ React__default.createElement(_base.DemoBase, {
  size,
  key: size
}));
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, items);
}
const sizes = {
  type: "demo",
  component: Demo
};

exports.Demo = Demo;
exports.sizes = sizes;
//# sourceMappingURL=sizes.js.map
