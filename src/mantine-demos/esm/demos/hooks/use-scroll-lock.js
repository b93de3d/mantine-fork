import React from 'react';
import { useScrollLock } from '@mantine/hooks';
import { LockClosedIcon, LockOpen2Icon } from '@modulz/radix-icons';
import { Group, Button } from '@mantine/core';

const code = `
import { useScrollLock } from '@mantine/hooks';
import { Button } from '@mantine/core';
import { LockClosedIcon, LockOpen2Icon } from '@modulz/radix-icons';

function Demo() {
  const [scrollLocked, setScrollLocked] = useScrollLock();

  return (
    <Group position="center">
      <Button
        onClick={() => setScrollLocked((c) => !c)}
        variant="outline"
        leftIcon={scrollLocked ? <LockClosedIcon /> : <LockOpen2Icon />}
      >
        {scrollLocked ? 'Unlock scroll' : 'Lock scroll'}
      </Button>
    </Group>
  );
}`;
function Demo() {
  const [scrollLocked, setScrollLocked] = useScrollLock();
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Button, {
    onClick: () => setScrollLocked((c) => !c),
    variant: "outline",
    leftIcon: scrollLocked ? /* @__PURE__ */ React.createElement(LockClosedIcon, null) : /* @__PURE__ */ React.createElement(LockOpen2Icon, null)
  }, scrollLocked ? "Unlock scroll" : "Lock scroll"));
}
const useScrollLockHook = {
  type: "demo",
  code,
  component: Demo
};

export { useScrollLockHook };
//# sourceMappingURL=use-scroll-lock.js.map
