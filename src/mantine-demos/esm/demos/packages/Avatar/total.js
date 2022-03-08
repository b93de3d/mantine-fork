import React from 'react';
import { Group, AvatarsGroup, Avatar } from '@mantine/core';
import { avatars } from './_mockdata.js';

const code = `
<AvatarsGroup limit={2} total={7}>
  <Avatar src="avatar.png" component="a" href="https://github.com/rtivital" />
  <Avatar src="avatar.png" />
</AvatarsGroup>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(AvatarsGroup, {
    spacing: "lg",
    limit: 2,
    total: 7
  }, /* @__PURE__ */ React.createElement(Avatar, {
    component: "a",
    href: "https://github.com/rtivital",
    src: avatars[0],
    alt: "it's me"
  }), /* @__PURE__ */ React.createElement(Avatar, {
    radius: "xl",
    src: avatars[1]
  })));
}
const total = {
  type: "demo",
  code,
  component: Demo
};

export { total };
//# sourceMappingURL=total.js.map
