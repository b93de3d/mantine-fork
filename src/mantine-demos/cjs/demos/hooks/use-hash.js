'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useHash, randomId } from '@mantine/hooks';
import { Button } from '@mantine/core';

export function Demo() {
  const [hash, setHash] = useHash();
  return <Button onClick={() => setHash(randomId())}>Set hash to random string</Button>
}`;
function Demo() {
  const [, setHash] = hooks.useHash();
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    onClick: () => setHash(hooks.randomId())
  }, "Set hash to random string"));
}
const useHashHook = {
  type: "demo",
  code,
  component: Demo
};

exports.useHashHook = useHashHook;
//# sourceMappingURL=use-hash.js.map
