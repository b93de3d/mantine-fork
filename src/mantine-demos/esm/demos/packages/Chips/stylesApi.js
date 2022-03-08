import React from 'react';
import { createStyles, Chips, Chip } from '@mantine/core';

const code = `
import { createStyles, Chip, Chips } from '@mantine/core';

const useStyles = createStyles((theme, _params, getRef) => {
  const iconWrapper = getRef('iconWrapper');

  return {
    iconWrapper: {
      ref: iconWrapper,
    },

    checked: {
      backgroundColor: \`\${theme.colors.blue[6]} !important\`,
      color: theme.white,

      [\`& .\${iconWrapper}\`]: {
        color: theme.white,
      },
    },
  };
});

function Demo() {
  const { classes } = useStyles();

  return (
    <Chips position="center" multiple classNames={classes} defaultValue={['react']}>
      <Chip value="react">React</Chip>
      <Chip value="ng">Angular</Chip>
      <Chip value="vue">Vue</Chip>
      <Chip value="svelte">Svelte</Chip>
    </Chips>
  );
}
`;
const useStyles = createStyles((theme, _params, getRef) => {
  const iconWrapper = getRef("iconWrapper");
  return {
    iconWrapper: {
      ref: iconWrapper
    },
    checked: {
      backgroundColor: `${theme.colors.blue[6]} !important`,
      color: theme.white,
      [`& .${iconWrapper}`]: {
        color: theme.white
      }
    }
  };
});
function Demo() {
  const { classes } = useStyles();
  return /* @__PURE__ */ React.createElement(Chips, {
    position: "center",
    multiple: true,
    classNames: classes,
    defaultValue: ["react"]
  }, /* @__PURE__ */ React.createElement(Chip, {
    value: "react"
  }, "React"), /* @__PURE__ */ React.createElement(Chip, {
    value: "ng"
  }, "Angular"), /* @__PURE__ */ React.createElement(Chip, {
    value: "vue"
  }, "Vue"), /* @__PURE__ */ React.createElement(Chip, {
    value: "svelte"
  }, "Svelte"));
}
const stylesApi = {
  type: "demo",
  component: Demo,
  code
};

export { stylesApi };
//# sourceMappingURL=stylesApi.js.map
