import React from 'react';
import { Group, CloseButton } from '@mantine/core';

const code = `
import { CloseButton, Group } from '@mantine/core';

function Demo() {
  return (
    <Group position="center">
      <CloseButton aria-label="Close modal" />
      <CloseButton title="Close popover" size="xl" iconSize={20} />
    </Group>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(CloseButton, {
    "aria-label": "Close modal"
  }), /* @__PURE__ */ React.createElement(CloseButton, {
    title: "Close popover",
    size: "xl",
    iconSize: 20
  }));
}
const closeButton = {
  type: "demo",
  component: Demo,
  code
};

export { closeButton };
//# sourceMappingURL=closeButton.js.map
