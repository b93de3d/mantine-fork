import React from 'react';
import { useMantineTheme, Container } from '@mantine/core';

const code = `
<Container>
  Default container
</Container>

<Container size="xs" padding="xs">
  xs container with xs horizontal padding
</Container>

<Container size={200} padding={0}>
  200px container with 0 horizontal padding
</Container>
`;
function Demo() {
  const theme = useMantineTheme();
  const color = theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.blue[0];
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Container, {
    style: { backgroundColor: color, height: 50 }
  }, "Default container"), /* @__PURE__ */ React.createElement(Container, {
    size: "xs",
    padding: "xs",
    style: { backgroundColor: color, height: 50, marginTop: 20 }
  }, "xs container with xs horizontal padding"), /* @__PURE__ */ React.createElement(Container, {
    size: 200,
    padding: 0,
    style: { backgroundColor: color, height: 50, marginTop: 20 }
  }, "200px container with 0 horizontal padding"));
}
const usage = {
  type: "demo",
  code,
  component: Demo
};

export { usage };
//# sourceMappingURL=usage.js.map
