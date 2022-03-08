import React from 'react';
import { Group, Menu } from '@mantine/core';
import { menuItems } from './_menu-items.js';

const code = `
<Menu trigger="hover" delay={500}>
  {/* ... menu items */}
</Menu>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Menu, {
    trigger: "hover",
    delay: 500
  }, menuItems));
}
const hover = {
  type: "demo",
  code,
  component: Demo
};

export { hover };
//# sourceMappingURL=hover.js.map
