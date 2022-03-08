'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<Select
  data={data}
  label="Select with native scrollbars"
  placeholder="Dropdown with native scrollbars"
  dropdownComponent="div"
/>
`;
const data = Array(50).fill(0).map((_, index) => ({
  value: `${index}`,
  label: `Item ${index}`
}));
function Demo() {
  return /* @__PURE__ */ React__default.createElement("div", {
    style: { maxWidth: 320, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React__default.createElement(core.Select, {
    data,
    label: "Select with native scrollbars",
    placeholder: "Dropdown with native scrollbars",
    dropdownComponent: "div"
  }));
}
const scrollbars = {
  type: "demo",
  component: Demo,
  code
};

exports.scrollbars = scrollbars;
//# sourceMappingURL=scrollbars.js.map
