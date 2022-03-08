import React from 'react';
import { NumberInput } from '@mantine/core';

const code = "<NumberInput disabled />";
function Demo() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 320, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React.createElement(NumberInput, {
    label: "Enter your age",
    placeholder: "Your age",
    disabled: true,
    value: 20
  }));
}
const disabled = {
  type: "demo",
  code,
  component: Demo
};

export { disabled };
//# sourceMappingURL=disabled.js.map
