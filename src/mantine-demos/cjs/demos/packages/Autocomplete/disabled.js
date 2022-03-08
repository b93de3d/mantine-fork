'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<Autocomplete disabled />
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement("div", {
    style: { maxWidth: 320, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React__default.createElement(core.Autocomplete, {
    data: ["React", "Angular", "Svelte", "Vue"],
    label: "Disabled without value",
    placeholder: "Pick all that you like",
    disabled: true
  }), /* @__PURE__ */ React__default.createElement(core.Autocomplete, {
    style: { marginTop: 15 },
    data: ["React", "Angular", "Svelte", "Vue"],
    label: "Disabled with value",
    placeholder: "Pick all that you like",
    disabled: true,
    value: "React"
  }));
}
const disabled = {
  type: "demo",
  code,
  component: Demo
};

exports.disabled = disabled;
//# sourceMappingURL=disabled.js.map
