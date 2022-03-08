'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');
var radixIcons = require('@modulz/radix-icons');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
  const [scrollLocked, setScrollLocked] = hooks.useScrollLock();
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    onClick: () => setScrollLocked((c) => !c),
    variant: "outline",
    leftIcon: scrollLocked ? /* @__PURE__ */ React__default.createElement(radixIcons.LockClosedIcon, null) : /* @__PURE__ */ React__default.createElement(radixIcons.LockOpen2Icon, null)
  }, scrollLocked ? "Unlock scroll" : "Lock scroll"));
}
const useScrollLockHook = {
  type: "demo",
  code,
  component: Demo
};

exports.useScrollLockHook = useScrollLockHook;
//# sourceMappingURL=use-scroll-lock.js.map
