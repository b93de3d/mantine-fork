'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
const data = Array(50)
.fill(0)
.map((_, index) => ({
  value: \`\${index}\`,
  label: \`Item \${index}\`,
}));

<Select
  label="What item is the best?"
  placeholder="Pick one"
  searchable
  nothingFound="No options"
  maxDropdownHeight={280}
  data={data}
/>
`;
function Demo() {
  const data = Array(50).fill(0).map((_, index) => ({
    value: `${index}`,
    label: `Item ${index}`
  }));
  return /* @__PURE__ */ React__default.createElement("div", {
    style: { maxWidth: 320, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React__default.createElement(core.Select, {
    label: "What item is the best?",
    placeholder: "Pick one",
    searchable: true,
    nothingFound: "No options",
    maxDropdownHeight: 280,
    data
  }));
}
const large = {
  type: "demo",
  code,
  component: Demo
};

exports.large = large;
//# sourceMappingURL=large.js.map
