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
import { Prism } from '@mantine/prism';

const demoCode = \`import { Button } from '@mantine/core';

function Demo() {
  return <Button>Hello</Button>
}\`;

function Demo() {
  return <Prism language="tsx">{demoCode}</Prism>;
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(prism.Prism, {
    language: "tsx"
  }, demoCode.trim());
}
const usage = {
  type: "demo",
  component: Demo,
  code
};

exports.demoCode = demoCode;
exports.usage = usage;
//# sourceMappingURL=usage.js.map
