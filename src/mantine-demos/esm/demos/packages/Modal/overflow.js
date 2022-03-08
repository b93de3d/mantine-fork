import React, { useState } from 'react';
import { Modal, Group, Button } from '@mantine/core';

const code = `
// (default) \u2013 overflow is handled by modal wrapper
<Modal overflow="outside" />

// overflow is handled by modal body
<Modal overflow="inside" />
`;
function Demo() {
  const [insideOpened, setInsideOpened] = useState(false);
  const [outsideOpened, setOutsideOpened] = useState(false);
  const content = Array(100).fill(0).map((_, index) => /* @__PURE__ */ React.createElement("p", {
    key: index
  }, "React is not a framework"));
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Modal, {
    opened: outsideOpened,
    onClose: () => setOutsideOpened(false),
    title: "Please consider this",
    overflow: "outside"
  }, content), /* @__PURE__ */ React.createElement(Modal, {
    opened: insideOpened,
    onClose: () => setInsideOpened(false),
    title: "Please consider this",
    overflow: "inside"
  }, content), /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Button, {
    onClick: () => setOutsideOpened(true),
    color: "pink"
  }, "Outside overflow"), /* @__PURE__ */ React.createElement(Button, {
    onClick: () => setInsideOpened(true),
    color: "cyan"
  }, "Inside overflow")));
}
const overflow = {
  type: "demo",
  component: Demo,
  code
};

export { overflow };
//# sourceMappingURL=overflow.js.map
