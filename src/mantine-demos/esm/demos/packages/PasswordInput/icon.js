import React from 'react';
import { LockIcon } from '@primer/octicons-react';
import { PasswordInput } from '@mantine/core';

const code = `
<PasswordInput icon={<LockIcon />} />
`;
function Demo() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 320, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React.createElement(PasswordInput, {
    label: "Your password",
    placeholder: "Your password",
    icon: /* @__PURE__ */ React.createElement(LockIcon, null)
  }));
}
const icon = {
  type: "demo",
  code,
  component: Demo
};

export { icon };
//# sourceMappingURL=icon.js.map
