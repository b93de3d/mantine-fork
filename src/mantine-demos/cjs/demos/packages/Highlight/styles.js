'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<Highlight
  align="center"
  highlight={['highlighted', 'default']}
  highlightStyles={(theme) => ({
    backgroundImage: theme.fn.linearGradient(45, theme.colors.cyan[5], theme.colors.indigo[5]),
    fontWeight: 700,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  })}
>
  You can change styles of highlighted part if you do not like default styles
</Highlight>
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Highlight, {
    align: "center",
    highlight: ["highlighted", "default"],
    highlightStyles: (theme) => ({
      backgroundImage: theme.fn.linearGradient(45, theme.colors.cyan[5], theme.colors.indigo[5]),
      fontWeight: 700,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent"
    })
  }, "You can change styles of highlighted part if you do not like default styles");
}
const styles = {
  type: "demo",
  code,
  component: Demo
};

exports.styles = styles;
//# sourceMappingURL=styles.js.map
