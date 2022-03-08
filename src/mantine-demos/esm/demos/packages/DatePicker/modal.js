import React from 'react';
import { DatePicker } from '@mantine/dates';

const code = `
<DatePicker dropdownType="modal" placeholder="Pick date" label="Event date" />
`;
function Demo() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 340, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React.createElement(DatePicker, {
    dropdownType: "modal",
    placeholder: "Pick date",
    label: "Event date"
  }));
}
const modal = {
  type: "demo",
  code,
  component: Demo
};

export { modal };
//# sourceMappingURL=modal.js.map
