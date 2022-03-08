'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<MultiSelect
  label="Your favorite Rick and Morty character"
  placeholder="Pick all that you like"
  data={[
    { value: 'rick', label: 'Rick', group: 'Used to be a pickle' },
    { value: 'morty', label: 'Morty', group: 'Never was a pickle' },
    { value: 'beth', label: 'Beth', group: 'Never was a pickle' },
    { value: 'summer', label: 'Summer', group: 'Never was a pickle' },
  ]}
/>
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement("div", {
    style: { maxWidth: 400, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React__default.createElement(core.MultiSelect, {
    label: "Your favorite Rick and Morty character",
    placeholder: "Pick all that you like",
    data: [
      { value: "rick", label: "Rick", group: "Used to be a pickle" },
      { value: "morty", label: "Morty", group: "Never was a pickle" },
      { value: "beth", label: "Beth", group: "Never was a pickle" },
      { value: "summer", label: "Summer", group: "Never was a pickle" }
    ]
  }));
}
const groups = {
  type: "demo",
  code,
  component: Demo
};

exports.Demo = Demo;
exports.groups = groups;
//# sourceMappingURL=groups.js.map
