'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
const data = Array(50).fill(0).map((_, index) => \`Item \${index}\`);

<MultiSelect
  data={data}
  label="Large data set"
  placeholder="Scroll to see all options"
  maxDropdownHeight={160}
/>
`;
const data = Array(50).fill(0).map((_, index) => `Item ${index}`);
function Demo() {
  return /* @__PURE__ */ React__default.createElement("div", {
    style: { maxWidth: 400, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React__default.createElement(core.MultiSelect, {
    data,
    label: "Large data set",
    placeholder: "Scroll to see all options",
    maxDropdownHeight: 160
  }));
}
const large = {
  type: "demo",
  code,
  component: Demo
};

exports.large = large;
//# sourceMappingURL=large.js.map
