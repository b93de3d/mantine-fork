import React from 'react';
import { Group, Badge } from '@mantine/core';
import { useReducedMotion } from '@mantine/hooks';

const code = `
import { Badge } from '@mantine/core';
import { useReducedMotion } from '@mantine/hooks';

export function Demo() {
  const reduceMotion = useReducedMotion();

  return (
    <Badge
      color={reduceMotion ? 'red' : 'teal'}
      style={{ transitionDuration: reduceMotion ? '0ms' : '200ms' }}
      variant="filled"
    >
      {reduceMotion ? 'You prefer to reduce motion' : 'You prefer not to reduce motion'}
    </Badge>
  );
}`;
function Demo() {
  const reduceMotion = useReducedMotion();
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Badge, {
    color: reduceMotion ? "red" : "teal",
    style: { transitionDuration: reduceMotion ? "0ms" : "200ms" },
    variant: "filled"
  }, reduceMotion ? "You prefer to reduce motion" : "You prefer not to reduce motion"));
}
const useReducedMotionHook = {
  type: "demo",
  code,
  component: Demo
};

export { useReducedMotionHook };
//# sourceMappingURL=use-reduced-motion.js.map
