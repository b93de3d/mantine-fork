import React from 'react';
import { PasswordInput } from '@mantine/core';

const code = `
<PasswordInput
  label="Toggle button is not focusable"
  placeholder="Toggle button is not focusable"
/>

<PasswordInput
  label="Toggle button is focusable"
  placeholder="Toggle button is focusable"
  toggleTabIndex={0}
/>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 360, margin: "auto" }
  }, /* @__PURE__ */ React.createElement(PasswordInput, {
    label: "Toggle button is not focusable",
    placeholder: "Toggle button is not focusable",
    toggleTabIndex: -1
  }), /* @__PURE__ */ React.createElement(PasswordInput, {
    label: "Toggle button is focusable",
    placeholder: "Toggle button is focusable",
    toggleTabIndex: 0,
    style: { marginTop: 15 }
  }));
}
const focus = {
  type: "demo",
  code,
  component: Demo
};

export { focus };
//# sourceMappingURL=focus.js.map
