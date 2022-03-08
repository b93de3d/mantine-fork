'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<Anchor href="https://mantine.dev/" target="_blank">Mantine docs</Anchor>
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Anchor, {
    href: "https://mantine.dev/",
    target: "_blank"
  }, "Mantine docs");
}
const usage = {
  type: "demo",
  code,
  component: Demo
};

exports.usage = usage;
//# sourceMappingURL=usage.js.map
