'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<ColorInput disallowInput />
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement("div", {
    style: { maxWidth: 320, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React__default.createElement(core.ColorInput, {
    disallowInput: true,
    placeholder: "Pick color",
    label: "Your favorite color"
  }));
}
const readOnly = {
  type: "demo",
  component: Demo,
  code
};

exports.readOnly = readOnly;
//# sourceMappingURL=readOnly.js.map
