'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var hooks = require('@mantine/hooks');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Badge } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

export function Demo() {
  const matches = useMediaQuery('(min-width: 900px)');

  return (
    <Badge color={matches ? 'teal' : 'red'} variant="filled">
      Breakpoint {matches ? 'matches' : 'does not match'}
    </Badge>
  );
}`;
function Demo() {
  const matches = hooks.useMediaQuery("(min-width: 900px)");
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Badge, {
    color: matches ? "teal" : "red",
    variant: "filled"
  }, "Breakpoint ", matches ? "matches" : "does not match"));
}
const useMediaQueryHook = {
  type: "demo",
  code,
  component: Demo
};

exports.useMediaQueryHook = useMediaQueryHook;
//# sourceMappingURL=use-media-query.js.map
