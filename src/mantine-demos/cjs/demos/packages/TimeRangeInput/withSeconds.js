'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var dayjs = require('dayjs');
var React = require('react');
var core = require('@mantine/core');
var dates = require('@mantine/dates');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var dayjs__default = /*#__PURE__*/_interopDefaultLegacy(dayjs);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<TimeRangeInput withSeconds />
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Container, {
    size: 340
  }, /* @__PURE__ */ React__default.createElement(dates.TimeRangeInput, {
    label: "Appointment time",
    withSeconds: true,
    defaultValue: [new Date(), dayjs__default(new Date()).add(30, "minutes").toDate()]
  }));
}
const withSeconds = {
  type: "demo",
  code,
  component: Demo
};

exports.withSeconds = withSeconds;
//# sourceMappingURL=withSeconds.js.map
