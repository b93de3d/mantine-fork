import React from 'react';
import dayjs from 'dayjs';
import { DatePicker } from '@mantine/dates';

const code = `
<DatePicker
  placeholder="Pick date"
  label="Event date"
  minDate={dayjs(new Date()).startOf('month').add(5, 'days').toDate()}
  maxDate={dayjs(new Date()).endOf('month').subtract(5, 'days').toDate()}
/>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 340, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React.createElement(DatePicker, {
    placeholder: "Pick date",
    label: "Event date",
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
