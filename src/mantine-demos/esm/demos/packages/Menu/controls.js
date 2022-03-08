import React from 'react';
import { Group, Menu, Button } from '@mantine/core';
import { menuItems } from './_menu-items.js';

const code = `
<Menu control={<button type="button">Button control</button>}>
  {/* Menu items */}
</Menu>

<Menu control={<Button>Mantine Button</Button>}>
  {/* Menu items */}
</Menu>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Menu, {
    control: /* @__PURE__ */ React.createElement("button", {
      type: "button"
    }, "Button control")
  }, menuItems), /* @__PURE__ */ React.createElement(Menu, {
    control: /* @__PURE__ */ React.createElement(Button, null, "Mantine Button")
  }, menuItems));
}
const controls = {
  type: "demo",
  code,
  component: Demo
};

export { controls };
//# sourceMappingURL=controls.js.map
