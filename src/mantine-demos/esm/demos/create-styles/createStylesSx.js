import React from 'react';
import { Group, Button } from '@mantine/core';

const code = `
<Button
  sx={(theme) => ({
    borderColor: theme.colors.blue[9],
    '&:hover': {
      backgroundColor: theme.colors.blue[7],
    },
  })}
>
  Button with sx styles
</Button>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Button, {
    sx: (theme) => ({
      borderColor: theme.colors.blue[9],
      "&:hover": {
        backgroundColor: theme.colors.blue[7]
      }
    })
  }, "Button with sx styles"));
}
const createStylesSx = {
  type: "demo",
  component: Demo,
  code
};

export { createStylesSx };
//# sourceMappingURL=createStylesSx.js.map
