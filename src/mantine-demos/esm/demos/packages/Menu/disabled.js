import React from 'react';
import { MagnifyingGlassIcon } from '@modulz/radix-icons';
import { Group, Menu } from '@mantine/core';
import { menuItems } from './_menu-items.js';

const code = `
<Menu>
  <Menu.Item disabled icon={<MagnifyingGlassIcon width={14} height={14} />}>
    Search
  </Menu.Item>
  {/* ...other items */}
</Menu>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Menu, null, menuItems.slice(0, 4), /* @__PURE__ */ React.createElement(Menu.Item, {
    disabled: true,
    icon: /* @__PURE__ */ React.createElement(MagnifyingGlassIcon, {
      width: 14,
      height: 14
    })
  }, "Search"), menuItems.slice(5)));
}
const disabled = {
  type: "demo",
  code,
  component: Demo
};

export { disabled };
//# sourceMappingURL=disabled.js.map
