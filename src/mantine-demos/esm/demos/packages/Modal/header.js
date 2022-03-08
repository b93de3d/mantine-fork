import React, { useState } from 'react';
import { Modal, Group, Button } from '@mantine/core';

const code = `
<Modal
  opened={opened}
  onClose={() => setOpened(false)}
  hideCloseButton
>
  Modal without header, press escape or click on overlay to close
</Modal>
`;
function Demo() {
  const [opened, setOpened] = useState(false);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Modal, {
    opened,
    onClose: () => setOpened(false),
    hideCloseButton: true
  }, "Modal without header, press escape or click on overlay to close"), /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Button, {
    onClick: () => setOpened(true)
  }, "Open Modal")));
}
const header = {
  type: "demo",
  code,
  component: Demo
};

export { header };
//# sourceMappingURL=header.js.map
