import React from 'react';
import { useMantineTheme, Center } from '@mantine/core';

const code = `
<Center style={{ width: 400, height: 200 }}>
  <div>All elements inside Center are centered</div>
</Center>
`;
function Demo() {
  const theme = useMantineTheme();
  return /* @__PURE__ */ React.createElement(Center, {
    style: {
      margin: "auto",
      maxWidth: 400,
      height: 100,
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.blue[0]
    }
  }, /* @__PURE__ */ React.createElement("div", {
    style: {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.blue[1]
    }
  }, "All elements inside Center are centered"));
}
const usage = {
  type: "demo",
  code,
  component: Demo
};

export { usage };
//# sourceMappingURL=usage.js.map
