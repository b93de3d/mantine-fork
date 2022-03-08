import React, { useState } from 'react';
import { Drawer, Group, Button } from '@mantine/core';
import { AuthenticationForm } from '../../../shared/AuthenticationForm/AuthenticationForm.js';

const code = `
<Drawer
  transition="rotate-left"
  transitionDuration={250}
  transitionTimingFunction="ease"
/>
`;
function Demo() {
  const [opened, setOpened] = useState(false);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Drawer, {
    opened,
    onClose: () => setOpened(false),
    padding: "xl",
    size: "xl",
    title: "Register",
    transition: "rotate-left",
    transitionDuration: 250,
    transitionTimingFunction: "ease"
  }, /* @__PURE__ */ React.createElement(AuthenticationForm, {
    noPadding: true,
    noShadow: true
  })), /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Button, {
    onClick: () => setOpened(true)
  }, "Open Drawer")));
}
const transitions = {
  type: "demo",
  code,
  component: Demo
};

export { transitions };
//# sourceMappingURL=transitions.js.map
