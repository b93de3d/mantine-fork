import React from 'react';
import { NumberInput } from '@mantine/core';

const code = `
<NumberInput
  label="Number input with decimal steps"
  defaultValue={0.05}
  precision={2}
  min={-1}
  step={0.05}
  max={1}
/>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 320, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React.createElement(NumberInput, {
    label: "Number input with decimal steps",
    placeholder: "Decimal steps",
    defaultValue: 0.05,
    precision: 2,
    min: -1,
    step: 0.05,
    max: 1
  }));
}
const decimal = {
  type: "demo",
  code,
  component: Demo
};

export { decimal };
//# sourceMappingURL=decimal.js.map
