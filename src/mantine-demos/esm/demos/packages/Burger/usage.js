import React from 'react';
import { Group } from '@mantine/core';
import { DemoBase } from './_base.js';

const code = `
import { useState } from 'react';
import { Burger } from '@mantine/core';

function Demo() {
  const [opened, setOpened] = useState(false);
  const title = opened ? 'Close navigation' : 'Open navigation';

  return (
    <Burger
      opened={opened}
      onClick={() => setOpened((o) => !o)}
      title={title}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(DemoBase, null));
}
const usage = {
  type: "demo",
  code,
  component: Demo
};

export { Demo, usage };
//# sourceMappingURL=usage.js.map
