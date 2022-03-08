import React, { useState } from 'react';
import { UserCheck, MailOpened, ShieldCheck } from 'tabler-icons-react';
import { Stepper } from '@mantine/core';

const code = `
import { UserCheck, MailOpened, ShieldCheck } from 'tabler-icons-react';
import { Stepper } from '@mantine/core';

function Demo() {
  const [active, setActive] = useState(0);
  return (
    <Stepper active={active} onStepClick={setActive}>
      <Stepper.Step icon={<UserCheck size={18} />} />
      <Stepper.Step icon={<MailOpened size={18} />} />
      <Stepper.Step icon={<ShieldCheck size={18} />} />
    </Stepper>
  );
}
`;
function Demo() {
  const [active, setActive] = useState(0);
  return /* @__PURE__ */ React.createElement(Stepper, {
    active,
    onStepClick: setActive
  }, /* @__PURE__ */ React.createElement(Stepper.Step, {
    icon: /* @__PURE__ */ React.createElement(UserCheck, {
      size: 18
    })
  }), /* @__PURE__ */ React.createElement(Stepper.Step, {
    icon: /* @__PURE__ */ React.createElement(MailOpened, {
      size: 18
    })
  }), /* @__PURE__ */ React.createElement(Stepper.Step, {
    icon: /* @__PURE__ */ React.createElement(ShieldCheck, {
      size: 18
    })
  }));
}
const iconsOnly = {
  type: "demo",
  component: Demo,
  code
};

export { iconsOnly };
//# sourceMappingURL=iconsOnly.js.map
