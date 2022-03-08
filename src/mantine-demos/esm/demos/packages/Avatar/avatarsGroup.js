import React from 'react';
import { Group, AvatarsGroup, Avatar } from '@mantine/core';
import { avatars } from './_mockdata.js';

const code = `
<AvatarsGroup limit={3}>
  <Avatar src="avatar.png" component="a" href="https://github.com/rtivital" />
  <Avatar src="avatar.png" />
  <Avatar src="avatar.png" />
  {/* ...other items */}
</AvatarsGroup>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(AvatarsGroup, {
    spacing: "lg",
    limit: 3
  }, /* @__PURE__ */ React.createElement(Avatar, {
    component: "a",
    href: "https://github.com/rtivital",
    src: avatars[0],
    alt: "it's me"
  }), /* @__PURE__ */ React.createElement(Avatar, {
    color: "blue",
    radius: "xl",
    src: avatars[1]
  }), /* @__PURE__ */ React.createElement(Avatar, {
    radius: "xl",
    src: avatars[2]
  }), /* @__PURE__ */ React.createElement(Avatar, {
    color: "cyan",
    radius: "xl",
    src: avatars[2]
  }), /* @__PURE__ */ React.createElement(Avatar, {
    color: "cyan",
    radius: "xl",
    src: avatars[2]
  })));
}
const avatarsGroup = {
  type: "demo",
  code,
  component: Demo
};

export { avatarsGroup };
//# sourceMappingURL=avatarsGroup.js.map
