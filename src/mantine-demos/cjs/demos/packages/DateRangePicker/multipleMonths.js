'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var dates = require('@mantine/dates');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<DateRangePicker amountOfMonths={2} label="2 months" />
<DateRangePicker amountOfMonths={3} label="3 months" />
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement("div", {
    style: { maxWidth: 340, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React__default.createElement(dates.DateRangePicker, {
    amountOfMonths: 2,
    label: "2 months",
    placeholder: "Two months"
  }), /* @__PURE__ */ React__default.createElement(dates.DateRangePicker, {
    amountOfMonths: 3,
    label: "3 months",
    placeholder: "Three months",
    mt: "md"
  }));
}
const multipleMonths = {
  type: "demo",
  code,
  component: Demo
};

exports.multipleMonths = multipleMonths;
//# sourceMappingURL=multipleMonths.js.map
