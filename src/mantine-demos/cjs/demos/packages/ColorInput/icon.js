'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var radixIcons = require('@modulz/radix-icons');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
// Remove color preview
<ColorInput
  label="Without preview"
  placeholder="No color preview"
  withPreview={false}
/>

// Replace color preview with any React node
<ColorInput
  icon={<BlendingModeIcon />}
  label="With icon"
  placeholder="With icon"
/>
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement("div", {
    style: { maxWidth: 320, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React__default.createElement(core.ColorInput, {
    label: "Without preview",
    placeholder: "No color preview",
    withPreview: false
  }), /* @__PURE__ */ React__default.createElement(core.ColorInput, {
    style: { marginTop: 15 },
    icon: /* @__PURE__ */ React__default.createElement(radixIcons.BlendingModeIcon, null),
    label: "With icon",
    placeholder: "With icon"
  }));
}
const icon = {
  type: "demo",
  code,
  component: Demo
};

exports.icon = icon;
//# sourceMappingURL=icon.js.map
