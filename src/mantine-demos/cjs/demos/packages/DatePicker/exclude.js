'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var dates = require('@mantine/dates');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<DatePicker
  excludeDate={(date) => date.getDay() === 0 || date.getDay() === 6}
/>
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement("div", {
    style: { maxWidth: 340, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React__default.createElement(dates.DatePicker, {
    placeholder: "Pick date",
    label: "Event date",
    excludeDate: (date) => date.getDay() === 0 || date.getDay() === 6
  }));
}
const exclude = {
  type: "demo",
  code,
  component: Demo
};

exports.exclude = exclude;
//# sourceMappingURL=exclude.js.map
