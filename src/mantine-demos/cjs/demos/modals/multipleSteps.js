'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var modals = require('@mantine/modals');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
  const modals$1 = modals.useModals();
  const openMultiStepModal = () => modals$1.openConfirmModal({
    title: "Please confirm your action",
    closeOnConfirm: false,
    labels: { confirm: "Next modal", cancel: "Close modal" },
    children: /* @__PURE__ */ React__default.createElement(core.Text, {
      size: "sm"
    }, "This action is so important that you are required to confirm it with a modal. Please click one of these buttons to proceed."),
    onConfirm: () => modals$1.openConfirmModal({
      title: "This is modal at second layer",
      labels: { confirm: "Close modal", cancel: "Back" },
      closeOnConfirm: false,
      children: /* @__PURE__ */ React__default.createElement(core.Text, {
        size: "sm"
      }, "When this modal is closed modals state will revert to first modal"),
      onConfirm: () => modals$1.closeAll()
    })
  });
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    onClick: openMultiStepModal
  }, "Open multiple steps modal"));
}
const multipleSteps = {
  type: "demo",
  component: Demo,
  code
};

exports.multipleSteps = multipleSteps;
//# sourceMappingURL=multipleSteps.js.map
