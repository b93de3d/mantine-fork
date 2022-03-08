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
          Array(10).fill(0).forEach((_, index) => {
            setTimeout(() => {
              notifications.showNotification({
                title: \`Notification \${index + 1}\`,
                message: 'Most notifications are added to queue',
              });
            }, 200 * index);
          });
        }}
      >
        Show 10 notifications
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
        setTimeout(() => {
          notifications.showNotification({
            title: `Notification ${index + 1}`,
            message: "Most notifications are added to queue"
          });
        }, 200 * index);
      });
    }
  }, "Show 10 notifications"));
}
const limit = {
  type: "demo",
  code,
  component: Demo
};

export { limit };
//# sourceMappingURL=limit.js.map
