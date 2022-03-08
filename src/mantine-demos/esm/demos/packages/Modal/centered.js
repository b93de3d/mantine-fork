import React, { useState } from 'react';
import { Modal, Group, Button } from '@mantine/core';
import { AuthenticationForm } from '../../../shared/AuthenticationForm/AuthenticationForm.js';

const code = "<Modal centered />";
function Demo() {
  const [opened, setOpened] = useState(false);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Modal, {
    opened,
    onClose: () => setOpened(false),
    title: "Introduce yourself!",
    centered: true
  }, /* @__PURE__ */ React.createElement(AuthenticationForm, {
    noShadow: true,
    noPadding: true
  })), /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Button, {
    onClick: () => setOpened(true)
  }, "Open centered Modal")));
}
const centered = {
  type: "demo",
  code,
  component: Demo
};

export { centered };
//# sourceMappingURL=centered.js.map
