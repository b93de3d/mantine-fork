'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useScrollIntoView } from '@mantine/hooks';
import { Button, Text } from '@mantine/core';

function Demo() {
  const navbarHeight = 60;
  const { scrollIntoView, targetRef } = useScrollIntoView({ offset: navbarHeight });

  return (
    <>
      <Button onClick={() => scrollIntoView({ alignment: 'center' })}>
        Scroll to target
      </Button>

      <div style={{ height: '50vh'}} />

      <Text ref={targetRef}>Hello there</Text>
    </>
  );
}

`;
function Demo() {
  const theme = core.useMantineTheme();
  const navbarHeight = 60;
  const { scrollIntoView, targetRef } = hooks.useScrollIntoView({
    offset: navbarHeight
  });
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    onClick: () => scrollIntoView({
      alignment: "center"
    })
  }, "Scroll to target"), /* @__PURE__ */ React__default.createElement("div", {
    style: {
      width: "100%",
      height: "50vh",
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }
  }), /* @__PURE__ */ React__default.createElement(core.Text, {
    ref: targetRef
  }, "Hello there"));
}
const useScrollIntoViewUsage = {
  type: "demo",
  code,
  component: Demo
};

exports.useScrollIntoViewUsage = useScrollIntoViewUsage;
//# sourceMappingURL=usage.js.map
