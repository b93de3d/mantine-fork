'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<Autocomplete
  label="Only 2 options at a time"
  placeholder="Your favorite framework"
  limit={2}
  data={['React', 'Angular', 'Svelte', 'Vue']}
/>
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement("div", {
    style: { maxWidth: 320, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React__default.createElement(core.Autocomplete, {
    label: "Only 2 options at a time",
    placeholder: "Your favorite framework",
    limit: 2,
    data: ["React", "Angular", "Svelte", "Vue"]
  }));
}
const limit = {
  type: "demo",
  code,
  component: Demo
};

exports.limit = limit;
//# sourceMappingURL=limit.js.map
