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
<Prism withLineNumbers language="tsx">{code}</Prism>
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(prism.Prism, {
    language: "tsx",
    withLineNumbers: true
  }, demoCode.trim());
}
const lineNumbers = {
  type: "demo",
  component: Demo,
  code
};

exports.lineNumbers = lineNumbers;
//# sourceMappingURL=lineNumbers.js.map
