import React from 'react';
import { DatePicker } from '@mantine/dates';

const code = `
<DatePicker placeholder="Pick date" label="Event date" required />
`;
function Demo() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 340, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React.createElement(DatePicker, {
    placeholder: "Pick date",
    label: "Event date",
    required: true
  }));
}
const usage = {
  type: "demo",
  code,
  component: Demo
};

export { usage };
//# sourceMappingURL=usage.js.map
