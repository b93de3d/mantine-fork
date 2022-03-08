import React from 'react';
import { Box } from '@mantine/core';

const code = `
<Box
  sx={(theme) => ({
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    textAlign: 'center',
    padding: theme.spacing.xl,
    borderRadius: theme.radius.md,
    cursor: 'pointer',

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
    },
  })}
>
  Box lets you add inline styles with sx prop
</Box>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Box, {
    sx: (theme) => ({
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
      textAlign: "center",
      padding: theme.spacing.xl,
      borderRadius: theme.radius.md,
      cursor: "pointer",
      "&:hover": {
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
      }
    })
  }, "Box lets you add inline styles with sx prop");
}
const usage = {
  type: "demo",
  component: Demo,
  code
};

export { usage };
//# sourceMappingURL=usage.js.map
