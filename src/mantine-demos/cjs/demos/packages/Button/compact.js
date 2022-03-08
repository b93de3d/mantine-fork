'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<Button compact>My compact button</Button>
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    compact: true
  }, "Compact filled button"), /* @__PURE__ */ React__default.createElement(core.Button, {
    compact: true,
    variant: "light"
  }, "Compact light button"), /* @__PURE__ */ React__default.createElement(core.Button, {
    compact: true,
    variant: "outline"
  }, "Compact outline button")));
}
const compact = {
  type: "demo",
  code,
  component: Demo
};

exports.compact = compact;
//# sourceMappingURL=compact.js.map
