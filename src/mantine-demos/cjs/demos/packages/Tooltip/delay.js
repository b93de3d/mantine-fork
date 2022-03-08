'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<Tooltip label="Ctrl + J" delay={500}>
  <Button variant="outline">Toggle color scheme</Button>
</Tooltip>
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Tooltip, {
    label: "Ctrl + J",
    delay: 500
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    variant: "outline"
  }, "Toggle color scheme")));
}
const delay = {
  type: "demo",
  code,
  component: Demo
};

exports.Demo = Demo;
exports.delay = delay;
//# sourceMappingURL=delay.js.map
