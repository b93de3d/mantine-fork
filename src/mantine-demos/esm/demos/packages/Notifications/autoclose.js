import React from 'react';
import { Group, Button } from '@mantine/core';
import { useNotifications } from '@mantine/notifications';

const code = `import React from 'react';
import { Group, Button } from '@mantine/core';
import { useNotifications } from '@mantine/notifications';
import { CheckIcon } from '@modulz/radix-icons';

function Demo() {
  const notifications = useNotifications();

  return (
    <Group position="center">
      <Button variant="outline" onClick={() =>
        notifications.showNotification({ message: 'I will close in 4 seconds' })
      }>
        Notifications Provider timeout
      </Button>

      <Button variant="outline" onClick={() =>
        notifications.showNotification({ autoClose: 500, message: 'I will close in 500ms' })
      }>
        Closes in 500ms
      </Button>

      <Button variant="outline" onClick={() =>
        notifications.showNotification({
          color: 'blue',
          title: 'I will never close',
          message: 'unless you click X',
          autoClose: false,
        })
      }>
        Never closes automatically
      </Button>
    </Group>
  );
}`;
function Demo() {
  const notifications = useNotifications();
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Button, {
    variant: "outline",
    onClick: () => notifications.showNotification({ message: "I will close in 4 seconds" })
  }, "Notifications Provider timeout"), /* @__PURE__ */ React.createElement(Button, {
    variant: "outline",
    onClick: () => notifications.showNotification({
      message: "I will close in 500ms",
      autoClose: 500
    })
  }, "Closes in 500ms"), /* @__PURE__ */ React.createElement(Button, {
    variant: "outline",
    onClick: () => notifications.showNotification({
      color: "blue",
      title: "I will never close",
      message: "unless you click X",
      autoClose: false
    })
  }, "Never closes automatically"));
}
const autoclose = {
  type: "demo",
  code,
  component: Demo
};

export { autoclose };
//# sourceMappingURL=autoclose.js.map
