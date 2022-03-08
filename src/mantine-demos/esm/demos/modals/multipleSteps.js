import React from 'react';
import { Group, Button, Text } from '@mantine/core';
import { useModals } from '@mantine/modals';

const code = `
import { Button, Text } from '@mantine/core';
import { useModals } from '@mantine/modals';

function Demo() {
  const modals = useModals();

  const openMultiStepModal = () =>
    modals.openConfirmModal({
      title: 'Please confirm your action',
      closeOnConfirm: false,
      labels: { confirm: 'Next modal', cancel: 'Close modal' },
      children: (
        <Text size="sm">
          This action is so important that you are required to confirm it with a modal. Please click
          one of these buttons to proceed.
        </Text>
      ),
      onConfirm: () =>
        modals.openConfirmModal({
          title: 'This is modal at second layer',
          labels: { confirm: 'Close modal', cancel: 'Back' },
          closeOnConfirm: false,
          children: (
            <Text size="sm">When this modal is closed modals state will revert to first modal</Text>
          ),
          onConfirm: () => modals.closeAll(),
        }),
    });

  return <Button onClick={openMultiStepModal}>Open multiple steps modal</Button>;
}
`;
function Demo() {
  const modals = useModals();
  const openMultiStepModal = () => modals.openConfirmModal({
    title: "Please confirm your action",
    closeOnConfirm: false,
    labels: { confirm: "Next modal", cancel: "Close modal" },
    children: /* @__PURE__ */ React.createElement(Text, {
      size: "sm"
    }, "This action is so important that you are required to confirm it with a modal. Please click one of these buttons to proceed."),
    onConfirm: () => modals.openConfirmModal({
      title: "This is modal at second layer",
      labels: { confirm: "Close modal", cancel: "Back" },
      closeOnConfirm: false,
      children: /* @__PURE__ */ React.createElement(Text, {
        size: "sm"
      }, "When this modal is closed modals state will revert to first modal"),
      onConfirm: () => modals.closeAll()
    })
  });
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Button, {
    onClick: openMultiStepModal
  }, "Open multiple steps modal"));
}
const multipleSteps = {
  type: "demo",
  component: Demo,
  code
};

export { multipleSteps };
//# sourceMappingURL=multipleSteps.js.map
