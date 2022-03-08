'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<ColorInput disabled />
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement("div", {
    style: { maxWidth: 320, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React__default.createElement(core.ColorInput, {
    label: "Disabled without value",
    placeholder: "Your favorite color",
    disabled: true
  }), /* @__PURE__ */ React__default.createElement(core.ColorInput, {
    style: { marginTop: 15 },
    label: "Disabled with value",
    placeholder: "Your favorite color",
    disabled: true,
    value: "#EFD679"
  }));
}
const disabled = {
  type: "demo",
  code,
  component: Demo
};

exports.disabled = disabled;
//# sourceMappingURL=disabled.js.map
