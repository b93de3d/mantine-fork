'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<Text color="dimmed">Dimmed text</Text>
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Text, {
    color: "dimmed"
  }, "Dimmed text");
}
const dimmed = {
  type: "demo",
  code,
  component: Demo
};

exports.dimmed = dimmed;
//# sourceMappingURL=dimmed.js.map
