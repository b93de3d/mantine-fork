import React from 'react';
import { DatePicker } from '@mantine/dates';

const code = `
// Error as boolean \u2013 red border color
<DatePicker error />

// Error as React node \u2013 red border color and message below input
<DatePicker error="You must be at least 18 to register" />
`;
function Demo() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 320, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React.createElement(DatePicker, {
    label: "Your birthday",
    placeholder: "Your birthday",
    error: true
  }), /* @__PURE__ */ React.createElement(DatePicker, {
    style: { marginTop: 15 },
    label: "Your birthday",
    placeholder: "Your birthday",
    error: "You must be at least 18 to register"
  }));
}
const validation = {
  type: "demo",
  code,
  component: Demo
};

export { validation };
//# sourceMappingURL=validation.js.map
