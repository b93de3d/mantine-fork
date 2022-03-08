import React from 'react';
import { TextInput } from '@mantine/core';

const code = `
<TextInput disabled />
`;
function Demo() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 320, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React.createElement(TextInput, {
    label: "Disabled without value",
    placeholder: "Your email",
    disabled: true
  }), /* @__PURE__ */ React.createElement(TextInput, {
    style: { marginTop: 15 },
    label: "Disabled with value",
    placeholder: "Your email",
    disabled: true,
    value: "myemail@gmail.com"
  }));
}
const disabled = {
  type: "demo",
  code,
  component: Demo
};

export { disabled };
//# sourceMappingURL=disabled.js.map
