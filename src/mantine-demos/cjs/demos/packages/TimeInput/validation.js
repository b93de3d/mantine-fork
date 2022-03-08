'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var dates = require('@mantine/dates');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
// Error as boolean \u2013 red border color
<TimeInput error />

// Error as React node \u2013 red border color and message below input
<TimeInput error="It is not a valid time" />
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement("div", {
    style: { maxWidth: 320, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React__default.createElement(dates.TimeInput, {
    label: "Pick time",
    placeholder: "Pick time",
    error: true,
    defaultValue: new Date()
  }), /* @__PURE__ */ React__default.createElement(dates.TimeInput, {
    style: { marginTop: 15 },
    label: "Pick time",
    placeholder: "Pick time",
    error: "It is not a valid time",
    defaultValue: new Date()
  }));
}
const validation = {
  type: "demo",
  code,
  component: Demo
};

exports.validation = validation;
//# sourceMappingURL=validation.js.map
