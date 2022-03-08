import React, { useState } from 'react';
import dayjs from 'dayjs';
import { Group } from '@mantine/core';
import { Calendar } from '@mantine/dates';

const code = `
<Calendar
  minDate={dayjs(new Date()).startOf('month').add(5, 'days').toDate()}
  maxDate={dayjs(new Date()).endOf('month').subtract(5, 'days').toDate()}
/>
`;
function Demo() {
  const [value, setValue] = useState(null);
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Calendar, {
    value,
    onChange: setValue,
    minDate: dayjs(new Date()).startOf("month").add(5, "days").toDate(),
    maxDate: dayjs(new Date()).endOf("month").subtract(5, "days").toDate()
  }));
}
const boundaries = {
  type: "demo",
  code,
  component: Demo
};

export { boundaries };
//# sourceMappingURL=boundaries.js.map
