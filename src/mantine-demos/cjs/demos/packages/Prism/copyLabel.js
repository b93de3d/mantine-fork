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
<Prism noCopy language="tsx">{code}</Prism>

<Prism
  language="tsx"
  copyLabel="Copy code to clipboard"
  copiedLabel="Code copied to clipboard"
>
  {code}
</Prism>
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(prism.Prism, {
    language: "tsx",
    noCopy: true
  }, demoCode.trim()), /* @__PURE__ */ React__default.createElement(prism.Prism, {
    language: "tsx",
    copyLabel: "Copy code to clipboard",
    copiedLabel: "Code copied to clipboard",
    style: { marginTop: 20 }
  }, demoCode.trim()));
}
const copyLabel = {
  type: "demo",
  component: Demo,
  code
};

exports.copyLabel = copyLabel;
//# sourceMappingURL=copyLabel.js.map
