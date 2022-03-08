import React, { useState } from 'react';
import { Drawer, Group, Button } from '@mantine/core';

const code = `
import { useState } from 'react';
import { Drawer, Button, Group } from '@mantine/core';

function Demo() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        padding="md"
        hideCloseButton
        noCloseOnClickOutside
        noFocusTrap
        noScrollLock
        noOverlay
      >
        Press escape to close the drawer
      </Drawer>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>Open Drawer</Button>
      </Group>
    </>
  );
}
`;
function Demo() {
  const [opened, setOpened] = useState(false);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Drawer, {
    opened,
    onClose: () => setOpened(false),
    padding: "md",
    hideCloseButton: true,
    noCloseOnClickOutside: true,
    noFocusTrap: true,
    noScrollLock: true,
    noOverlay: true
  }, "Press escape to close the drawer"), /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Button, {
    onClick: () => setOpened(true)
  }, "Open Drawer")));
}
const behavior = {
  type: "demo",
  code,
  component: Demo
};

export { behavior };
//# sourceMappingURL=behavior.js.map
