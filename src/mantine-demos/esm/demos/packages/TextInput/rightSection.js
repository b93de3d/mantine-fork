import React from 'react';
import { TextInput, Loader } from '@mantine/core';

const code = `
<TextInput label="Your email" placeholder="Your email" rightSection={<Loader size="xs" />} />
`;
function Demo() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 320, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React.createElement(TextInput, {
    label: "Your email",
    placeholder: "Your email",
    rightSection: /* @__PURE__ */ React.createElement(Loader, {
      size: "xs"
    })
  }));
}
const rightSection = {
  type: "demo",
  code,
  component: Demo
};

export { rightSection };
//# sourceMappingURL=rightSection.js.map
