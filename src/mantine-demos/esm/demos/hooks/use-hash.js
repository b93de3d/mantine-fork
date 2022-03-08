import React from 'react';
import { useHash, randomId } from '@mantine/hooks';
import { Group, Button } from '@mantine/core';

const code = `
import { useHash, randomId } from '@mantine/hooks';
import { Button } from '@mantine/core';

export function Demo() {
  const [hash, setHash] = useHash();
  return <Button onClick={() => setHash(randomId())}>Set hash to random string</Button>
}`;
function Demo() {
  const [, setHash] = useHash();
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Button, {
    onClick: () => setHash(randomId())
  }, "Set hash to random string"));
}
const useHashHook = {
  type: "demo",
  code,
  component: Demo
};

export { useHashHook };
//# sourceMappingURL=use-hash.js.map
