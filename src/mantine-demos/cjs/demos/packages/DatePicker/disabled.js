'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var dates = require('@mantine/dates');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<DatePicker disabled />
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement("div", {
    style: { maxWidth: 320, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React__default.createElement(dates.DatePicker, {
    label: "Disabled without value",
    placeholder: "Your birthday",
    disabled: true
  }), /* @__PURE__ */ React__default.createElement(dates.DatePicker, {
    style: { marginTop: 15 },
    label: "Disabled with value",
    placeholder: "Your birthday",
    disabled: true,
    value: new Date()
  }));
}
const disabled = {
  type: "demo",
  code,
  component: Demo
};

exports.disabled = disabled;
//# sourceMappingURL=disabled.js.map
