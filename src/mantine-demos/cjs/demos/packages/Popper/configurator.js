'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var __defProp = Object.defineProperty;
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
function Wrapper(props) {
  const [referenceElement, setReferenceElement] = React.useState(null);
  const [visible, setVisible] = React.useState(true);
  const theme = core.useMantineTheme();
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center",
    spacing: 0
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    ref: setReferenceElement,
    onClick: () => setVisible((m) => !m)
  }, "Reference element"), /* @__PURE__ */ React__default.createElement(core.Popper, __spreadValues({
    mounted: visible,
    referenceElement,
    transition: "pop-top-left",
    transitionDuration: 200,
    arrowStyle: {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }
  }, props), /* @__PURE__ */ React__default.createElement(core.Paper, {
    style: {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }
  }, /* @__PURE__ */ React__default.createElement(core.Center, {
    style: { height: 100, width: 200 }
  }, "Popper content"))));
}
const codeTemplate = (props) => `
import { useState } from 'react';
import { Popper, Button, Paper, Center, Group, useMantineTheme } from '@mantine/core';

function Demo() {
  const [referenceElement, setReferenceElement] = useState(null);
  const [visible, setVisible] = useState(true);
  const theme = useMantineTheme();

  return (
    <Group position="center">
      <Button ref={setReferenceElement} onClick={() => setVisible((m) => !m)}>
        Reference element
      </Button>

      <Popper
        ${props.split("\n").map((part) => `      ${part}`).join("\n").trim()}
        mounted={visible}
        referenceElement={referenceElement}
        transition="pop-top-left"
        transitionDuration={200}
        arrowStyle={{
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
        }}
      >
        <Paper
          style={{
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
          }}
        >
          <Center style={{ height: 100, width: 200 }}>Popper content</Center>
        </Paper>
      </Popper>
    </Group>
  );
}
`;
const configurator = {
  type: "configurator",
  component: Wrapper,
  codeTemplate,
  configuratorProps: { multiline: true },
  configurator: [
    {
      name: "position",
      type: "select",
      initialValue: "bottom",
      defaultValue: "bottom",
      data: [
        { label: "Bottom", value: "bottom" },
        { label: "Top", value: "top" },
        { label: "Right", value: "right" },
        { label: "Left", value: "left" }
      ]
    },
    {
      name: "placement",
      type: "segmented",
      initialValue: "start",
      defaultValue: "start",
      data: [
        { label: "Start", value: "start" },
        { label: "Center", value: "center" },
        { label: "End", value: "end" }
      ]
    },
    {
      name: "gutter",
      type: "number",
      initialValue: 5,
      defaultValue: 5,
      max: 20,
      min: -20
    },
    {
      name: "arrowSize",
      type: "number",
      initialValue: 5,
      defaultValue: 3,
      max: 15,
      min: 0
    },
    {
      name: "withArrow",
      type: "boolean",
      initialValue: true,
      defaultValue: false
    }
  ]
};

exports.configurator = configurator;
//# sourceMappingURL=configurator.js.map
