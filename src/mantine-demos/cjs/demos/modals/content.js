'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var modals = require('@mantine/modals');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { TextInput, Button } from '@mantine/core';
import { useModals } from '@mantine/modals';

function Demo() {
  const modals = useModals();

  const openContentModal = () => {
    const id = modals.openModal({
      title: 'Subscribe to newsletter',
      children: (
        <>
          <TextInput label="Your email" />
          <Button fullWidth onClick={() => modals.closeModal(id)}>
            Submit
          </Button>
        </>
      ),
    });
  };

  return <Button onClick={openContentModal}>Open content modal</Button>;
}
`;
function Demo() {
  const modals$1 = modals.useModals();
  const openContentModal = () => {
    const id = modals$1.openModal({
      title: "Subscribe to newsletter",
      children: /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.TextInput, {
        label: "Your email",
        placeholder: "Your email"
      }), /* @__PURE__ */ React__default.createElement(core.Button, {
        fullWidth: true,
        onClick: () => modals$1.closeModal(id),
        mt: "md"
      }, "Submit"))
    });
  };
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    onClick: openContentModal
  }, "Open content modal"));
}
const content = {
  type: "demo",
  component: Demo,
  code
};

exports.content = content;
//# sourceMappingURL=content.js.map
