'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var hooks = require('@mantine/hooks');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useMantineTheme, Text, Code } from '@mantine/core';
import { useMouse } from '@mantine/hooks';

function Demo() {
  const theme = useMantineTheme();
  const { x, y } = useMouse();

  return (
    <Text align="center">
      Mouse coordinates <Code>{\`{ x: \${x}, y: \${y} }\`}</Code>
    </Text>
  );
}`;
function Demo() {
  const { x, y } = hooks.useMouse();
  return /* @__PURE__ */ React__default.createElement(core.Text, {
    align: "center"
  }, "Mouse coordinates ", /* @__PURE__ */ React__default.createElement(core.Code, null, `{ x: ${x}, y: ${y} }`));
}
const useMouseUsage = {
  type: "demo",
  code,
  component: Demo
};

exports.useMouseUsage = useMouseUsage;
//# sourceMappingURL=usage.js.map
