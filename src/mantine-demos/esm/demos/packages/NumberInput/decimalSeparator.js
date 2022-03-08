import React from 'react';
import { NumberInput } from '@mantine/core';

const code = `
<NumberInput
  decimalSeparator=","
  label="Number input with a custom decimal separator"
  defaultValue={0.5}
  precision={2}
  step={0.5}
/>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 320, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React.createElement(NumberInput, {
    decimalSeparator: ",",
    label: "Number input with a custom decimal separator",
    placeholder: "Decimal separator",
    defaultValue: 0.5,
    precision: 2,
    step: 0.5
  }));
}
const decimalSeparator = {
  type: "demo",
  code,
  component: Demo
};

export { decimalSeparator };
//# sourceMappingURL=decimalSeparator.js.map
