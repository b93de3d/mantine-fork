import React from 'react';
import { Group, Button } from '@mantine/core';
import { useToggle, upperFirst } from '@mantine/hooks';

const code = `
import { Button } from '@mantine/core';
import { useToggle } from '@mantine/hooks';

function Demo() {
  const [value, toggle] = useToggle('blue', ['blue', 'orange']);

  return (
    <Button color={value} onClick={() => toggle()}>
      {value}
    </Button>
  );
}
`;
function Demo() {
  const [value, toggle] = useToggle("blue", ["blue", "orange"]);
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Button, {
    color: value,
    onClick: () => toggle()
  }, upperFirst(value)));
}
const useToggleHook = {
  type: "demo",
  code,
  component: Demo
};

export { useToggleHook };
//# sourceMappingURL=use-toggle.js.map
