import React from 'react';
import { DatePicker } from '@mantine/dates';

const code = `
<DatePicker
  excludeDate={(date) => date.getDay() === 0 || date.getDay() === 6}
/>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 340, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React.createElement(DatePicker, {
    placeholder: "Pick date",
    label: "Event date",
    excludeDate: (date) => date.getDay() === 0 || date.getDay() === 6
  }));
}
const exclude = {
  type: "demo",
  code,
  component: Demo
};

export { exclude };
//# sourceMappingURL=exclude.js.map
