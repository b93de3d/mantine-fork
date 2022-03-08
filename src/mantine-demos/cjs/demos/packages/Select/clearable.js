'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<Select
  label="Your favorite framework/library"
  placeholder="Pick one"
  clearable
  data={data}
/>

<Select
  label="Your favorite framework/library"
  placeholder="Pick one"
  searchable
  clearable
  data={data}
/>
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement("div", {
    style: { maxWidth: 320, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React__default.createElement(core.Select, {
    label: "Your favorite framework/library",
    placeholder: "Pick one",
    clearable: true,
    data: [
      { value: "react", label: "React" },
      { value: "ng", label: "Angular" },
      { value: "svelte", label: "Svelte" },
      { value: "vue", label: "Vue" }
    ]
  }), /* @__PURE__ */ React__default.createElement(core.Select, {
    label: "Your favorite framework/library",
    placeholder: "Pick one",
    clearable: true,
    searchable: true,
    style: { marginTop: 15 },
    data: [
      { value: "react", label: "React" },
      { value: "ng", label: "Angular" },
      { value: "svelte", label: "Svelte" },
      { value: "vue", label: "Vue" }
    ]
  }));
}
const clearable = {
  type: "demo",
  code,
  component: Demo
};

exports.clearable = clearable;
//# sourceMappingURL=clearable.js.map
