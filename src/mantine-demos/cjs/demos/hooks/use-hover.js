'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
function Demo() {
  const { hovered, ref } = useHover();
  return (
    <div ref={ref}>
      {hovered ? 'I am hovered' : 'Put mouse over me please'}
    </div>
  );
}
`;
function Demo() {
  const theme = core.useMantineTheme();
  const { hovered, ref } = hooks.useHover();
  return /* @__PURE__ */ React__default.createElement("div", {
    ref,
    style: {
      height: 60,
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.blue[0],
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /* @__PURE__ */ React__default.createElement(core.Text, null, hovered ? "I am hovered" : "Put mouse over me please"));
}
const useHoverHookDemo = {
  type: "demo",
  component: Demo,
  code
};

exports.useHoverHookDemo = useHoverHookDemo;
//# sourceMappingURL=use-hover.js.map
