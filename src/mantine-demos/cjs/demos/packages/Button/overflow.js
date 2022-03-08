'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<div style={{ width: 200 }}>
  <Button variant="filled" fullWidth>
    Full width button
  </Button>
</div>

<div style={{ width: 120 }}>
  <Button variant="filled" fullWidth>
    Button with overflow
  </Button>
</div>
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Group, null, /* @__PURE__ */ React__default.createElement("div", {
    style: { width: 200 }
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    fullWidth: true,
    variant: "outline"
  }, "Full width button")), /* @__PURE__ */ React__default.createElement("div", {
    style: { width: 120 }
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    fullWidth: true,
    variant: "outline"
  }, "Button with overflow")));
}
const overflow = {
  type: "demo",
  code,
  component: Demo
};

exports.overflow = overflow;
//# sourceMappingURL=overflow.js.map
