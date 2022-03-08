'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var _menuItems = require('./_menu-items.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Menu, null, _menuItems.menuItems));
}
const usage = {
  type: "demo",
  code,
  component: Demo
};

exports.usage = usage;
//# sourceMappingURL=usage.js.map
