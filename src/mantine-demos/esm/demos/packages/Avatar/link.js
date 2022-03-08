import React from 'react';
import { Group, Avatar } from '@mantine/core';
import { avatars } from './_mockdata.js';

const code = `
<Avatar
  component="a"
  href="https://github.com/rtivital"
  target="_blank"
  src="avatar.png"
  alt="it's me"
/>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Avatar, {
    component: "a",
    href: "https://github.com/rtivital",
    target: "_blank",
    src: avatars[0],
    alt: "it's me"
  }));
}
const link = {
  type: "demo",
  code,
  component: Demo
};

export { link };
//# sourceMappingURL=link.js.map
