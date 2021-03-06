'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Highlight = require('prism-react-renderer');
var core = require('@mantine/core');
var hooks = require('@mantine/hooks');
var CopyIcon = require('./CopyIcon.js');
var prismTheme = require('./prism-theme.js');
var Prism_styles = require('./Prism.styles.js');
var PrismTabs_styles = require('./PrismTabs.styles.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var Highlight__default = /*#__PURE__*/_interopDefaultLegacy(Highlight);

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const Prism = React.forwardRef((_a, ref) => {
  var _b = _a, {
    className,
    children,
    language,
    noCopy = false,
    classNames,
    styles,
    copyLabel = "Copy code",
    copiedLabel = "Copied",
    withLineNumbers = false,
    highlightLines = {},
    scrollAreaComponent: ScrollAreaComponent = core.ScrollArea,
    colorScheme
  } = _b, others = __objRest(_b, [
    "className",
    "children",
    "language",
    "noCopy",
    "classNames",
    "styles",
    "copyLabel",
    "copiedLabel",
    "withLineNumbers",
    "highlightLines",
    "scrollAreaComponent",
    "colorScheme"
  ]);
  const theme = core.useMantineTheme();
  const clipboard = hooks.useClipboard();
  const { classes, cx } = Prism_styles['default']({ colorScheme: colorScheme || theme.colorScheme, native: ScrollAreaComponent !== core.ScrollArea }, { classNames, styles, name: "Prism" });
  return /* @__PURE__ */ React__default.createElement(core.Box, __spreadValues({
    className: cx(classes.root, className),
    ref
  }, others), !noCopy && /* @__PURE__ */ React__default.createElement(core.Tooltip, {
    className: classes.copy,
    label: clipboard.copied ? copiedLabel : copyLabel,
    position: "left",
    placement: "center",
    transition: "fade",
    withArrow: true,
    arrowSize: 4,
    gutter: 8,
    color: clipboard.copied ? "teal" : void 0
  }, /* @__PURE__ */ React__default.createElement(core.ActionIcon, {
    "aria-label": clipboard.copied ? copiedLabel : copyLabel,
    onClick: () => clipboard.copy(children)
  }, /* @__PURE__ */ React__default.createElement(CopyIcon.CopyIcon, {
    copied: clipboard.copied
  }))), /* @__PURE__ */ React__default.createElement(Highlight__default, __spreadProps(__spreadValues({}, Highlight.defaultProps), {
    theme: prismTheme.getPrismTheme(theme, colorScheme || theme.colorScheme),
    code: children,
    language
  }), ({
    className: inheritedClassName,
    style: inheritedStyle,
    tokens,
    getLineProps,
    getTokenProps
  }) => /* @__PURE__ */ React__default.createElement(ScrollAreaComponent, {
    className: classes.scrollArea,
    dir: "ltr"
  }, /* @__PURE__ */ React__default.createElement("pre", {
    className: cx(classes.code, inheritedClassName),
    style: inheritedStyle,
    dir: "ltr"
  }, tokens.map((line, index) => {
    var _a2, _b2, _c, _d;
    if (index === tokens.length - 1 && line.length === 1 && line[0].content === "\n") {
      return null;
    }
    const lineNumber = index + 1;
    const lineProps = getLineProps({ line, key: index });
    const shouldHighlight = lineNumber in highlightLines;
    const lineColor = theme.colorScheme === "dark" ? theme.fn.rgba(theme.fn.themeColor((_a2 = highlightLines[lineNumber]) == null ? void 0 : _a2.color, 9), 0.25) : theme.fn.themeColor((_b2 = highlightLines[lineNumber]) == null ? void 0 : _b2.color, 0);
    return /* @__PURE__ */ React__default.createElement("div", __spreadProps(__spreadValues({}, lineProps), {
      className: cx(classes.line, lineProps.className),
      style: __spreadValues({}, shouldHighlight ? { backgroundColor: lineColor } : null)
    }), withLineNumbers && /* @__PURE__ */ React__default.createElement("div", {
      className: classes.lineNumber,
      style: {
        color: shouldHighlight ? theme.fn.themeColor((_c = highlightLines[lineNumber]) == null ? void 0 : _c.color, theme.colorScheme === "dark" ? 5 : 8) : void 0
      }
    }, ((_d = highlightLines[lineNumber]) == null ? void 0 : _d.label) || lineNumber), /* @__PURE__ */ React__default.createElement("div", {
      className: classes.lineContent
    }, line.map((token, key) => {
      var _a3, _b3;
      const tokenProps = getTokenProps({ token, key });
      return /* @__PURE__ */ React__default.createElement("span", __spreadProps(__spreadValues({}, tokenProps), {
        style: __spreadProps(__spreadValues({}, tokenProps.style), {
          color: shouldHighlight ? theme.fn.themeColor((_a3 = highlightLines[lineNumber]) == null ? void 0 : _a3.color, theme.colorScheme === "dark" ? 5 : 8) : (_b3 = tokenProps == null ? void 0 : tokenProps.style) == null ? void 0 : _b3.color
        })
      }));
    })));
  }).filter(Boolean)))));
});
function PrismTab(_props) {
  return null;
}
const PrismTabs = React.forwardRef((_c, ref) => {
  var _d = _c, { children, classNames, styles } = _d, others = __objRest(_d, ["children", "classNames", "styles"]);
  const { classes, cx } = PrismTabs_styles['default'](null, { name: "PrismTabs", classNames, styles });
  const tabs = React.Children.toArray(children).filter((child) => child.type === PrismTab).map((child, index) => {
    const _a = child.props, { label, icon } = _a, prismProps = __objRest(_a, ["label", "icon"]);
    return /* @__PURE__ */ React__default.createElement(core.Tabs.Tab, {
      label,
      icon,
      key: index
    }, /* @__PURE__ */ React__default.createElement(Prism, __spreadProps(__spreadValues({}, prismProps), {
      styles,
      classNames: __spreadProps(__spreadValues({}, classNames), { code: cx(classes.code, classNames == null ? void 0 : classNames.code) })
    })));
  });
  return /* @__PURE__ */ React__default.createElement(core.Tabs, __spreadValues({
    ref,
    variant: "unstyled",
    tabPadding: 0,
    classNames: {
      tabsList: cx(classes.tabs, classNames == null ? void 0 : classNames.tabs),
      tabActive: cx(classes.tabActive, classNames == null ? void 0 : classNames.tabActive),
      tabControl: cx(classes.tab, classNames == null ? void 0 : classNames.tab)
    }
  }, others), tabs);
});
Prism.Tabs = PrismTabs;
Prism.Tab = PrismTab;
Prism.displayName = "@mantine/prism/Prism";
PrismTabs.displayName = "@mantine/prism/Tabs";
PrismTab.displayName = "@mantine/prism/Tab";

exports.Prism = Prism;
exports.PrismTab = PrismTab;
exports.PrismTabs = PrismTabs;
//# sourceMappingURL=Prism.js.map
