import React from 'react';
import { Group, Text, Button } from '@mantine/core';
import { useForceUpdate, randomId } from '@mantine/hooks';

const code = `
import { Button, Text, Group } from '@mantine/core';
import { useForceUpdate, randomId } from '@mantine/hooks';

function Demo() {
  const forceUpdate = useForceUpdate();

  return (
    <Group position="center">
      <Text>{randomId()}</Text>
      <Button onClick={forceUpdate}>Force update</Button>
    </Group>
  );
}
`;
function Demo() {
  const forceUpdate = useForceUpdate();
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Text, null, randomId()), /* @__PURE__ */ React.createElement(Button, {
    onClick: forceUpdate
  }, "Force update"));
}
const useForceUpdateHook = {
  type: "demo",
  code,
  component: Demo
};

export { useForceUpdateHook };
//# sourceMappingURL=use-force-update.js.map
