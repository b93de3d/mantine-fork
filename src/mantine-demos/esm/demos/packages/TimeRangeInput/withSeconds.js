import dayjs from 'dayjs';
import React from 'react';
import { Container } from '@mantine/core';
import { TimeRangeInput } from '@mantine/dates';

const code = `
<TimeRangeInput withSeconds />
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Container, {
    size: 340
  }, /* @__PURE__ */ React.createElement(TimeRangeInput, {
    label: "Appointment time",
    withSeconds: true,
    defaultValue: [new Date(), dayjs(new Date()).add(30, "minutes").toDate()]
  }));
}
const withSeconds = {
  type: "demo",
  code,
  component: Demo
};

export { withSeconds };
//# sourceMappingURL=withSeconds.js.map
