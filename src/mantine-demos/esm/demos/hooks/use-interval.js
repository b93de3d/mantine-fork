import React, { useState, useEffect } from 'react';
import { Group, Text, Button } from '@mantine/core';
import { useInterval } from '@mantine/hooks';

const code = `import { useState, useEffect } from 'react';
import { useInterval } from '@mantine/hooks';
import { Group, Button, Text } from '@mantine/core';

function Demo() {
  const [seconds, setSeconds] = useState(0);
  const interval = useInterval(() => setSeconds((s) => s + 1), 1000);

  useEffect(() => {
    interval.start();
    return interval.stop;
  }, []);

  return (
    <Group position="center" direction="column">
      <Text>Page loaded <b>{seconds}</b> seconds ago</Text>
      <Button
        onClick={interval.toggle}
        color={interval.active ? 'red' : 'teal'}
        variant="light"
      >
        {interval.active ? 'Stop' : 'Start'} counting
      </Button>
    </Group>
  );
}`;
function Demo() {
  const [seconds, setSeconds] = useState(0);
  const interval = useInterval(() => setSeconds((s) => s + 1), 1e3);
  useEffect(() => {
    interval.start();
    return interval.stop;
  }, []);
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center",
    direction: "column"
  }, /* @__PURE__ */ React.createElement(Text, null, "Page loaded ", /* @__PURE__ */ React.createElement("b", null, seconds), " seconds ago"), /* @__PURE__ */ React.createElement(Button, {
    onClick: interval.toggle,
    color: interval.active ? "red" : "teal",
    variant: "light"
  }, interval.active ? "Stop" : "Start", " counting"));
}
const useIntervalHook = {
  type: "demo",
  code,
  component: Demo
};

export { useIntervalHook };
//# sourceMappingURL=use-interval.js.map
