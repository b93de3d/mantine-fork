import React from 'react';
import { CalendarIcon } from '@modulz/radix-icons';
import { DatePicker } from '@mantine/dates';

const code = `
<DatePicker
  placeholder="Pick date"
  label="Event date"
  icon={<CalendarIcon />}
/>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 340, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React.createElement(DatePicker, {
    placeholder: "Pick date",
    label: "Event date",
    icon: /* @__PURE__ */ React.createElement(CalendarIcon, null)
  }));
}
const icon = {
  type: "demo",
  code,
  component: Demo
};

export { icon };
//# sourceMappingURL=icon.js.map
