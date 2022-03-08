'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var prism = require('@mantine/prism');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const demoCode = `
import { Button } from '@mantine/core';

function Demo() {
  return <Button>Hello</Button>
}
`;
const code = `
<Prism colorScheme="dark" language="tsx">{code}</Prism>
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(prism.Prism, {
    language: "tsx",
    colorScheme: "dark"
  }, demoCode.trim());
}
const themeOverride = {
  type: "demo",
  component: Demo,
  code
};

exports.themeOverride = themeOverride;
//# sourceMappingURL=themeOverride.js.map
