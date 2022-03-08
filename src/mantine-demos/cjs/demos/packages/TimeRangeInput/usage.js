'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var dayjs = require('dayjs');
var dates = require('@mantine/dates');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var dayjs__default = /*#__PURE__*/_interopDefaultLegacy(dayjs);

const code = `
import { useState } from 'react';
import dayjs from 'dayjs';
import { TimeRangeInput } from '@mantine/dates';

function Demo() {
  const now = new Date();
  const then = dayjs(now).add(30, 'minutes').toDate();
  const [value, setValue] = useState([now, then]);

  return <TimeRangeInput label="Appointment time" value={value} onChange={setValue} clearable />;
}
`;
function Demo() {
  const now = new Date();
  const then = dayjs__default(now).add(30, "minutes").toDate();
  const [value, setValue] = React.useState([now, then]);
  return /* @__PURE__ */ React__default.createElement("div", {
    style: { maxWidth: 340, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React__default.createElement(dates.TimeRangeInput, {
    label: "Appointment time",
    value,
    onChange: setValue,
    clearable: true
  }));
}
const usage = {
  type: "demo",
  code,
  component: Demo
};

exports.usage = usage;
//# sourceMappingURL=usage.js.map
