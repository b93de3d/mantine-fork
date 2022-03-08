import React, { useState } from 'react';
import { Stepper } from '@mantine/core';

const code = `
<Stepper orientation="vertical">
  {/* ...children */}
</Stepper>
`;
function Demo() {
  const [active, setActive] = useState(1);
  return /* @__PURE__ */ React.createElement(Stepper, {
    active,
    onStepClick: setActive,
    orientation: "vertical"
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
const orientation = {
  type: "demo",
  component: Demo,
  code
};

export { orientation };
//# sourceMappingURL=orientation.js.map
