import React from 'react';
import { CircleX } from 'tabler-icons-react';
import { Stepper } from '@mantine/core';

const code = `
<Stepper active={2}>
  <Stepper.Step label="Step 1" description="Create an account" />
  <Stepper.Step
    label="Step 2"
    description="Verify email"
    color="red"
    completedIcon={<CircleX />}
  />
  <Stepper.Step label="Step 3" description="Get full access" />
</Stepper>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Stepper, {
    active: 2,
    breakpoint: "sm"
  }, /* @__PURE__ */ React.createElement(Stepper.Step, {
    label: "Step 1",
    description: "Create an account"
  }), /* @__PURE__ */ React.createElement(Stepper.Step, {
    label: "Step 2",
    description: "Verify email",
    color: "red",
    completedIcon: /* @__PURE__ */ React.createElement(CircleX, null)
  }), /* @__PURE__ */ React.createElement(Stepper.Step, {
    label: "Step 3",
    description: "Get full access"
  }));
}
const stepColor = {
  type: "demo",
  component: Demo,
  code
};

export { stepColor };
//# sourceMappingURL=stepColor.js.map
