import React from 'react';
import { StarIcon } from '@modulz/radix-icons';
import { Group, Avatar } from '@mantine/core';
import { avatars } from './_mockdata.js';

const code = `
// With image
<Avatar src="avatar.png" alt="it's me" />

// Default placeholder
<Avatar radius="xl" />

// Letters with xl radius
<Avatar color="cyan" radius="xl">MK</Avatar>

// Custom placeholder icon
<Avatar color="blue" radius="sm">
  <StarIcon style={{ width: 24, height: 24 }} />
</Avatar>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Avatar, {
    src: avatars[0],
    alt: "it's me"
  }), /* @__PURE__ */ React.createElement(Avatar, {
    radius: "xl"
  }), /* @__PURE__ */ React.createElement(Avatar, {
    color: "cyan",
    radius: "xl"
  }, "MK"), /* @__PURE__ */ React.createElement(Avatar, {
    color: "blue",
    radius: "xl"
  }, /* @__PURE__ */ React.createElement(StarIcon, {
    style: { width: 24, height: 24 }
  })));
}
const usage = {
  type: "demo",
  code,
  component: Demo
};

export { usage };
//# sourceMappingURL=usage.js.map
