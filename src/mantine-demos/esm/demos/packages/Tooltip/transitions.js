import React from 'react';
import { AVAILABLE_TRANSITIONS, Tooltip, Badge, Group } from '@mantine/core';

function Demo() {
  const transitions2 = AVAILABLE_TRANSITIONS.map((transition) => /* @__PURE__ */ React.createElement(Tooltip, {
    key: transition,
    label: transition,
    transition,
    transitionDuration: 300
  }, /* @__PURE__ */ React.createElement(Badge, null, transition)));
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, transitions2);
}
const transitions = {
  type: "demo",
  component: Demo
};

export { Demo, transitions };
//# sourceMappingURL=transitions.js.map
