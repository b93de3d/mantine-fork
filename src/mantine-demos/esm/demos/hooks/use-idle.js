import React from 'react';
import { Group, Badge } from '@mantine/core';
import { useIdle } from '@mantine/hooks';

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
  const idle = useIdle(2e3);
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Badge, {
    color: idle ? "blue" : "teal"
  }, "Current state: ", idle ? "idle" : "not idle"));
}
function EventsDemo() {
  const idle = useIdle(2e3, { events: ["click", "touchstart"] });
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Badge, {
    color: idle ? "blue" : "teal"
  }, "Current state: ", idle ? "idle" : "not idle"));
}
function InitialStateDemo() {
  const idle = useIdle(2e3, { initialState: false });
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Badge, {
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

export { useIdleEvents, useIdleHook, useIdleInitialState };
//# sourceMappingURL=use-idle.js.map
