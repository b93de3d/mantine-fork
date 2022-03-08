import React from 'react';
import { GearIcon } from '@modulz/radix-icons';
import { Group, ActionIcon } from '@mantine/core';

const code = `
<ActionIcon variant="transparent"><GearIcon /></ActionIcon>
<ActionIcon variant="hover"><GearIcon /></ActionIcon>
<ActionIcon variant="default"><GearIcon /></ActionIcon>
<ActionIcon variant="outline"><GearIcon /></ActionIcon>
<ActionIcon variant="filled"><GearIcon /></ActionIcon>
<ActionIcon variant="light"><GearIcon /></ActionIcon>
`;
const icon = /* @__PURE__ */ React.createElement(GearIcon, {
  style: { width: 16, height: 16 }
});
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(ActionIcon, {
    variant: "transparent",
    color: "blue"
  }, icon), /* @__PURE__ */ React.createElement(ActionIcon, {
    variant: "hover",
    color: "blue"
  }, icon), /* @__PURE__ */ React.createElement(ActionIcon, {
    variant: "default",
    color: "blue"
  }, icon), /* @__PURE__ */ React.createElement(ActionIcon, {
    variant: "outline",
    color: "blue"
  }, icon), /* @__PURE__ */ React.createElement(ActionIcon, {
    variant: "filled",
    color: "blue"
  }, icon), /* @__PURE__ */ React.createElement(ActionIcon, {
    variant: "light",
    color: "blue"
  }, icon));
}
const variants = {
  type: "demo",
  code,
  component: Demo
};

export { Demo, variants };
//# sourceMappingURL=variants.js.map
