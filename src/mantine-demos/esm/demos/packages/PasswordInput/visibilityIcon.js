import React from 'react';
import { EyeOff, EyeCheck } from 'tabler-icons-react';
import { PasswordInput } from '@mantine/core';

const code = `
import { PasswordInput } from '@mantine/core';
import { EyeCheck, EyeOff } from 'tabler-icons-react';

function Demo() {
  return (
    <PasswordInput
      label="Change visibility toggle icon"
      placeholder="Change visibility toggle icon"
      defaultValue="secret"
      visibilityToggleIcon={({ reveal, size }) =>
        reveal ? <EyeOff size={size} /> : <EyeCheck size={size} />
      }
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 320, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React.createElement(PasswordInput, {
    label: "Change visibility toggle icon",
    placeholder: "Change visibility toggle icon",
    defaultValue: "secret",
    visibilityToggleIcon: ({ reveal, size }) => reveal ? /* @__PURE__ */ React.createElement(EyeOff, {
      size
    }) : /* @__PURE__ */ React.createElement(EyeCheck, {
      size
    })
  }));
}
const visibilityIcon = {
  type: "demo",
  component: Demo,
  code
};

export { visibilityIcon };
//# sourceMappingURL=visibilityIcon.js.map
