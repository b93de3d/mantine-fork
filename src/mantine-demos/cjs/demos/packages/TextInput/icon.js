'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var tablerIconsReact = require('tabler-icons-react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<TextInput icon={<At />} />
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement("div", {
    style: { maxWidth: 320, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React__default.createElement(core.TextInput, {
    label: "Your email",
    placeholder: "Your email",
    icon: /* @__PURE__ */ React__default.createElement(tablerIconsReact.At, {
      size: 14
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
