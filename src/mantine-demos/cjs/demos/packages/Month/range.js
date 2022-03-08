'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var dayjs = require('dayjs');
var dates = require('@mantine/dates');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var dayjs__default = /*#__PURE__*/_interopDefaultLegacy(dayjs);

const code = `
const range = [
  dayjs(new Date()).startOf('month').toDate(),
  dayjs(new Date()).startOf('month').add(4, 'days').toDate(),
];

<Month range={range} month={new Date()} />
`;
function Demo() {
  const range2 = [
    dayjs__default(new Date()).startOf("month").toDate(),
    dayjs__default(new Date()).startOf("month").add(4, "days").toDate()
  ];
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(dates.Month, {
    range: range2,
    month: new Date()
  }));
}
const range = {
  type: "demo",
  code,
  component: Demo
};

exports.range = range;
//# sourceMappingURL=range.js.map
