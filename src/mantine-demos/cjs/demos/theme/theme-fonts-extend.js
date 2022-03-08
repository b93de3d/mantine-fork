'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Button, Code, Title, MantineProvider } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider theme={{
      fontFamily: 'Verdana, sans-serif',
      fontFamilyMonospace: 'Monaco, Courier, monospace',
      headings: { fontFamily: 'Greycliff CF, sans-serif' },
    }}>
      <Title order={3}>Greycliff CF or sans-serif title</Title>
      <Button>Verdana button</Button>
      <Code>Monaco, Courier Code</Code>
    </MantineProvider>
  );
}
`;
function Demo() {
  const { colorScheme } = core.useMantineColorScheme();
  return /* @__PURE__ */ React__default.createElement(core.MantineProvider, {
    theme: {
      colorScheme,
      fontFamily: "Verdana, sans-serif",
      fontFamilyMonospace: "Monaco, Courier, monospace",
      headings: { fontFamily: "Greycliff CF, sans-serif" }
    }
  }, /* @__PURE__ */ React__default.createElement(core.Title, {
    style: { textAlign: "center", marginBottom: 10 },
    order: 3
  }, "Greycliff CF or sans-serif title"), /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Button, null, "Verdana button"), /* @__PURE__ */ React__default.createElement(core.Code, null, "Monaco, Courier Code")));
}
const themeFontsExtend = {
  type: "demo",
  component: Demo,
  code
};

exports.themeFontsExtend = themeFontsExtend;
//# sourceMappingURL=theme-fonts-extend.js.map
