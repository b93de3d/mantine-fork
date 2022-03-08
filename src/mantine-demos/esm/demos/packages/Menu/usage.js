import React from 'react';
import { Group, Menu } from '@mantine/core';
import { menuItems } from './_menu-items.js';

const code = `
import { Menu, Divider, Text } from '@mantine/core';
import { GearIcon, ChatBubbleIcon, ImageIcon, MagnifyingGlassIcon, TrashIcon, PinRightIcon } from '@modulz/radix-icons';

function Demo() {
  return (
    <Menu>
      <Menu.Label>Application</Menu.Label>
      <Menu.Item icon={<GearIcon />}>Settings</Menu.Item>
      <Menu.Item icon={<ChatBubbleIcon />}>Messages</Menu.Item>
      <Menu.Item icon={<ImageIcon />}>Gallery</Menu.Item>
      <Menu.Item
        icon={<MagnifyingGlassIcon />}
        rightSection={<Text size="xs" color="dimmed">\u2318K</Text>}
      >
        Search
      </Menu.Item>

      <Divider />

      <Menu.Label>Danger zone</Menu.Label>
      <Menu.Item icon={<PinRightIcon />}>Transfer my data</Menu.Item>,
      <Menu.Item color="red" icon={<TrashIcon />}>Delete my account</Menu.Item>
    </Menu>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Menu, null, menuItems));
}
const usage = {
  type: "demo",
  code,
  component: Demo
};

export { usage };
//# sourceMappingURL=usage.js.map
