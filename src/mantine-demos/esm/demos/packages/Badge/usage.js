import React from 'react';
import { Group, Badge } from '@mantine/core';

const code = `
<Badge>Default light badge</Badge>
<Badge variant="dot">Dot badge</Badge>
<Badge variant="outline">Outline badge</Badge>
<Badge variant="filled">Filled badge</Badge>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Badge, null, "Default light badge"), /* @__PURE__ */ React.createElement(Badge, {
    variant: "dot"
  }, "Dot badge"), /* @__PURE__ */ React.createElement(Badge, {
    variant: "outline"
  }, "Outline badge"), /* @__PURE__ */ React.createElement(Badge, {
    variant: "filled"
  }, "Filled badge"));
}
const usage = {
  type: "demo",
  code,
  component: Demo
};

export { usage };
//# sourceMappingURL=usage.js.map
