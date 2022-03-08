import React from 'react';
import { ExternalLinkIcon } from '@modulz/radix-icons';
import { Group, Menu } from '@mantine/core';

const code = `
<Menu>
  <Menu.Item component="a" href="https://mantine.dev">
    Mantine website
  </Menu.Item>

  <Menu.Item
    icon={<ExternalLinkIcon />}
    component="a"
    href="https://mantine.dev"
    target="_blank"
  >
    External link
  </Menu.Item>
</Menu>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Menu, null, /* @__PURE__ */ React.createElement(Menu.Item, {
    component: "a",
    href: "https://mantine.dev"
  }, "Mantine website"), /* @__PURE__ */ React.createElement(Menu.Item, {
    icon: /* @__PURE__ */ React.createElement(ExternalLinkIcon, null),
    component: "a",
    href: "https://mantine.dev",
    target: "_blank"
  }, "External link")));
}
const component = {
  type: "demo",
  code,
  component: Demo
};

export { component };
//# sourceMappingURL=component.js.map
