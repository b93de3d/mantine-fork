'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var dates = require('@mantine/dates');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
// Error as boolean \u2013 red border color
<DatePicker error />

// Error as React node \u2013 red border color and message below input
<DatePicker error="You must be at least 18 to register" />
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement("div", {
    style: { maxWidth: 320, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React__default.createElement(dates.DatePicker, {
    label: "Your birthday",
    placeholder: "Your birthday",
    error: true
  }), /* @__PURE__ */ React__default.createElement(dates.DatePicker, {
    style: { marginTop: 15 },
    label: "Your birthday",
    placeholder: "Your birthday",
    error: "You must be at least 18 to register"
  }));
}
const validation = {
  type: "demo",
  code,
  component: Demo
};

exports.validation = validation;
//# sourceMappingURL=validation.js.map
