'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var hooks = require('@mantine/hooks');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useMantineTheme, Text, Code, Group } from '@mantine/core';
import { useMouse } from '@mantine/hooks';

function Demo() {
  const theme = useMantineTheme();
  const { ref, x, y } = useMouse();

  return (
    <>
      <Group position="center">
        <div
          ref={ref}
          style={{
            width: 300,
            height: 180,
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
          }}
        />
      </Group>
      <Text align="center">
        Mouse coordinates <Code>{\`{ x: \${x}, y: \${y} }\`}</Code>
      </Text>
    </>
  );
}
`;
function Demo() {
  const theme = core.useMantineTheme();
  const { ref, x, y } = hooks.useMouse();
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement("div", {
    ref,
    style: {
      width: 300,
      height: 180,
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }
  })), /* @__PURE__ */ React__default.createElement(core.Text, {
    align: "center",
    style: { marginTop: theme.spacing.sm }
  }, "Mouse coordinates ", /* @__PURE__ */ React__default.createElement(core.Code, null, `{ x: ${x}, y: ${y} }`)));
}
const useMouseRef = {
  type: "demo",
  code,
  component: Demo
};

exports.useMouseRef = useMouseRef;
//# sourceMappingURL=ref.js.map
