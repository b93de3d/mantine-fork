'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var radixIcons = require('@modulz/radix-icons');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { ActionIcon, Avatar, Badge, Group } from '@mantine/core';

function Demo() {
  const avatar = (
    <Avatar
      alt="Avatar for badge"
      size={24}
      mr={5}
      src="image-link"
    />
  );

  const removeButton = (
    <ActionIcon size="xs" color="blue" radius="xl" variant="transparent">
      <Cross1Icon style={{ width: 10, height: 10 }} />
    </ActionIcon>
  );

  return (
    <Group>
      <Badge sx={{ paddingLeft: 0 }} size="lg" color="teal" leftSection={avatar}>
        Badge with Avatar
      </Badge>

      <Badge variant="outline" sx={{ paddingRight: 3 }} rightSection={removeButton}>
        Badge with right section
      </Badge>

      <Badge variant="outline" sx={{ paddingLeft: 3 }} leftSection={removeButton}>
        Badge with left section
      </Badge>
    </Group>
  );
}
`;
const avatar = /* @__PURE__ */ React__default.createElement(core.Avatar, {
  alt: "Avatar for badge",
  size: 24,
  mr: 5,
  src: "https://avatars0.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"
});
const removeButton = /* @__PURE__ */ React__default.createElement(core.ActionIcon, {
  size: "xs",
  color: "blue",
  radius: "xl",
  variant: "transparent"
}, /* @__PURE__ */ React__default.createElement(radixIcons.Cross1Icon, {
  style: { width: 10, height: 10 }
}));
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Group, null, /* @__PURE__ */ React__default.createElement(core.Badge, {
    sx: { paddingLeft: 0 },
    size: "lg",
    color: "teal",
    leftSection: avatar
  }, "Badge with Avatar"), /* @__PURE__ */ React__default.createElement(core.Badge, {
    variant: "outline",
    sx: { paddingRight: 3 },
    rightSection: removeButton
  }, "Badge with right section"), /* @__PURE__ */ React__default.createElement(core.Badge, {
    variant: "outline",
    sx: { paddingLeft: 3 },
    leftSection: removeButton
  }, "Badge with left section"));
}
const sections = {
  type: "demo",
  code,
  component: Demo
};

exports.sections = sections;
//# sourceMappingURL=sections.js.map
