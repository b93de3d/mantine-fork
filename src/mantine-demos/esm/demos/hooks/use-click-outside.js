import React, { useState } from 'react';
import { useMantineTheme, Group, Button, Paper } from '@mantine/core';
import { useClickOutside } from '@mantine/hooks';
import CodeDemo from '../../components/Demo/CodeDemo/CodeDemo.js';

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
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const ref = useClickOutside(() => setOpened(false), events || void 0);
  return /* @__PURE__ */ React.createElement(CodeDemo, {
    code: getCode(events ? `, [${events.map((event) => `'${event}'`).join(", ")}]` : ""),
    language: "tsx",
    demoBackground: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[0]
  }, /* @__PURE__ */ React.createElement("div", {
    style: { position: "relative" }
  }, /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Button, {
    onClick: () => setOpened(true)
  }, "Open dropdown")), opened && /* @__PURE__ */ React.createElement(Paper, {
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
  }, /* @__PURE__ */ React.createElement("span", null, "Click outside to close"))));
}

export { UseClickOutsideDemo };
//# sourceMappingURL=use-click-outside.js.map
