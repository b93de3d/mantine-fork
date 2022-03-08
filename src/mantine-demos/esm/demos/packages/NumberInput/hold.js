import React from 'react';
import { NumberInput } from '@mantine/core';

const code = `
<NumberInput
  style={{ marginTop: 15 }}
  label="Step on hold"
  description="Step the value when clicking and holding the arrows"
  stepHoldDelay={500}
  stepHoldInterval={100}
/>

<NumberInput
  label="Step the value with interval function"
  description="Step value will increase incrementally when control is hold"
  stepHoldDelay={500}
  stepHoldInterval={(t) => Math.max(1000 / t ** 2, 25)}
/>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 420, margin: "auto" }
  }, /* @__PURE__ */ React.createElement(NumberInput, {
    label: "Step on hold",
    description: "Step the value when clicking and holding the arrows",
    placeholder: "Hold mouse down on control button",
    stepHoldDelay: 500,
    stepHoldInterval: 100
  }), /* @__PURE__ */ React.createElement(NumberInput, {
    mt: "md",
    label: "Step the value with interval function",
    description: "Step value will increase incrementally when control is hold",
    placeholder: "Hold mouse down on control button",
    stepHoldDelay: 500,
    stepHoldInterval: (t) => Math.max(1e3 / t ** 2, 25)
  }));
}
const hold = {
  type: "demo",
  code,
  component: Demo
};

export { hold };
//# sourceMappingURL=hold.js.map
