'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var prism = require('@mantine/prism');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Text } from '@mantine/core';
import { Prism } from '@mantine/prism';

const longCode = \`
<p>
  Long code that will force Prism to have a horizontal scrollbar, by default, scroll behavior is handled by ScrollArea component, but it can be changed to native browser scrollbars
</p>
\`;

function Demo() {
  return (
    <>
      <Text mb={5}>With ScrollArea component (default):</Text>
      <Prism language="tsx">{longCode}</Prism>

      <Text mb={5} mt="xl">With native scrollbars:</Text>
      <Prism language="tsx" scrollAreaComponent="div">{longCode}</Prism>
    </>
  );
}
`;
const longCode = `<p>
  Long code that will force Prism to have a horizontal scrollbar, by default, scroll behavior is handled by ScrollArea component, but it can be changed to native browser scrollbars
</p>`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.Text, {
    mb: 5
  }, "With ScrollArea component (default):"), /* @__PURE__ */ React__default.createElement(prism.Prism, {
    language: "tsx"
  }, longCode), /* @__PURE__ */ React__default.createElement(core.Text, {
    mb: 5,
    mt: "xl"
  }, "With native scrollbars:"), /* @__PURE__ */ React__default.createElement(prism.Prism, {
    language: "tsx",
    scrollAreaComponent: "div"
  }, longCode));
}
const scrollbars = {
  type: "demo",
  component: Demo,
  code
};

exports.scrollbars = scrollbars;
//# sourceMappingURL=scrollbars.js.map
