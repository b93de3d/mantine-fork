'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var _data = require('./_data.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<MultiSelect
  data={data}
  label="Your favorite frameworks/libraries"
  placeholder="Pick all that you like"
  defaultValue={['react', 'next']}
  clearButtonLabel="Clear selection"
  clearable
/>
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement("div", {
    style: { maxWidth: 400, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React__default.createElement(core.MultiSelect, {
    data: _data.data,
    label: "Your favorite frameworks/libraries",
    placeholder: "Pick all that you like",
    defaultValue: ["react", "next"],
    clearButtonLabel: "Clear selection",
    clearable: true
  }));
}
const clearable = {
  type: "demo",
  code,
  component: Demo
};

exports.clearable = clearable;
//# sourceMappingURL=clearable.js.map
