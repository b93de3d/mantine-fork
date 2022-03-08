'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<MultiSelect
  label="MultiSelect with disabled items"
  placeholder="Select items"
  data={[
    { value: 'react', label: 'React' },
    { value: 'ng', label: 'Angular', disabled: true },
    { value: 'svelte', label: 'Svelte' },
    { value: 'vue', label: 'Vue', disabled: true },
  ]}
/>
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement("div", {
    style: { maxWidth: 400, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React__default.createElement(core.MultiSelect, {
    label: "MultiSelect with disabled items",
    placeholder: "Select items",
    data: [
      { value: "react", label: "React" },
      { value: "ng", label: "Angular", disabled: true },
      { value: "svelte", label: "Svelte" },
      { value: "vue", label: "Vue", disabled: true }
    ]
  }));
}
const disabledItems = {
  type: "demo",
  code,
  component: Demo
};

exports.Demo = Demo;
exports.disabledItems = disabledItems;
//# sourceMappingURL=disabledItems.js.map
