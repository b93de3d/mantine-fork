'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<JsonInput
  label="Your package.json"
  placeholder="Textarea will autosize to fit the content"
  validationError="Invalid json"
  formatOnBlur
  autosize
  minRows={4}
/>
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement("div", {
    style: { maxWidth: 400, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React__default.createElement(core.JsonInput, {
    label: "Your package.json",
    placeholder: "Textarea will autosize to fit the content",
    validationError: "Invalid json",
    formatOnBlur: true,
    autosize: true,
    minRows: 4
  }));
}
const usage = {
  type: "demo",
  code,
  component: Demo
};

exports.usage = usage;
//# sourceMappingURL=usage.js.map
