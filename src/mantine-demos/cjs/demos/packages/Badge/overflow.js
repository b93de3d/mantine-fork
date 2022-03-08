'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<div style={{ width: 200 }}>
  <Badge variant="filled" fullWidth>
    Full width badge
  </Badge>
</div>

<div style={{ width: 120 }}>
  <Badge variant="filled" fullWidth>
    Badge with overflow
  </Badge>
</div>
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement("div", {
    style: { display: "flex" }
  }, /* @__PURE__ */ React__default.createElement("div", {
    style: { width: 200 }
  }, /* @__PURE__ */ React__default.createElement(core.Badge, {
    variant: "filled",
    fullWidth: true
  }, "Full width badge")), /* @__PURE__ */ React__default.createElement("div", {
    style: { width: 120, marginLeft: 15 }
  }, /* @__PURE__ */ React__default.createElement(core.Badge, {
    variant: "filled",
    fullWidth: true
  }, "Badge with overflow")));
}
const overflow = {
  type: "demo",
  code,
  component: Demo
};

exports.overflow = overflow;
//# sourceMappingURL=overflow.js.map
