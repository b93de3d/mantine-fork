import React, { useState } from 'react';
import { Group, Popover, Button, Image, Text } from '@mantine/core';

const code = `
import { useState } from 'react';
import { Popover, Text, Button, Image } from '@mantine/core';

function Demo() {
  const [opened, setOpened] = useState(false);
  return (
    <Popover
      opened={opened}
      onClose={() => setOpened(false)}
      target={<Button onClick={() => setOpened((o) => !o)}>Toggle popover</Button>}
      width={260}
      position="bottom"
      withArrow
    >
      <div style={{ display: 'flex' }}>
        <Image
          src="./logo.svg"
          width={30}
          height={30}
          sx={{ minWidth: 30 }}
          mr="md"
        />
        <Text size="sm">Thanks for stopping by and checking Mantine, you are awesome!</Text>
      </div>
    </Popover>
  );
}
`;
function Demo() {
  const [opened, setOpened] = useState(false);
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Popover, {
    opened,
    onClose: () => setOpened(false),
    target: /* @__PURE__ */ React.createElement(Button, {
      onClick: () => setOpened((o) => !o)
    }, "Toggle popover"),
    width: 260,
    position: "bottom",
    withArrow: true,
    noFocusTrap: true
  }, /* @__PURE__ */ React.createElement("div", {
    style: { display: "flex" }
  }, /* @__PURE__ */ React.createElement(Image, {
    src: "https://raw.githubusercontent.com/mantinedev/mantine/e630956424828b4103372d781cc64f0a54eebb33/docs/src/images/favicon.svg",
    width: 30,
    height: 30,
    sx: { minWidth: 30 },
    mr: "md"
  }), /* @__PURE__ */ React.createElement(Text, {
    size: "sm"
  }, "Thanks for stopping by and checking Mantine, you are awesome!"))));
}
const usage = {
  type: "demo",
  code,
  component: Demo
};

export { usage };
//# sourceMappingURL=usage.js.map
