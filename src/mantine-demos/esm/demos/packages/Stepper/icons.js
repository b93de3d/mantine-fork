import React, { useState } from 'react';
import { CircleCheck, UserCheck, MailOpened, ShieldCheck } from 'tabler-icons-react';
import { Stepper } from '@mantine/core';

const code = `
import { UserCheck, MailOpened, ShieldCheck, CircleCheck } from 'tabler-icons-react';
import { Stepper } from '@mantine/core';

function Demo() {
  const [active, setActive] = useState(1);
  return (
    <Stepper active={active} onStepClick={setActive} completedIcon={<CircleCheck />}>
      <Stepper.Step icon={<UserCheck size={18} />} label="Step 1" description="Create an account" />
      <Stepper.Step icon={<MailOpened size={18} />} label="Step 2" description="Verify email" />
      <Stepper.Step icon={<ShieldCheck size={18} />} label="Step 3" description="Get full access" />
    </Stepper>
  );
}
`;
function Demo() {
  const [active, setActive] = useState(1);
  return /* @__PURE__ */ React.createElement(Stepper, {
    active,
    onStepClick: setActive,
    completedIcon: /* @__PURE__ */ React.createElement(CircleCheck, null),
    breakpoint: "sm"
  }, /* @__PURE__ */ React.createElement(Stepper.Step, {
    icon: /* @__PURE__ */ React.createElement(UserCheck, {
      size: 18
    }),
    label: "Step 1",
    description: "Create an account"
  }), /* @__PURE__ */ React.createElement(Stepper.Step, {
    icon: /* @__PURE__ */ React.createElement(MailOpened, {
      size: 18
    }),
    label: "Step 2",
    description: "Verify email"
  }), /* @__PURE__ */ React.createElement(Stepper.Step, {
    icon: /* @__PURE__ */ React.createElement(ShieldCheck, {
      size: 18
    }),
    label: "Step 3",
    description: "Get full access"
  }));
}
const icons = {
  type: "demo",
  component: Demo,
  code
};

export { icons };
//# sourceMappingURL=icons.js.map
