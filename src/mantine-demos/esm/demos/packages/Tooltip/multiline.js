import React from 'react';
import { Group, Tooltip, Button } from '@mantine/core';

const code = `
<Tooltip
  wrapLines
  width={220}
  withArrow
  transition="fade"
  transitionDuration={200}
  label="Use this button to save this information in your profile, after that you will be able to access it any time and share it via email."
>
  <Button variant="outline">Multiline tooltip</Button>
</Tooltip>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Tooltip, {
    wrapLines: true,
    width: 220,
    withArrow: true,
    transition: "fade",
    transitionDuration: 200,
    label: "Use this button to save this information in your profile, after that you will be able to access it any time and share it via email."
  }, /* @__PURE__ */ React.createElement(Button, {
    variant: "outline"
  }, "Multiline tooltip")));
}
const multiline = {
  type: "demo",
  code,
  component: Demo
};

export { Demo, multiline };
//# sourceMappingURL=multiline.js.map
