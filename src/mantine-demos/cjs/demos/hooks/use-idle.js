'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var hooks = require('@mantine/hooks');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Badge } from '@mantine/core';
import { useIdle } from '@mantine/hooks';

function Demo() {
  const idle = useIdle(2000);
  return <Badge color={idle ? 'blue' : 'teal'}>Current state: {idle ? 'idle' : 'not idle'}</Badge>;
};`;
const eventsCode = `
import { Badge } from '@mantine/core';
import { useIdle } from '@mantine/hooks';

function Demo() {
  const idle = useIdle(2000, { events: ['click', 'touchstart'] });
  return <Badge color={idle ? 'blue' : 'teal'}>Current state: {idle ? 'idle' : 'not idle'}</Badge>;
};`;
const initialStateCode = `
import { Badge } from '@mantine/core';
import { useIdle } from '@mantine/hooks';

function Demo() {
  const idle = useIdle(2000, { initialState: false });
  return <Badge color={idle ? 'blue' : 'teal'}>Current state: {idle ? 'idle' : 'not idle'}</Badge>;
};`;
function Demo() {
  const idle = hooks.useIdle(2e3);
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Badge, {
    color: idle ? "blue" : "teal"
  }, "Current state: ", idle ? "idle" : "not idle"));
}
function EventsDemo() {
  const idle = hooks.useIdle(2e3, { events: ["click", "touchstart"] });
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Badge, {
    color: idle ? "blue" : "teal"
  }, "Current state: ", idle ? "idle" : "not idle"));
}
function InitialStateDemo() {
  const idle = hooks.useIdle(2e3, { initialState: false });
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Badge, {
    color: idle ? "blue" : "teal"
  }, "Current state: ", idle ? "idle" : "not idle"));
}
const useIdleHook = {
  type: "demo",
  code,
  component: Demo
};
const useIdleEvents = {
  type: "demo",
  code: eventsCode,
  component: EventsDemo
};
const useIdleInitialState = {
  type: "demo",
  code: initialStateCode,
  component: InitialStateDemo
};

exports.useIdleEvents = useIdleEvents;
exports.useIdleHook = useIdleHook;
exports.useIdleInitialState = useIdleInitialState;
//# sourceMappingURL=use-idle.js.map
