import React from 'react';
import { useMantineTheme, MantineProvider, Group, Button } from '@mantine/core';

const code = `
import { Button, MantineProvider } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider theme={{
      colors: {
        brand: ['#F0BBDD', '#ED9BCF', '#EC7CC3', '#ED5DB8', '#F13EAF', '#F71FA7', '#FF00A1', '#E00890', '#C50E82','#AD1374' ],
      },
      primaryColor: 'brand',
      colorScheme
    }}
    >
      <Button>Primary button</Button>
      <Button color="blue">Blue button</Button>
    </MantineProvider>
  );
}
`;
function Demo() {
  const theme = useMantineTheme();
  return /* @__PURE__ */ React.createElement(MantineProvider, {
    theme: {
      colors: {
        brand: [
          "#F0BBDD",
          "#ED9BCF",
          "#EC7CC3",
          "#ED5DB8",
          "#F13EAF",
          "#F71FA7",
          "#FF00A1",
          "#E00890",
          "#C50E82",
          "#AD1374"
        ]
      },
      primaryColor: "brand",
      colorScheme: theme.colorScheme
    }
  }, /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Button, null, "Primary button"), /* @__PURE__ */ React.createElement(Button, {
    color: "blue"
  }, "Blue button")));
}
const primaryColor = {
  type: "demo",
  component: Demo,
  code
};

export { primaryColor };
//# sourceMappingURL=primary-color.js.map
