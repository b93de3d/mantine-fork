'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var radixIcons = require('@modulz/radix-icons');
var core = require('@mantine/core');
var prism = require('@mantine/prism');
var CodeDemo_styles = require('./CodeDemo.styles.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
  const { classes, cx } = CodeDemo_styles['default']();
  const [visible, setVisible] = React.useState(!toggle);
  const theme = core.useMantineTheme();
  if (inline) {
    return /* @__PURE__ */ React__default.createElement("div", null, children);
  }
  return /* @__PURE__ */ React__default.createElement("div", {
    style: { marginBottom: theme.spacing.xl, marginTop: theme.spacing.md }
  }, /* @__PURE__ */ React__default.createElement(core.Paper, {
    padding: spacing ? "md" : 0,
    className: cx(classes.demo, { [classes.withToggle]: toggle }),
    style: {
      backgroundColor: demoBackground || (theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white),
      borderColor: demoBorder ? void 0 : "transparent",
      zIndex
    }
  }, children, !!code && toggle && /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center",
    direction: "column",
    spacing: 5,
    className: classes.controls
  }, /* @__PURE__ */ React__default.createElement(core.Tooltip, {
    label: `${visible ? "Hide" : "Show"} code`,
    position: "left",
    placement: "center",
    transition: "fade",
    withArrow: true,
    arrowSize: 4,
    gutter: 8,
    positionDependencies: [visible]
  }, /* @__PURE__ */ React__default.createElement(core.ActionIcon, {
    variant: "hover",
    onClick: () => setVisible((v) => !v),
    "aria-label": "Toggle code"
  }, /* @__PURE__ */ React__default.createElement(radixIcons.CodeIcon, null))))), code && visible && /* @__PURE__ */ React__default.createElement(prism.Prism, {
    language,
    className: classes.prism,
    classNames: { code: classes.code }
  }, code));
}

exports.default = CodeDemo;
//# sourceMappingURL=CodeDemo.js.map
