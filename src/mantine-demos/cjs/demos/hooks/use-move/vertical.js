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
  const [value, setValue] = useState(0.2);
  const { ref } = useMove(({ y }) => setValue(1 - y));

  return (
    <>
      <div
        ref={ref}
        style={{
          width: 16,
          height: 120,
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
          position: 'relative',
        }}
      >
        {/* Filled bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            height: \`\${value * 100}%\`,
            width: 16,
            backgroundColor: theme.colors.blue[2],
          }}
        />

        {/* Thumb */}
        <div
          style={{
            position: 'absolute',
            bottom: \`calc(\${value * 100}% - 8px)\`,
            left: 0,
            width: 16,
            height: 16,
            backgroundColor: theme.colors.blue[7],
          }}
        />
      </div>

      <Text align="center" style={{ marginTop: theme.spacing.sm }}>
        Value: {Math.round(value * 100)}
      </Text>
    </>
  );
}`;
function Demo() {
  const theme = core.useMantineTheme();
  const [value, setValue] = React.useState(0.2);
  const { ref } = hooks.useMove(({ y }) => setValue(1 - y));
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement("div", {
    ref,
    style: {
      width: 16,
      height: 120,
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1],
      position: "relative"
    }
  }, /* @__PURE__ */ React__default.createElement("div", {
    style: {
      position: "absolute",
      bottom: 0,
      height: `${value * 100}%`,
      width: 16,
      backgroundColor: theme.colors.blue[2]
    }
  }), /* @__PURE__ */ React__default.createElement("div", {
    style: {
      position: "absolute",
      bottom: `calc(${value * 100}% - 8px)`,
      left: 0,
      width: 16,
      height: 16,
      backgroundColor: theme.colors.blue[7]
    }
  }))), /* @__PURE__ */ React__default.createElement(core.Text, {
    align: "center",
    style: { marginTop: theme.spacing.sm }
  }, "Value: ", Math.round(value * 100)));
}
const useMoveVertical = {
  type: "demo",
  code,
  component: Demo
};

exports.useMoveVertical = useMoveVertical;
//# sourceMappingURL=vertical.js.map
