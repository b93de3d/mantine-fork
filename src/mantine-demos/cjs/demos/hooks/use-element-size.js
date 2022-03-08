'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var hooks = require('@mantine/hooks');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useElementSize } from '@mantine/hooks';

function Demo() {
  const theme = useMantineTheme();
  const { ref, width, height } = useElementSize();

  return (
    <>
      <textarea ref={ref} style={{ width: 400, height: 120 }} />
      <div>Width: {width}px, height: {height}px</div>
    </>
  );
}`;
function Demo() {
  const theme = core.useMantineTheme();
  const { ref, width, height } = hooks.useElementSize();
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.Text, {
    align: "center",
    size: "sm",
    style: { marginBottom: theme.spacing.xs }
  }, "Resize textarea by dragging its right bottom corner"), /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement("textarea", {
    ref,
    style: {
      width: 400,
      height: 120,
      border: "none",
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2],
      position: "relative"
    }
  })), /* @__PURE__ */ React__default.createElement(core.Text, {
    align: "center",
    mt: "sm"
  }, "Width: ", width, "px, height: ", height, "px"));
}
const useElementSizeDemo = {
  type: "demo",
  code,
  component: Demo
};

exports.useElementSizeDemo = useElementSizeDemo;
//# sourceMappingURL=use-element-size.js.map
