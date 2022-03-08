import React from 'react';
import { Group, Tooltip, Button } from '@mantine/core';

const code = `
<Tooltip label="Ctrl + J" delay={500}>
  <Button variant="outline">Toggle color scheme</Button>
</Tooltip>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Tooltip, {
    label: "Ctrl + J",
    delay: 500
  }, /* @__PURE__ */ React.createElement(Button, {
    variant: "outline"
  }, "Toggle color scheme")));
}
const delay = {
  type: "demo",
  code,
  component: Demo
};

export { Demo, delay };
//# sourceMappingURL=delay.js.map
