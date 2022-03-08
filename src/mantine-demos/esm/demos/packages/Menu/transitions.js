import React from 'react';
import { Group, Menu } from '@mantine/core';
import { menuItems } from './_menu-items.js';

const code = `
<Menu
  transition="rotate-right"
  transitionDuration={100}
  transitionTimingFunction="ease"
>
  {/* Menu items */}
</Menu>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Menu, {
    transition: "rotate-right",
    transitionDuration: 100,
    transitionTimingFunction: "ease"
  }, menuItems));
}
const transitions = {
  type: "demo",
  code,
  component: Demo
};

export { transitions };
//# sourceMappingURL=transitions.js.map
