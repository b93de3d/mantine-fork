import React from 'react';
import { DatePicker } from '@mantine/dates';

const code = `
<DatePicker firstDayOfWeek="sunday" />
`;
function Demo() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 340, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React.createElement(DatePicker, {
    label: "Sunday as first day of week",
    placeholder: "Pick date",
    firstDayOfWeek: "sunday"
  }));
}
const firstDaySunday = {
  type: "demo",
  code,
  component: Demo
};

export { firstDaySunday };
//# sourceMappingURL=firstDaySunday.js.map
