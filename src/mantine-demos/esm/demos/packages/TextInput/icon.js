import React from 'react';
import { At } from 'tabler-icons-react';
import { TextInput } from '@mantine/core';

const code = `
<TextInput icon={<At />} />
`;
function Demo() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 320, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React.createElement(TextInput, {
    label: "Your email",
    placeholder: "Your email",
    icon: /* @__PURE__ */ React.createElement(At, {
      size: 14
    })
  }));
}
const icon = {
  type: "demo",
  code,
  component: Demo
};

export { icon };
//# sourceMappingURL=icon.js.map
