import React from 'react';
import { FlameIcon } from '@primer/octicons-react';
import { Blockquote } from '@mantine/core';

const code = `
<Blockquote
  cite="\u2013 Your poor i3 from 2012 struggling its best"
  icon={<FlameIcon size={20} />}
>
  webpack built caa9bf3d1a0a0914ed84 in 28259ms
</Blockquote>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 420, margin: "auto" }
  }, /* @__PURE__ */ React.createElement(Blockquote, {
    cite: "\u2013 Your poor i3 from 2012 struggling its best",
    icon: /* @__PURE__ */ React.createElement(FlameIcon, {
      size: 20
    })
  }, "webpack built 40a9bf3d1a0a0914ed84 in 28259ms"));
}
const icon = {
  type: "demo",
  code,
  component: Demo
};

export { icon };
//# sourceMappingURL=icon.js.map
