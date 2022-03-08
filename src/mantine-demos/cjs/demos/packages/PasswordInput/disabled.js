'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<PasswordInput disabled />
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement("div", {
    style: { maxWidth: 320, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React__default.createElement(core.PasswordInput, {
    label: "Disabled without value",
    placeholder: "Your password",
    disabled: true
  }), /* @__PURE__ */ React__default.createElement(core.PasswordInput, {
    style: { marginTop: 15 },
    label: "Disabled with value",
    placeholder: "Your password",
    disabled: true,
    value: "secret"
  }));
}
const disabled = {
  type: "demo",
  code,
  component: Demo
};

exports.disabled = disabled;
//# sourceMappingURL=disabled.js.map
