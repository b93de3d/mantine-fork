'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<NumberInput label="By default controls are visible" />

<NumberInput
  hideControls
  label="Disable them with hideControls prop"
/>

<NumberInput
  label="Disabled"
  disabled
  label="Controls also not rendered when input is disabled"
/>
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement("div", {
    style: { maxWidth: 420, margin: "auto" }
  }, /* @__PURE__ */ React__default.createElement(core.NumberInput, {
    label: "By default controls are visible",
    placeholder: "Controls are visible"
  }), /* @__PURE__ */ React__default.createElement(core.NumberInput, {
    style: { marginTop: 15 },
    hideControls: true,
    label: "Disable them with hideControls prop",
    placeholder: "Controls are disabled"
  }), /* @__PURE__ */ React__default.createElement(core.NumberInput, {
    style: { marginTop: 15 },
    disabled: true,
    label: "Controls also not rendered when input is disabled",
    placeholder: "Input disabled"
  }));
}
const controls = {
  type: "demo",
  code,
  component: Demo
};

exports.controls = controls;
//# sourceMappingURL=controls.js.map
