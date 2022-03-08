import React from 'react';
import { createStyles } from '@mantine/core';

const code = `
const useStyles = createStyles((theme, _params, getRef) => {
  // create reference for future use
  const button = getRef('button');

  return {
    button: {
      // assign reference to selector
      ref: button,

      // and add any other properties
      backgroundColor: theme.colors.blue[6],
      color: theme.white,
      padding: \`\${theme.spacing.sm}px \${theme.spacing.lg}px\`,
      borderRadius: theme.radius.md,
      cursor: 'pointer',
      border: 0,
    },

    container: {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[1],
      padding: theme.spacing.xl,

      // reference button with nested selector
      [\`&:hover .\${button}\`]: {
        backgroundColor: theme.colors.violet[6],
      },
    },
  };
});

function Demo() {
  const { classes } = useStyles();
  return (
    <div className={classes.container}>
      <button className={classes.button} type="button">
        Hover container to change button color
      </button>
    </div>
  );
}
`;
const useStyles = createStyles((theme, _params, getRef) => {
  const button = getRef("button");
  return {
    button: {
      ref: button,
      backgroundColor: theme.colors.blue[6],
      color: theme.white,
      padding: `${theme.spacing.sm}px ${theme.spacing.lg}px`,
      borderRadius: theme.radius.md,
      cursor: "pointer",
      border: 0
    },
    container: {
      display: "flex",
      justifyContent: "center",
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[1],
      padding: theme.spacing.xl,
      [`&:hover .${button}`]: {
        backgroundColor: theme.colors.violet[6]
      }
    }
  };
});
function Demo() {
  const { classes } = useStyles();
  return /* @__PURE__ */ React.createElement("div", {
    className: classes.container
  }, /* @__PURE__ */ React.createElement("button", {
    className: classes.button,
    type: "button"
  }, "Hover container to change button color"));
}
const createStylesComposition = {
  type: "demo",
  component: Demo,
  code
};

export { createStylesComposition };
//# sourceMappingURL=createStylesComposition.js.map
