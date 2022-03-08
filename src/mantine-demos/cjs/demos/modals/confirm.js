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

  const openConfirmModal = () => modals.openConfirmModal({
    title: 'Please confirm your action',
    children: (
      <Text size="sm">
        This action is so important that you are required to confirm it with a modal. Please click
        one of these buttons to proceed.
      </Text>
    ),
    labels: { confirm: 'Confirm', cancel: "Cancel" },
    onCancel: () => console.log('Cancel'),
    onConfirm: () => console.log('Confirmed'),
  });

  return <Button onClick={openConfirmModal}>Open confirm modal</Button>;
}
`;
function Demo() {
  const notifications$1 = notifications.useNotifications();
  const modals$1 = modals.useModals();
  const openConfirmModal = () => modals$1.openConfirmModal({
    title: "Please confirm your action",
    children: /* @__PURE__ */ React__default.createElement(core.Text, {
      size: "sm"
    }, "This action is so important that you are required to confirm it with a modal. Please click one of these buttons to proceed."),
    onCancel: () => notifications$1.showNotification({
      title: "Canceled",
      message: "Confirm modal was canceled",
      color: "gray"
    }),
    onConfirm: () => notifications$1.showNotification({
      title: "Confirmed",
      message: "Confirm modal was confirmed",
      color: "teal"
    })
  });
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    onClick: openConfirmModal
  }, "Open confirm modal"));
}
const confirm = {
  type: "demo",
  component: Demo,
  code
};

exports.confirm = confirm;
//# sourceMappingURL=confirm.js.map
