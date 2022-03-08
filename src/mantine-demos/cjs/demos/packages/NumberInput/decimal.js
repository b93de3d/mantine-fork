'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<NumberInput
  label="Number input with decimal steps"
  defaultValue={0.05}
  precision={2}
  min={-1}
  step={0.05}
  max={1}
/>
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement("div", {
    style: { maxWidth: 320, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React__default.createElement(core.NumberInput, {
    label: "Number input with decimal steps",
    placeholder: "Decimal steps",
    defaultValue: 0.05,
    precision: 2,
    min: -1,
    step: 0.05,
    max: 1
  }));
}
const decimal = {
  type: "demo",
  code,
  component: Demo
};

exports.decimal = decimal;
//# sourceMappingURL=decimal.js.map
