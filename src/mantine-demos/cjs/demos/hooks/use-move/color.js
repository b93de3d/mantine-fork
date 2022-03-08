'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var hooks = require('@mantine/hooks');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
const code = `
import { useMantineTheme } from '@mantine/core';
import { useMove } from '@mantine/hooks';

function Demo() {
  const theme = useMantineTheme();
  const [value, setValue] = useState({ x: 0.2, y: 0.6 });
  const { ref } = useMove(setValue);

  const overlayStyles = { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 };

  return (
    <Group position="center">
      <div
        ref={ref}
        style={{
          width: 300,
          height: 150,
          backgroundColor: 'red',
          position: 'relative',
        }}
      >
        {/* Gradient overlays */}
        <div
          style={{ ...overlayStyles, backgroundImage: 'linear-gradient(90deg, #fff, transparent)' }}
        />
        <div
          style={{ ...overlayStyles, backgroundImage: 'linear-gradient(0deg, #000, transparent)' }}
        />

        {/* Thumb */}
        <div
          style={{
            position: 'absolute',
            left: \`calc(\${value.x * 100}% - 8px)\`,
            top: \`calc(\${value.y * 100}% - 8px)\`,
            width: 16,
            height: 16,
            border: '2px solid #fff',
            borderRadius: 16,
            boxShadow: theme.shadows.sm,
          }}
        />
      </div>
    </Group>
  );
}`;
function Demo() {
  const theme = core.useMantineTheme();
  const [value, setValue] = React.useState({ x: 0.2, y: 0.6 });
  const { ref } = hooks.useMove(setValue);
  const overlayStyles = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 };
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement("div", {
    ref,
    style: {
      width: 300,
      height: 150,
      backgroundColor: "red",
      position: "relative"
    }
  }, /* @__PURE__ */ React__default.createElement("div", {
    style: __spreadProps(__spreadValues({}, overlayStyles), { backgroundImage: "linear-gradient(90deg, #fff, transparent)" })
  }), /* @__PURE__ */ React__default.createElement("div", {
    style: __spreadProps(__spreadValues({}, overlayStyles), { backgroundImage: "linear-gradient(0deg, #000, transparent)" })
  }), /* @__PURE__ */ React__default.createElement("div", {
    style: {
      position: "absolute",
      left: `calc(${value.x * 100}% - 8px)`,
      top: `calc(${value.y * 100}% - 8px)`,
      width: 16,
      height: 16,
      border: "2px solid #fff",
      borderRadius: 16,
      boxShadow: theme.shadows.sm
    }
  })));
}
const useMoveColor = {
  type: "demo",
  code,
  component: Demo
};

exports.useMoveColor = useMoveColor;
//# sourceMappingURL=color.js.map
