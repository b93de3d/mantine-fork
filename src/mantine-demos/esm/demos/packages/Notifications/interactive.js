import React from 'react';
import { useMantineTheme, Group, Button, TextInput, ActionIcon } from '@mantine/core';
import { EnvelopeClosedIcon, PaperPlaneIcon } from '@modulz/radix-icons';
import { useNotifications } from '@mantine/notifications';

const code = `import React from 'react';
import { Group, Button, ActionIcon, TextInput } from '@mantine/core';
import { EnvelopeClosedIcon, PaperPlaneIcon } from '@modulz/radix-icons';
import { EnvelopeClosedIcon } from '@modulz/radix-icons';

function Demo() {
  const notifications = useNotifications();

  return (
    <Group position="center">
      <Button
        variant="outline"
        leftIcon={<EnvelopeClosedIcon />}
        onClick={() => {
          const id = notifications.showNotification({
            disallowClose: true,
            title: 'Subscribe to email newsletter',
            message: (
              <>
                <div style={{ display: 'flex', paddingTop: 5 }}>
                  <TextInput
                    icon={<EnvelopeClosedIcon />}
                    placeholder="Enter your email"
                    style={{ flex: 1, marginRight: 15 }}
                  />
                  <ActionIcon
                    onClick={() => notifications.hideNotification(id)}
                    size={36}
                    color="blue"
                    variant="filled"
                  >
                    <PaperPlaneIcon />
                  </ActionIcon>
                </div>
              </>
            ),
          });
        }}
      >
        Subscribe to email newsletter
      </Button>
    </Group>
  );
}`;
function Demo() {
  const notifications = useNotifications();
  const theme = useMantineTheme();
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Button, {
    variant: "outline",
    leftIcon: /* @__PURE__ */ React.createElement(EnvelopeClosedIcon, null),
    onClick: () => {
      const id = notifications.showNotification({
        disallowClose: true,
        title: "Subscribe to email newsletter",
        message: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
          style: { display: "flex", paddingTop: 5 }
        }, /* @__PURE__ */ React.createElement(TextInput, {
          icon: /* @__PURE__ */ React.createElement(EnvelopeClosedIcon, null),
          placeholder: "Enter your email",
          style: { flex: 1, marginRight: 15 },
          variant: theme.colorScheme === "dark" ? "filled" : "default",
          styles: {
            input: {
              backgroundColor: theme.colorScheme === "dark" && theme.colors.dark[7]
            }
          }
        }), /* @__PURE__ */ React.createElement(ActionIcon, {
          onClick: () => notifications.hideNotification(id),
          size: 36,
          color: "blue",
          variant: "filled"
        }, /* @__PURE__ */ React.createElement(PaperPlaneIcon, null))))
      });
    }
  }, "Subscribe to email newsletter"));
}
const interactive = {
  type: "demo",
  code,
  component: Demo
};

export { interactive };
//# sourceMappingURL=interactive.js.map
