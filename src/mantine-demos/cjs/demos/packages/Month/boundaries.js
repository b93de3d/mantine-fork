'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var dates = require('@mantine/dates');
var dayjs = require('dayjs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var dayjs__default = /*#__PURE__*/_interopDefaultLegacy(dayjs);

const code = `
import { useState } from 'react';
import dayjs from 'dayjs';
import { Month } from '@mantine/dates';

function Demo() {
  const initialDate = dayjs(new Date()).startOf('month').add(10, 'days').toDate();
  const [value, setValue] = useState(initialDate);

  return (
    <Month
      month={value}
      value={value}
      onChange={setValue}
      minDate={dayjs(new Date()).startOf('month').add(5, 'days').toDate()}
      maxDate={dayjs(new Date()).endOf('month').subtract(5, 'days').toDate()}
    />
  );
}
`;
function Demo() {
  const initialDate = dayjs__default(new Date()).startOf("month").add(10, "days").toDate();
  const [value, setValue] = React.useState(initialDate);
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(dates.Month, {
    month: value,
    value,
    onChange: setValue,
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
