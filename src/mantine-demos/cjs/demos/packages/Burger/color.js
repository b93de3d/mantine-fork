'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var _base = require('./_base.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<Burger />
<Burger color="#fe6734" />
<Burger color="#45f50d" />
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(_base.DemoBase, null), /* @__PURE__ */ React__default.createElement(_base.DemoBase, {
    color: "#fe6734"
  }), /* @__PURE__ */ React__default.createElement(_base.DemoBase, {
    color: "#45f50d"
  }));
}
const color = {
  type: "demo",
  code,
  component: Demo
};

exports.Demo = Demo;
exports.color = color;
//# sourceMappingURL=color.js.map
