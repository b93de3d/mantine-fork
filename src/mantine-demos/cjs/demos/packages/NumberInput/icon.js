'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var tablerIconsReact = require('tabler-icons-react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<NumberInput icon={<Medal />} />
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement("div", {
    style: { maxWidth: 320, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React__default.createElement(core.NumberInput, {
    label: "Age when you graduated",
    placeholder: "Age when you graduated",
    defaultValue: 22,
    min: 0,
    max: 120,
    icon: /* @__PURE__ */ React__default.createElement(tablerIconsReact.Medal, {
      size: 18
    })
  }));
}
const icon = {
  type: "demo",
  code,
  component: Demo
};

exports.icon = icon;
//# sourceMappingURL=icon.js.map
