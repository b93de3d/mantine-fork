import React, { useState } from 'react';
import { Group, Tooltip, Button } from '@mantine/core';

const code = `import React, { useState } from 'react';
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  const [opened, setOpened] = useState(true);

  return (
    <Tooltip label="Ctrl + J" opened={opened}>
      <Button variant="outline" onClick={() => setOpened((o) => !o)}>
        Toggle color scheme
      </Button>
    </Tooltip>
  );
}`;
function Demo() {
  const [opened, setOpened] = useState(false);
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Tooltip, {
    label: "Ctrl + J",
    opened
  }, /* @__PURE__ */ React.createElement(Button, {
    variant: "outline",
    onClick: () => setOpened((o) => !o)
  }, "Toggle color scheme")));
}
const controlled = {
  type: "demo",
  code,
  component: Demo
};

export { Demo, controlled };
//# sourceMappingURL=controlled.js.map
