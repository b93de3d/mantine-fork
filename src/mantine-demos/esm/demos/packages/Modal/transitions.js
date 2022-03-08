import React, { useState } from 'react';
import { Modal, Group, Button } from '@mantine/core';

const code = `
<Modal
  transition="fade"
  transitionDuration={600}
  transitionTimingFunction="ease"
/>
`;
function Demo() {
  const [noTransitionOpened, setNoTransitionOpened] = useState(false);
  const [slowTransitionOpened, setSlowTransitionOpened] = useState(false);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Modal, {
    opened: slowTransitionOpened,
    onClose: () => setSlowTransitionOpened(false),
    title: "Please consider this",
    transition: "rotate-left"
  }, "rotate-left transition"), /* @__PURE__ */ React.createElement(Modal, {
    opened: noTransitionOpened,
    onClose: () => setNoTransitionOpened(false),
    title: "Please consider this",
    transition: "fade",
    transitionDuration: 600,
    transitionTimingFunction: "ease"
  }, "fade transition 600ms ease transition"), /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Button, {
    onClick: () => setSlowTransitionOpened(true),
    color: "pink"
  }, "Rotate left transition"), /* @__PURE__ */ React.createElement(Button, {
    onClick: () => setNoTransitionOpened(true),
    color: "cyan"
  }, "Fade transition")));
}
const transitions = {
  type: "demo",
  code,
  component: Demo
};

export { transitions };
//# sourceMappingURL=transitions.js.map
