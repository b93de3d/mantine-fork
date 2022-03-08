import React from 'react';
import { DatePicker } from '@mantine/dates';

const code = `
<DatePicker
  placeholder="Pick date"
  label="Event date"
  inputFormat="MM/DD/YYYY"
  labelFormat="MM/YYYY"
  defaultValue={new Date()}
/>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 340, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React.createElement(DatePicker, {
    placeholder: "Pick date",
    label: "Event date",
    inputFormat: "MM/DD/YYYY",
    labelFormat: "MM/YYYY",
    defaultValue: new Date()
  }));
}
const format = {
  type: "demo",
  code,
  component: Demo
};

export { format };
//# sourceMappingURL=format.js.map
