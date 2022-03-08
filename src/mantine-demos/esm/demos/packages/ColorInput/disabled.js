import React from 'react';
import { ColorInput } from '@mantine/core';

const code = `
<ColorInput disabled />
`;
function Demo() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 320, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React.createElement(ColorInput, {
    label: "Disabled without value",
    placeholder: "Your favorite color",
    disabled: true
  }), /* @__PURE__ */ React.createElement(ColorInput, {
    style: { marginTop: 15 },
    label: "Disabled with value",
    placeholder: "Your favorite color",
    disabled: true,
    value: "#EFD679"
  }));
}
const disabled = {
  type: "demo",
  code,
  component: Demo
};

export { disabled };
//# sourceMappingURL=disabled.js.map
