import React from 'react';
import { NumberInput } from '@mantine/core';

const code = `
// Error as boolean \u2013 red border color
<NumberInput error />

// Error as React node \u2013 red border color and message below input
<NumberInput error="You must be at least 21" />
`;
function Demo() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 320, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React.createElement(NumberInput, {
    label: "Your age",
    defaultValue: 20,
    error: true,
    placeholder: "Invalid without error"
  }), /* @__PURE__ */ React.createElement(NumberInput, {
    style: { marginTop: 15 },
    defaultValue: 20,
    placeholder: "Invalid with error",
    label: "Your age",
    error: "You must be at least 21"
  }));
}
const validation = {
  type: "demo",
  code,
  component: Demo
};

export { validation };
//# sourceMappingURL=validation.js.map
