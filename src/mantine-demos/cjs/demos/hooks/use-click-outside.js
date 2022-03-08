'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var hooks = require('@mantine/hooks');
var CodeDemo = require('../../components/Demo/CodeDemo/CodeDemo.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const getCode = (events) => `import { useState } from 'react';
import { Paper, Button } from '@mantine/core';
import { useClickOutside } from '@mantine/hooks';

export function Demo() {
  const [opened, setOpened] = useState(false);
  const ref = useClickOutside(() => setOpened(false)${events});

  return (
    <>
      <Button onClick={() => setOpened(true)}>Open dropdown</Button>

      {opened && (
        <Paper ref={ref} shadow="sm">
          <span>Click outside to close</span>
        </Paper>
      )}
    </>
  );
}`;
function UseClickOutsideDemo({ events }) {
  const theme = core.useMantineTheme();
  const [opened, setOpened] = React.useState(false);
  const ref = hooks.useClickOutside(() => setOpened(false), events || void 0);
  return /* @__PURE__ */ React__default.createElement(CodeDemo['default'], {
    code: getCode(events ? `, [${events.map((event) => `'${event}'`).join(", ")}]` : ""),
    language: "tsx",
    demoBackground: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[0]
  }, /* @__PURE__ */ React__default.createElement("div", {
    style: { position: "relative" }
  }, /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    onClick: () => setOpened(true)
  }, "Open dropdown")), opened && /* @__PURE__ */ React__default.createElement(core.Paper, {
    ref,
    shadow: "sm",
    style: {
      width: 300,
      height: 60,
      position: "absolute",
      top: 0,
      left: "calc(50% - 150px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white
    }
  }, /* @__PURE__ */ React__default.createElement("span", null, "Click outside to close"))));
}

exports.UseClickOutsideDemo = UseClickOutsideDemo;
//# sourceMappingURL=use-click-outside.js.map
