import React, { useState } from 'react';
import { Stepper } from '@mantine/core';

const code = `
<Stepper iconPosition="right">
  {/* ...children */}
</Stepper>
`;
function Demo() {
  const [active, setActive] = useState(1);
  return /* @__PURE__ */ React.createElement(Stepper, {
    active,
    breakpoint: "sm",
    onStepClick: setActive,
    iconPosition: "right"
  }, /* @__PURE__ */ React.createElement(Stepper.Step, {
    label: "Step 1",
    description: "Create an account"
  }), /* @__PURE__ */ React.createElement(Stepper.Step, {
    label: "Step 2",
    description: "Verify email"
  }), /* @__PURE__ */ React.createElement(Stepper.Step, {
    label: "Step 3",
    description: "Get full access"
  }));
}
const iconPosition = {
  type: "demo",
  component: Demo,
  code
};

export { iconPosition };
//# sourceMappingURL=iconPosition.js.map
