import React, { useState } from 'react';
import { Modal, Group, Button } from '@mantine/core';
import { AuthenticationForm } from '../../../shared/AuthenticationForm/AuthenticationForm.js';

const SIZES = ["xs", "sm", "md", "lg", "xl", "full", 322, "70%"];
function Demo() {
  const [opened, setOpened] = useState(false);
  const [size, setSize] = useState("md");
  const buttons = SIZES.map((s) => /* @__PURE__ */ React.createElement(Button, {
    key: s,
    variant: "outline",
    onClick: () => {
      setSize(s);
      setOpened(true);
    }
  }, typeof s === "number" ? `${s}px` : s));
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Modal, {
    opened,
    onClose: () => setOpened(false),
    title: "Introduce yourself!",
    size
  }, /* @__PURE__ */ React.createElement(AuthenticationForm, {
    noShadow: true,
    noPadding: true
  })), /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, buttons));
}
const sizes = {
  type: "demo",
  component: Demo
};

export { sizes };
//# sourceMappingURL=sizes.js.map
