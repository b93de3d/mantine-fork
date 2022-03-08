'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<ColorInput
  placeholder="Pick color"
  label="Your favorite color"
  disallowInput
  withPicker={false}
  swatches={[
    ...DEFAULT_THEME.colors.red,
    ...DEFAULT_THEME.colors.green,
    ...DEFAULT_THEME.colors.blue,
  ]}
/>
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement("div", {
    style: { maxWidth: 320, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React__default.createElement(core.ColorInput, {
    placeholder: "Pick color",
    label: "Your favorite color",
    disallowInput: true,
    withPicker: false,
    swatches: [
      ...core.DEFAULT_THEME.colors.red,
      ...core.DEFAULT_THEME.colors.green,
      ...core.DEFAULT_THEME.colors.blue
    ]
  }));
}
const swatchesOnly = {
  type: "demo",
  component: Demo,
  code
};

exports.swatchesOnly = swatchesOnly;
//# sourceMappingURL=swatchesOnly.js.map
