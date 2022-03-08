import React from 'react';
import { PasswordInput } from '@mantine/core';

const code = `
<PasswordInput disabled />
`;
function Demo() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 320, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React.createElement(PasswordInput, {
    label: "Disabled without value",
    placeholder: "Your password",
    disabled: true
  }), /* @__PURE__ */ React.createElement(PasswordInput, {
    style: { marginTop: 15 },
    label: "Disabled with value",
    placeholder: "Your password",
    disabled: true,
    value: "secret"
  }));
}
const disabled = {
  type: "demo",
  code,
  component: Demo
};

export { disabled };
//# sourceMappingURL=disabled.js.map
