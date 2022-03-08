'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<TextInput disabled />
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement("div", {
    style: { maxWidth: 320, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React__default.createElement(core.TextInput, {
    label: "Disabled without value",
    placeholder: "Your email",
    disabled: true
  }), /* @__PURE__ */ React__default.createElement(core.TextInput, {
    style: { marginTop: 15 },
    label: "Disabled with value",
    placeholder: "Your email",
    disabled: true,
    value: "myemail@gmail.com"
  }));
}
const disabled = {
  type: "demo",
  code,
  component: Demo
};

exports.disabled = disabled;
//# sourceMappingURL=disabled.js.map
