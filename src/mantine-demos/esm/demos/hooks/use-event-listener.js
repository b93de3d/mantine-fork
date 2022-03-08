import React, { useState, useCallback } from 'react';
import { Group, Button } from '@mantine/core';
import { useEventListener } from '@mantine/hooks';

const code = `
import { useState, useCallback } from 'react';
import { Button, Group } from '@mantine/core';
import { useEventListener } from '@mantine/hooks';

function Demo() {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount((c) => c + 1), []);
  const ref = useEventListener('click', increment);

  return (
    <Group position="center">
      <Button ref={ref}>Button clicks: {count}</Button>
    </Group>
  );
}
`;
function Demo() {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount((c) => c + 1), []);
  const ref = useEventListener("click", increment);
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Button, {
    ref
  }, "Button clicks: ", count));
}
const useEventListenerDemo = {
  type: "demo",
  code,
  component: Demo
};

export { useEventListenerDemo };
//# sourceMappingURL=use-event-listener.js.map
