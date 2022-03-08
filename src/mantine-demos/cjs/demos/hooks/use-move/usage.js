'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var hooks = require('@mantine/hooks');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useMantineTheme, Text, Code } from '@mantine/core';
import { useMove } from '@mantine/hooks';

function Demo() {
  const theme = useMantineTheme();
  const [value, setValue] = useState({ x: 0.2, y: 0.6 });
  const { ref, active } = useMove(setValue);

  return (
    <>
      <div
        ref={ref}
        style={{
          width: 400,
          height: 120,
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: \`calc(\${value.x * 100}% - 8px)\`,
            top: \`calc(\${value.y * 100}% - 8px)\`,
            width: 16,
            height: 16,
            backgroundColor: active ? theme.colors.teal[7] : theme.colors.blue[7],
          }}
        />
      </div>

      <Text>
        Values <Code>{\`{ x: \${Math.round(value.x * 100)}, y: \${Math.round(value.y * 100)} }\`}</Code>
      </Text>
    </>
  );
}`;
function Demo() {
  const theme = core.useMantineTheme();
  const [value, setValue] = React.useState({ x: 0.2, y: 0.6 });
  const { ref, active } = hooks.useMove(setValue);
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement("div", {
    ref,
    style: {
      width: 400,
      height: 120,
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1],
      position: "relative"
    }
  }, /* @__PURE__ */ React__default.createElement("div", {
    style: {
      position: "absolute",
      left: `calc(${value.x * 100}% - 8px)`,
      top: `calc(${value.y * 100}% - 8px)`,
      width: 16,
      height: 16,
      backgroundColor: active ? theme.colors.teal[7] : theme.colors.blue[7]
    }
  }))), /* @__PURE__ */ React__default.createElement(core.Text, {
    align: "center",
    style: { marginTop: theme.spacing.sm }
  }, "Values ", /* @__PURE__ */ React__default.createElement(core.Code, null, `{ x: ${Math.round(value.x * 100)}, y: ${Math.round(value.y * 100)} }`)));
}
const useMoveUsage = {
  type: "demo",
  code,
  component: Demo
};

exports.useMoveUsage = useMoveUsage;
//# sourceMappingURL=usage.js.map
