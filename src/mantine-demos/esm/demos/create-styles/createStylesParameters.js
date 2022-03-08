import React from 'react';
import { createStyles } from '@mantine/core';

const code = `
import { createStyles } from '@mantine/core';

interface ButtonProps {
  color: 'blue' | 'violet';
  radius: number;
}

const useStyles = createStyles((theme, { color, radius }: ButtonProps) => ({
  button: {
    color: theme.white,
    backgroundColor: theme.colors[color][6],
    borderRadius: radius,
    padding: theme.spacing.md,
    margin: theme.spacing.md,
    border: 0,
    cursor: 'pointer',
  },
}));

function Button({ color, radius }: ButtonProps) {
  const { classes } = useStyles({ color, radius });
  return (
    <button type="button" className={classes.button}>
      {color} button with {radius}px radius
    </button>
  );
}

function Demo() {
  return (
    <>
      <Button color="blue" radius={5} />
      <Button color="violet" radius={50} />
    </>
  );
}
`;
const useStyles = createStyles((theme, { color, radius }) => ({
  button: {
    color: theme.white,
    backgroundColor: theme.colors[color][6],
    borderRadius: radius,
    padding: theme.spacing.md,
    margin: theme.spacing.md,
    border: 0,
    cursor: "pointer"
  }
}));
function Button({ color, radius }) {
  const { classes } = useStyles({ color, radius });
  return /* @__PURE__ */ React.createElement("button", {
    type: "button",
    className: classes.button
  }, color, " button with ", radius, "px radius");
}
function Demo() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Button, {
    color: "blue",
    radius: 5
  }), /* @__PURE__ */ React.createElement(Button, {
    color: "violet",
    radius: 50
  }));
}
const createStylesParameters = {
  type: "demo",
  component: Demo,
  code
};

export { createStylesParameters };
//# sourceMappingURL=createStylesParameters.js.map
