'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var dayjs = require('dayjs');
var dates = require('@mantine/dates');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var dayjs__default = /*#__PURE__*/_interopDefaultLegacy(dayjs);

const code = `
<DatePicker
  placeholder="Pick date"
  label="Event date"
  minDate={dayjs(new Date()).startOf('month').add(5, 'days').toDate()}
  maxDate={dayjs(new Date()).endOf('month').subtract(5, 'days').toDate()}
/>
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement("div", {
    style: { maxWidth: 340, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React__default.createElement(dates.DatePicker, {
    placeholder: "Pick date",
    label: "Event date",
    minDate: dayjs__default(new Date()).startOf("month").add(5, "days").toDate(),
    maxDate: dayjs__default(new Date()).endOf("month").subtract(5, "days").toDate()
  }));
}
const boundaries = {
  type: "demo",
  code,
  component: Demo
};

exports.boundaries = boundaries;
//# sourceMappingURL=boundaries.js.map
