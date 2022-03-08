import React from 'react';
import { Group, Button } from '@mantine/core';

const code = `
<Button compact>My compact button</Button>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Button, {
    compact: true
  }, "Compact filled button"), /* @__PURE__ */ React.createElement(Button, {
    compact: true,
    variant: "light"
  }, "Compact light button"), /* @__PURE__ */ React.createElement(Button, {
    compact: true,
    variant: "outline"
  }, "Compact outline button")));
}
const compact = {
  type: "demo",
  code,
  component: Demo
};

export { compact };
//# sourceMappingURL=compact.js.map
