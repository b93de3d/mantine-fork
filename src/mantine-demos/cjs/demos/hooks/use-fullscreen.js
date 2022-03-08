'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useFullscreen } from '@mantine/hooks';
import { Button } from '@mantine/core';

function Demo() {
  const theme = useMantineTheme();
  const { toggle, fullscreen } = useFullscreen();

  return (
    <Button onClick={toggle} color={fullscreen ? 'red' : 'blue'}>
      {fullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
    </Button>
  );
}
`;
function Demo() {
  const { toggle, fullscreen } = hooks.useFullscreen();
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    onClick: toggle,
    color: fullscreen ? "red" : "blue"
  }, fullscreen ? "Exit Fullscreen" : "Enter Fullscreen"));
}
const refCode = `
import { useFullscreen } from '@mantine/hooks';
import { Button, Image } from '@mantine/core';

function Demo() {
  const { ref, toggle, fullscreen } = useFullscreen();

  return (
    <>
      <Image
        ref={ref}
        src="https://unsplash.com/image.jpg"
        alt="Unsplash Image to make Fullscreen"
        width={200}
      />

      <Button onClick={toggle} color={fullscreen ? 'red' : 'blue'}>
        {fullscreen ? 'Exit Fullscreen' : 'View Image Fullscreen'}
      </Button>
    </>
  );
}
`;
function RefDemo() {
  const { ref, toggle, fullscreen } = hooks.useFullscreen();
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center",
    direction: "column"
  }, /* @__PURE__ */ React__default.createElement(core.Image, {
    ref,
    src: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    alt: "Unsplash Image to make Fullscreen",
    width: 200
  }), /* @__PURE__ */ React__default.createElement(core.Button, {
    onClick: toggle,
    color: fullscreen ? "red" : "blue"
  }, fullscreen ? "Exit Fullscreen" : "View Image Fullscreen"));
}
const useFullscreenDemo = {
  type: "demo",
  code,
  component: Demo
};
const useFullscreenRefDemo = {
  type: "demo",
  code: refCode,
  component: RefDemo
};

exports.useFullscreenDemo = useFullscreenDemo;
exports.useFullscreenRefDemo = useFullscreenRefDemo;
//# sourceMappingURL=use-fullscreen.js.map
