import React from 'react';
import { Group, Tooltip, Button } from '@mantine/core';

const code = `
<Tooltip label="Default arrow" withArrow opened>
  <Button variant="outline">Default arrow</Button>
</Tooltip>

<Tooltip label="Arrow with size" withArrow arrowSize={3} opened>
  <Button variant="outline">With size</Button>
</Tooltip>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Group, {
    position: "center",
    style: { paddingTop: 30 }
  }, /* @__PURE__ */ React.createElement(Tooltip, {
    label: "Default arrow",
    withArrow: true,
    opened: true
  }, /* @__PURE__ */ React.createElement(Button, {
    variant: "outline"
  }, "Default arrow")), /* @__PURE__ */ React.createElement(Tooltip, {
    label: "Arrow with size",
    withArrow: true,
    arrowSize: 3,
    opened: true
  }, /* @__PURE__ */ React.createElement(Button, {
    variant: "outline"
  }, "With size"))));
}
const arrow = {
  type: "demo",
  code,
  component: Demo
};

export { Demo, arrow };
//# sourceMappingURL=arrow.js.map
