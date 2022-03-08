'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var modals = require('@mantine/modals');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
  const modals$1 = modals.useModals();
  const openContextModal = () => modals$1.openContextModal("demonstration", {
    title: "Test modal from context",
    modalBody: "This modal was defined in ModalsProvider, you can open it anywhere in you app with useModals hook"
  });
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    onClick: openContextModal
  }, "Open demonstration context modal"));
}
const context = {
  type: "demo",
  component: Demo,
  code
};

exports.context = context;
//# sourceMappingURL=context.js.map
