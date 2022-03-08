import React from 'react';
import { NumberInput } from '@mantine/core';

const code = `
<NumberInput label="By default controls are visible" />

<NumberInput
  hideControls
  label="Disable them with hideControls prop"
/>

<NumberInput
  label="Disabled"
  disabled
  label="Controls also not rendered when input is disabled"
/>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 420, margin: "auto" }
  }, /* @__PURE__ */ React.createElement(NumberInput, {
    label: "By default controls are visible",
    placeholder: "Controls are visible"
  }), /* @__PURE__ */ React.createElement(NumberInput, {
    style: { marginTop: 15 },
    hideControls: true,
    label: "Disable them with hideControls prop",
    placeholder: "Controls are disabled"
  }), /* @__PURE__ */ React.createElement(NumberInput, {
    style: { marginTop: 15 },
    disabled: true,
    label: "Controls also not rendered when input is disabled",
    placeholder: "Input disabled"
  }));
}
const controls = {
  type: "demo",
  code,
  component: Demo
};

export { controls };
//# sourceMappingURL=controls.js.map
