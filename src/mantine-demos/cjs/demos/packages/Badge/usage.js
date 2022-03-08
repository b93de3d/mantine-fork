'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<Badge>Default light badge</Badge>
<Badge variant="dot">Dot badge</Badge>
<Badge variant="outline">Outline badge</Badge>
<Badge variant="filled">Filled badge</Badge>
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Badge, null, "Default light badge"), /* @__PURE__ */ React__default.createElement(core.Badge, {
    variant: "dot"
  }, "Dot badge"), /* @__PURE__ */ React__default.createElement(core.Badge, {
    variant: "outline"
  }, "Outline badge"), /* @__PURE__ */ React__default.createElement(core.Badge, {
    variant: "filled"
  }, "Filled badge"));
}
const usage = {
  type: "demo",
  code,
  component: Demo
};

exports.usage = usage;
//# sourceMappingURL=usage.js.map
