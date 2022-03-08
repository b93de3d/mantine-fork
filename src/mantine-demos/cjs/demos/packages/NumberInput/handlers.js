'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useState, useRef } from 'react';
import { NumberInput, Group, ActionIcon, NumberInputHandlers } from '@mantine/core';

function HandlersWrapper() {
  const [value, setValue] = useState(0);
  const handlers = useRef<NumberInputHandlers>();

  return (
    <Group spacing={5}>
      <ActionIcon size={42} variant="default" onClick={() => handlers.current.decrement()}>
        \u2013
      </ActionIcon>
      <NumberInput
        hideControls
        value={value}
        onChange={(val) => setValue(val)}
        handlersRef={handlers}
        max={10}
        min={0}
        step={2}
        styles={{ input: { width: 54, textAlign: 'center' } }}
      />
      <ActionIcon size={42} variant="default" onClick={() => handlers.current.increment()}>
        +
      </ActionIcon>
    </Group>
  );
}
`;
function Demo() {
  const theme = core.useMantineTheme();
  const [value, setValue] = React.useState(0);
  const handlers2 = React.useRef();
  const controlStyles = {
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
    borderColor: theme.colorScheme === "dark" ? "transparent" : theme.colors.gray[4],
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.white,
    transitionDuration: "0ms"
  };
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    spacing: 5,
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.ActionIcon, {
    size: 36,
    variant: theme.colorScheme === "dark" ? "light" : "outline",
    onClick: () => handlers2.current.decrement(),
    style: controlStyles
  }, "\u2013"), /* @__PURE__ */ React__default.createElement(core.NumberInput, {
    hideControls: true,
    value,
    onChange: (val) => setValue(val),
    handlersRef: handlers2,
    placeholder: "0",
    max: 10,
    min: 0,
    step: 2,
    styles: { input: { width: 54, textAlign: "center" } }
  }), /* @__PURE__ */ React__default.createElement(core.ActionIcon, {
    size: 36,
    variant: theme.colorScheme === "dark" ? "light" : "outline",
    onClick: () => handlers2.current.increment(),
    style: controlStyles
  }, "+"));
}
const handlers = {
  type: "demo",
  code,
  component: Demo
};

exports.handlers = handlers;
//# sourceMappingURL=handlers.js.map
