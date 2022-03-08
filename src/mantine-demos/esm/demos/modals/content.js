import React from 'react';
import { Group, Button, TextInput } from '@mantine/core';
import { useModals } from '@mantine/modals';

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
  const modals = useModals();
  const openContentModal = () => {
    const id = modals.openModal({
      title: "Subscribe to newsletter",
      children: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(TextInput, {
        label: "Your email",
        placeholder: "Your email"
      }), /* @__PURE__ */ React.createElement(Button, {
        fullWidth: true,
        onClick: () => modals.closeModal(id),
        mt: "md"
      }, "Submit"))
    });
  };
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Button, {
    onClick: openContentModal
  }, "Open content modal"));
}
const content = {
  type: "demo",
  component: Demo,
  code
};

export { content };
//# sourceMappingURL=content.js.map
