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

function Usage() {
  return <ActionIcon>Hello</ActionIcon>;
}
`;
const code = `
const deleted = { color: 'red', label: '-' };
const added = { color: 'green', label: '+' };

<Prism
  language="tsx"
  withLineNumbers
  highlightLines={{
    3: deleted,
    4: deleted,
    5: deleted,
    7: added,
    8: added,
    9: added,
  }}
>
  {code}
</Prism>
`;
function Demo() {
  const deleted = { color: "red", label: "-" };
  const added = { color: "green", label: "+" };
  return /* @__PURE__ */ React__default.createElement(prism.Prism, {
    language: "tsx",
    withLineNumbers: true,
    highlightLines: {
      3: deleted,
      4: deleted,
      5: deleted,
      7: added,
      8: added,
      9: added
    }
  }, demoCode.trim());
}
const linesHighlight = {
  type: "demo",
  component: Demo,
  code
};

exports.linesHighlight = linesHighlight;
//# sourceMappingURL=linesHighlight.js.map
