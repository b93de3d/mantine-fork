import React from 'react';
import { createStyles } from '@mantine/core';

const code = `
import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  container: {
    height: 100,
    backgroundColor: theme.colors.blue[6],

    // Media query with value from theme
    [\`@media (max-width: \${theme.breakpoints.xl}px)\`]: {
      backgroundColor: theme.colors.pink[6],
    },

    // Static media query
    '@media (max-width: 800px)': {
      backgroundColor: theme.colors.orange[6],
    },
  },
}));

function Demo() {
  const { classes } = useStyles();
  return <div className={classes.container} />;
}
`;
const useStyles = createStyles((theme) => ({
  container: {
    height: 100,
    backgroundColor: theme.colors.blue[6],
    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      backgroundColor: theme.colors.pink[6]
    },
    "@media (max-width: 800px)": {
      backgroundColor: theme.colors.orange[6]
    }
  }
}));
function Demo() {
  const { classes } = useStyles();
  return /* @__PURE__ */ React.createElement("div", {
    className: classes.container
  });
}
const createStylesMedia = {
  type: "demo",
  component: Demo,
  code
};

export { createStylesMedia };
//# sourceMappingURL=createStylesMedia.js.map
