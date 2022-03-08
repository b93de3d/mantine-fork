import React from 'react';
import { createStyles, Group } from '@mantine/core';
import { Month } from '@mantine/dates';

const code = `
import { createStyles } from '@mantine/core';
import { Month } from '@mantine/dates';

const useStyles = createStyles((theme) => ({
  outside: {
    opacity: 0,
  },

  weekend: {
    color: \`\${theme.colors.blue[6]} !important\`,
  },
}));

function Demo() {
  const { classes, cx } = useStyles();

  return (
    <Month
      disableOutsideEvents
      month={new Date(2021, 7)}
      dayClassName={(date, modifiers) =>
        cx({ [classes.outside]: modifiers.outside, [classes.weekend]: modifiers.weekend })
      }
    />
  );
}
`;
const useStyles = createStyles((theme) => ({
  outside: {
    opacity: 0
  },
  weekend: {
    color: `${theme.colors.blue[6]} !important`
  }
}));
function Demo() {
  const { classes, cx } = useStyles();
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Month, {
    disableOutsideEvents: true,
    month: new Date(2021, 7),
    dayClassName: (date, modifiers2) => cx({ [classes.outside]: modifiers2.outside, [classes.weekend]: modifiers2.weekend })
  }));
}
const modifiers = {
  type: "demo",
  code,
  component: Demo
};

export { modifiers };
//# sourceMappingURL=modifiers.js.map
