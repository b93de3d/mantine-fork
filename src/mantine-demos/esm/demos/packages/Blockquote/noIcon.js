import React from 'react';
import { Blockquote } from '@mantine/core';

const code = `
<Blockquote cite="\u2013 Your poor i3 from 2012 struggling its best" icon={null}>
  webpack built 40a9bf3d1a0a0914ed84 in 28259ms
</Blockquote>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 420, margin: "auto" }
  }, /* @__PURE__ */ React.createElement(Blockquote, {
    cite: "\u2013 Your poor i3 from 2012 struggling its best",
    icon: null
  }, "webpack built 40a9bf3d1a0a0914ed84 in 28259ms"));
}
const noIcon = {
  type: "demo",
  code,
  component: Demo
};

export { noIcon };
//# sourceMappingURL=noIcon.js.map
