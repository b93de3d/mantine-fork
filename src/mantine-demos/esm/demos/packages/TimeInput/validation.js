import React from 'react';
import { TimeInput } from '@mantine/dates';

const code = `
// Error as boolean \u2013 red border color
<TimeInput error />

// Error as React node \u2013 red border color and message below input
<TimeInput error="It is not a valid time" />
`;
function Demo() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 320, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React.createElement(TimeInput, {
    label: "Pick time",
    placeholder: "Pick time",
    error: true,
    defaultValue: new Date()
  }), /* @__PURE__ */ React.createElement(TimeInput, {
    style: { marginTop: 15 },
    label: "Pick time",
    placeholder: "Pick time",
    error: "It is not a valid time",
    defaultValue: new Date()
  }));
}
const validation = {
  type: "demo",
  code,
  component: Demo
};

export { validation };
//# sourceMappingURL=validation.js.map
