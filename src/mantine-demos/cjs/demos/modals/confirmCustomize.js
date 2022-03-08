'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var modals = require('@mantine/modals');
var notifications = require('@mantine/notifications');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
  const notifications$1 = notifications.useNotifications();
  const modals$1 = modals.useModals();
  const openDeleteModal = () => modals$1.openConfirmModal({
    title: "Delete your profile",
    centered: true,
    children: /* @__PURE__ */ React__default.createElement(core.Text, {
      size: "sm"
    }, "Are you sure you want to delete your profile? This action is destructive and you will have to contact support to restore your data."),
    labels: { confirm: "Delete account", cancel: "No don't delete it" },
    confirmProps: { color: "red" },
    onCancel: () => notifications$1.showNotification({
      title: "Canceled",
      message: "Delete modal was canceled",
      color: "gray"
    }),
    onConfirm: () => notifications$1.showNotification({
      title: "Deleted",
      message: "Delete modal was confirmed",
      color: "red"
    })
  });
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    onClick: openDeleteModal,
    color: "red"
  }, "Delete account"));
}
const confirmCustomize = {
  type: "demo",
  component: Demo,
  code
};

exports.confirmCustomize = confirmCustomize;
//# sourceMappingURL=confirmCustomize.js.map
