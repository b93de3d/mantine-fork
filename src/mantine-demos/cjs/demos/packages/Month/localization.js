'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
require('dayjs/locale/ru');
var core = require('@mantine/core');
var dates = require('@mantine/dates');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useState } from 'react';
import 'dayjs/locale/ru';

function Demo() {
  const [value, setValue] = useState(new Date());
  return <Month locale="ru" month={value} value={value} onChange={setValue} />;
}
`;
function Demo() {
  const [value, setValue] = React.useState(new Date());
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(dates.Month, {
    month: value,
    value,
    onChange: setValue,
    locale: "ru"
  }));
}
const localization = {
  type: "demo",
  code,
  component: Demo
};

exports.localization = localization;
//# sourceMappingURL=localization.js.map
