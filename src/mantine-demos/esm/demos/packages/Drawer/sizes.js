import React, { useState } from 'react';
import { Drawer, Group, Button } from '@mantine/core';

function Demo() {
  const [opened, setOpened] = useState(false);
  const [size, setSize] = useState("top");
  const open = (s) => {
    setSize(s);
    setOpened(true);
  };
  const controls = ["xs", "sm", "md", "lg", "xl", "full", 800, "25%"].map((s) => /* @__PURE__ */ React.createElement(Button, {
    variant: "outline",
    onClick: () => open(s),
    key: s
  }, typeof s === "string" ? s : `${s}px`));
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Drawer, {
    opened,
    onClose: () => setOpened(false),
    padding: "md",
    size,
    hideCloseButton: true
  }, "Press escape to close the drawer"), /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, controls));
}
const sizes = {
  type: "demo",
  component: Demo
};

export { sizes };
//# sourceMappingURL=sizes.js.map
