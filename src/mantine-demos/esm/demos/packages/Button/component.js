import React from 'react';
import { ExternalLinkIcon } from '@modulz/radix-icons';
import { Group, Button } from '@mantine/core';

const code = `
<Button
  component="a"
  href="https://mantine.dev"
  target="_blank"
  variant="outline"
  leftIcon={<ExternalLinkIcon />}
>
  Mantine docs
</Button>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Button, {
    component: "a",
    href: "https://mantine.dev",
    target: "_blank",
    variant: "outline",
    leftIcon: /* @__PURE__ */ React.createElement(ExternalLinkIcon, null)
  }, "Mantine docs"));
}
const component = {
  type: "demo",
  code,
  component: Demo
};

export { component };
//# sourceMappingURL=component.js.map
