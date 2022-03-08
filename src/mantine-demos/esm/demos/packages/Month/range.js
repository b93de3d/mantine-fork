import React from 'react';
import { Group } from '@mantine/core';
import dayjs from 'dayjs';
import { Month } from '@mantine/dates';

const code = `
const range = [
  dayjs(new Date()).startOf('month').toDate(),
  dayjs(new Date()).startOf('month').add(4, 'days').toDate(),
];

<Month range={range} month={new Date()} />
`;
function Demo() {
  const range2 = [
    dayjs(new Date()).startOf("month").toDate(),
    dayjs(new Date()).startOf("month").add(4, "days").toDate()
  ];
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Month, {
    range: range2,
    month: new Date()
  }));
}
const range = {
  type: "demo",
  code,
  component: Demo
};

export { range };
//# sourceMappingURL=range.js.map
