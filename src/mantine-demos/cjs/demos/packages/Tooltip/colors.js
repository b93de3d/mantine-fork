'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function Demo() {
  const colors2 = core.MANTINE_COLORS.map((color) => /* @__PURE__ */ React__default.createElement(core.Tooltip, {
    key: color,
    color,
    label: hooks.upperFirst(color),
    withArrow: true
  }, /* @__PURE__ */ React__default.createElement(core.Badge, {
    color
  }, hooks.upperFirst(color))));
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, colors2);
}
const colors = {
  type: "demo",
  component: Demo
};

exports.Demo = Demo;
exports.colors = colors;
//# sourceMappingURL=colors.js.map
