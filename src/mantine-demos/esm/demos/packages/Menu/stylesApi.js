import React from 'react';
import { createStyles, Group, Menu } from '@mantine/core';
import { menuItems } from './_menu-items.js';

const code = `
import { Menu, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  itemHovered: {
    backgroundColor: theme.colors[theme.primaryColor][7],
    color: theme.white,
  },
}));

function Demo() {
  const { classes } = useStyles();
  return (
    <Menu classNames={classes}>
      {/* Menu items... */}
    </Menu>
  );
}
`;
const useStyles = createStyles((theme) => ({
  itemHovered: {
    backgroundColor: theme.colors[theme.primaryColor][7],
    color: theme.white
  }
}));
function Demo() {
  const { classes } = useStyles();
  const items = [...menuItems];
  items.splice(4, 1);
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Menu, {
    classNames: classes
  }, items));
}
const stylesApi = {
  type: "demo",
  code,
  component: Demo
};

export { stylesApi };
//# sourceMappingURL=stylesApi.js.map
