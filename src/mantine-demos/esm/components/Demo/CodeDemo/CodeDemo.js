import React, { useState } from 'react';
import { CodeIcon } from '@modulz/radix-icons';
import { useMantineTheme, Paper, Group, Tooltip, ActionIcon } from '@mantine/core';
import { Prism } from '@mantine/prism';
import useStyles from './CodeDemo.styles.js';

function CodeDemo({
  code,
  language,
  children,
  demoBackground,
  demoBorder = true,
  toggle = false,
  inline = false,
  spacing = true,
  zIndex = 3
}) {
  const { classes, cx } = useStyles();
  const [visible, setVisible] = useState(!toggle);
  const theme = useMantineTheme();
  if (inline) {
    return /* @__PURE__ */ React.createElement("div", null, children);
  }
  return /* @__PURE__ */ React.createElement("div", {
    style: { marginBottom: theme.spacing.xl, marginTop: theme.spacing.md }
  }, /* @__PURE__ */ React.createElement(Paper, {
    padding: spacing ? "md" : 0,
    className: cx(classes.demo, { [classes.withToggle]: toggle }),
    style: {
      backgroundColor: demoBackground || (theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white),
      borderColor: demoBorder ? void 0 : "transparent",
      zIndex
    }
  }, children, !!code && toggle && /* @__PURE__ */ React.createElement(Group, {
    position: "center",
    direction: "column",
    spacing: 5,
    className: classes.controls
  }, /* @__PURE__ */ React.createElement(Tooltip, {
    label: `${visible ? "Hide" : "Show"} code`,
    position: "left",
    placement: "center",
    transition: "fade",
    withArrow: true,
    arrowSize: 4,
    gutter: 8,
    positionDependencies: [visible]
  }, /* @__PURE__ */ React.createElement(ActionIcon, {
    variant: "hover",
    onClick: () => setVisible((v) => !v),
    "aria-label": "Toggle code"
  }, /* @__PURE__ */ React.createElement(CodeIcon, null))))), code && visible && /* @__PURE__ */ React.createElement(Prism, {
    language,
    className: classes.prism,
    classNames: { code: classes.code }
  }, code));
}

export default CodeDemo;
//# sourceMappingURL=CodeDemo.js.map
