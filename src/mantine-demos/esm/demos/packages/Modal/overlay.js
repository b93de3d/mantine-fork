import React, { useState } from 'react';
import { useMantineTheme, Modal, Group, Button } from '@mantine/core';
import { AuthenticationForm } from '../../../shared/AuthenticationForm/AuthenticationForm.js';

const code = `
const theme = useMantineTheme();

<Modal
  opened={opened}
  onClose={() => setOpened(false)}
  title="Introduce yourself!"
  overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
  overlayOpacity={0.95}
>
  <AuthenticationForm />
</Modal>
`;
function Demo() {
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Modal, {
    opened,
    onClose: () => setOpened(false),
    title: "Introduce yourself!",
    overlayColor: theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.colors.gray[2],
    overlayOpacity: 0.95
  }, /* @__PURE__ */ React.createElement(AuthenticationForm, {
    noPadding: true,
    noShadow: true
  })), /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Button, {
    onClick: () => setOpened(true)
  }, "Open Modal")));
}
const overlay = {
  type: "demo",
  code,
  component: Demo
};

export { overlay };
//# sourceMappingURL=overlay.js.map
