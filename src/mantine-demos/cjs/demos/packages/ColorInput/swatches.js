'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<ColorInput format="hex" swatches={[${Object.keys(core.DEFAULT_THEME.colors).map((color) => `'${core.DEFAULT_THEME.colors[color][6]}'`)}]} />
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement("div", {
    style: { maxWidth: 320, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React__default.createElement(core.ColorInput, {
    placeholder: "Pick color",
    label: "Your favorite color",
    swatches: Object.keys(core.DEFAULT_THEME.colors).map((color) => core.DEFAULT_THEME.colors[color][6])
  }));
}
const swatches = {
  type: "demo",
  component: Demo,
  code
};

exports.swatches = swatches;
//# sourceMappingURL=swatches.js.map
