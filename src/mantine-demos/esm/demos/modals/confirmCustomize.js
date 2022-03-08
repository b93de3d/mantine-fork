import React from 'react';
import { Group, Button, Text } from '@mantine/core';
import { useModals } from '@mantine/modals';
import { useNotifications } from '@mantine/notifications';

const code = `
import { Button, Text } from '@mantine/core';
import { useModals } from '@mantine/modals';

function Demo() {
  const modals = useModals();

  const openDeleteModal = () =>
    modals.openConfirmModal({
      title: 'Delete your profile',
      centered: true,
      children: (
        <Text size="sm">
          Are you sure you want to delete your profile? This action is destructive and you will have
          to contact support to restore your data.
        </Text>
      ),
      labels: { confirm: 'Delete account', cancel: "No don't delete it" },
      confirmProps: { color: 'red' },
      onCancel: () => console.log('Cancel'),
      onConfirm: () => console.log('Confirmed'),
    });

  return <Button onClick={openDeleteModal} color="red">Delete account</Button>;
}
`;
function Demo() {
  const notifications = useNotifications();
  const modals = useModals();
  const openDeleteModal = () => modals.openConfirmModal({
    title: "Delete your profile",
    centered: true,
    children: /* @__PURE__ */ React.createElement(Text, {
      size: "sm"
    }, "Are you sure you want to delete your profile? This action is destructive and you will have to contact support to restore your data."),
    labels: { confirm: "Delete account", cancel: "No don't delete it" },
    confirmProps: { color: "red" },
    onCancel: () => notifications.showNotification({
      title: "Canceled",
      message: "Delete modal was canceled",
      color: "gray"
    }),
    onConfirm: () => notifications.showNotification({
      title: "Deleted",
      message: "Delete modal was confirmed",
      color: "red"
    })
  });
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Button, {
    onClick: openDeleteModal,
    color: "red"
  }, "Delete account"));
}
const confirmCustomize = {
  type: "demo",
  component: Demo,
  code
};

export { confirmCustomize };
//# sourceMappingURL=confirmCustomize.js.map
