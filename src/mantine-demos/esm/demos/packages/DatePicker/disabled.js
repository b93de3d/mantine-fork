import React from 'react';
import { DatePicker } from '@mantine/dates';

const code = `
<DatePicker disabled />
`;
function Demo() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 320, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React.createElement(DatePicker, {
    label: "Disabled without value",
    placeholder: "Your birthday",
    disabled: true
  }), /* @__PURE__ */ React.createElement(DatePicker, {
    style: { marginTop: 15 },
    label: "Disabled with value",
    placeholder: "Your birthday",
    disabled: true,
    value: new Date()
  }));
}
const disabled = {
  type: "demo",
  code,
  component: Demo
};

export { disabled };
//# sourceMappingURL=disabled.js.map
