'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useScrollIntoView } from '@mantine/hooks';
import { Button, Paper } from '@mantine/core';

function Demo() {
  const { scrollIntoView, targetRef, scrollableRef } = useScrollIntoView();

  return (
    <>
      <Paper ref={scrollableRef} style={{ overflowY: 'scroll', height: 300, flex: 1 }}>
        <Paper ref={targetRef}>Scroll me into view<</Paper>
      </Paper>

      <Button onClick={() => scrollIntoView()}>Scroll to target</Button>
    </>
  );
}
`;
function Demo() {
  const theme = core.useMantineTheme();
  const { scrollIntoView, targetRef, scrollableRef } = hooks.useScrollIntoView();
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Paper, {
    ref: scrollableRef,
    style: { overflowY: "scroll", height: 300, flex: 1 }
  }, /* @__PURE__ */ React__default.createElement("div", {
    style: { paddingTop: 260, paddingBottom: 450 }
  }, /* @__PURE__ */ React__default.createElement(core.Paper, {
    ref: targetRef,
    padding: "xl",
    style: {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2],
      width: "100%"
    }
  }, /* @__PURE__ */ React__default.createElement(core.Text, null, "Scroll me into view")))), /* @__PURE__ */ React__default.createElement(core.Button, {
    onClick: () => scrollIntoView()
  }, "Scroll to target"));
}
const useScrollIntoViewParent = {
  type: "demo",
  code,
  component: Demo
};

exports.useScrollIntoViewParent = useScrollIntoViewParent;
//# sourceMappingURL=parent.js.map
