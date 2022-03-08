import React from 'react';
import { Group, Button } from '@mantine/core';
import { useModals } from '@mantine/modals';

const code = `
import { Group, Button, Text } from '@mantine/core';
import { useModals } from '@mantine/modals';

function Demo() {
  const modals = useModals();
  const openContextModal = () =>
    modals.openContextModal('demonstration', {
      title: 'Test modal from context',
      modalBody:
        'This modal was defined in ModalsProvider, you can open it anywhere in you app with useModals hook',
    });

  return <Button onClick={openContextModal}>Open demonstration context modal</Button>;
}
`;
function Demo() {
  const modals = useModals();
  const openContextModal = () => modals.openContextModal("demonstration", {
    title: "Test modal from context",
    modalBody: "This modal was defined in ModalsProvider, you can open it anywhere in you app with useModals hook"
  });
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Button, {
    onClick: openContextModal
  }, "Open demonstration context modal"));
}
const context = {
  type: "demo",
  component: Demo,
  code
};

export { context };
//# sourceMappingURL=context.js.map
