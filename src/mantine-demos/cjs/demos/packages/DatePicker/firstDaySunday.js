'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var dates = require('@mantine/dates');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<DatePicker firstDayOfWeek="sunday" />
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement("div", {
    style: { maxWidth: 340, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React__default.createElement(dates.DatePicker, {
    label: "Sunday as first day of week",
    placeholder: "Pick date",
    firstDayOfWeek: "sunday"
  }));
}
const firstDaySunday = {
  type: "demo",
  code,
  component: Demo
};

exports.firstDaySunday = firstDaySunday;
//# sourceMappingURL=firstDaySunday.js.map
