import { createStyles } from '@mantine/core';

var useStyles = createStyles((theme, { colorScheme, native }) => ({
  scrollArea: {},
  root: {
    position: "relative"
  },
  code: {
    boxSizing: "border-box",
    position: "relative",
    fontFamily: theme.fontFamilyMonospace,
    lineHeight: 1.7,
    fontSize: 13,
    overflowX: native ? "auto" : void 0,
    borderRadius: theme.radius.sm,
    padding: `${theme.spacing.sm}px 0`,
    marginTop: 0,
    marginBottom: 0
  },
  copy: {
    position: "absolute",
    top: theme.spacing.xs,
    right: theme.dir === "ltr" ? theme.spacing.xs : "unset",
    left: theme.dir === "rtl" ? theme.spacing.xs : "unset",
    zIndex: 2
  },
  line: {
    display: "flex",
    width: "100%",
    padding: `0 ${theme.spacing.md}px`
  },
  lineNumber: {
    color: colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[4],
    textAlign: "right",
    paddingRight: theme.dir === "ltr" ? theme.spacing.xl : void 0,
    paddingLeft: theme.dir === "rtl" ? theme.spacing.xl : void 0,
    userSelect: "none"
  },
  lineContent: {
    width: "100%"
  }
}));

export default useStyles;
//# sourceMappingURL=Prism.styles.js.map
