import React from 'react';
import { Group, Button } from '@mantine/core';
import { useNotifications } from '@mantine/notifications';

const code = `import React from 'react';
import { Group, Button } from '@mantine/core';
import { useNotifications } from '@mantine/notifications';

function Demo() {
  const notifications = useNotifications();

  return (
    <Group position="center">
      <Button
        variant="outline"
        onClick={() => {
          Array(10)
            .fill(0)
            .forEach((_, index) => {
              notifications.showNotification({
                title: \`Notification \${index + 1}\`,
                message: 'Most notifications are added to queue',
                autoClose: false,
              });
            });
        }}
      >
        Show 10 notifications
      </Button>

      <Button variant="outline" color="gray" onClick={() => notifications.cleanQueue()}>
        Clean queue
      </Button>

      <Button variant="outline" color="red" onClick={() => notifications.clean()}>
        Clean all
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
    onClick: () => {
      Array(10).fill(0).forEach((_, index) => {
        notifications.showNotification({
          title: `Notification ${index + 1}`,
          message: "Most notifications are added to queue",
          autoClose: false
        });
      });
    }
  }, "Show 10 notifications"), /* @__PURE__ */ React.createElement(Button, {
    variant: "outline",
    color: "gray",
    onClick: () => notifications.cleanQueue()
  }, "Clean queue"), /* @__PURE__ */ React.createElement(Button, {
    variant: "outline",
    color: "red",
    onClick: () => notifications.clean()
  }, "Clean all"));
}
const clean = {
  type: "demo",
  code,
  component: Demo
};

export { clean };
//# sourceMappingURL=clean.js.map
