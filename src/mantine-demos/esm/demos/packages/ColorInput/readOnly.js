import React from 'react';
import { ColorInput } from '@mantine/core';

const code = `
<ColorInput disallowInput />
`;
function Demo() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 320, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React.createElement(ColorInput, {
    disallowInput: true,
    placeholder: "Pick color",
    label: "Your favorite color"
  }));
}
const readOnly = {
  type: "demo",
  component: Demo,
  code
};

export { readOnly };
//# sourceMappingURL=readOnly.js.map
