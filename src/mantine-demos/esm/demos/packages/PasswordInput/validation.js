import React from 'react';
import { PasswordInput } from '@mantine/core';

const code = `
// Error as boolean \u2013 red border color
<PasswordInput error />

// Error as React node \u2013 red border color and message below input
<PasswordInput error="Invalid email" />
`;
function Demo() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 320, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React.createElement(PasswordInput, {
    label: "Your password",
    placeholder: "Your password",
    error: true
  }), /* @__PURE__ */ React.createElement(PasswordInput, {
    style: { marginTop: 15 },
    label: "Your password",
    placeholder: "Your password",
    error: "Invalid password"
  }));
}
const validation = {
  type: "demo",
  code,
  component: Demo
};

export { validation };
//# sourceMappingURL=validation.js.map
