import React, { useState } from 'react';
import { Drawer, Group, Button } from '@mantine/core';
import { AuthenticationForm } from '../../../shared/AuthenticationForm/AuthenticationForm.js';

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
        title="Register"
        padding="xl"
        size="xl"
      >
        <AuthenticationForm />
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
    padding: "xl",
    title: "Register",
    size: "xl"
  }, /* @__PURE__ */ React.createElement(AuthenticationForm, {
    noPadding: true,
    noShadow: true
  })), /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Button, {
    onClick: () => setOpened(true)
  }, "Open Drawer")));
}
const usage = {
  type: "demo",
  code,
  component: Demo
};

export { usage };
//# sourceMappingURL=usage.js.map
