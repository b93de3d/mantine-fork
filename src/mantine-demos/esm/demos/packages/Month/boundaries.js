import React, { useState } from 'react';
import { Group } from '@mantine/core';
import { Month } from '@mantine/dates';
import dayjs from 'dayjs';

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
  const initialDate = dayjs(new Date()).startOf("month").add(10, "days").toDate();
  const [value, setValue] = useState(initialDate);
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Month, {
    month: value,
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
