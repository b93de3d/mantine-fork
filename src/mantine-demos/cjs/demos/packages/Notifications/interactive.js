'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var radixIcons = require('@modulz/radix-icons');
var notifications = require('@mantine/notifications');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
  const notifications$1 = notifications.useNotifications();
  const theme = core.useMantineTheme();
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    variant: "outline",
    leftIcon: /* @__PURE__ */ React__default.createElement(radixIcons.EnvelopeClosedIcon, null),
    onClick: () => {
      const id = notifications$1.showNotification({
        disallowClose: true,
        title: "Subscribe to email newsletter",
        message: /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement("div", {
          style: { display: "flex", paddingTop: 5 }
        }, /* @__PURE__ */ React__default.createElement(core.TextInput, {
          icon: /* @__PURE__ */ React__default.createElement(radixIcons.EnvelopeClosedIcon, null),
          placeholder: "Enter your email",
          style: { flex: 1, marginRight: 15 },
          variant: theme.colorScheme === "dark" ? "filled" : "default",
          styles: {
            input: {
              backgroundColor: theme.colorScheme === "dark" && theme.colors.dark[7]
            }
          }
        }), /* @__PURE__ */ React__default.createElement(core.ActionIcon, {
          onClick: () => notifications$1.hideNotification(id),
          size: 36,
          color: "blue",
          variant: "filled"
        }, /* @__PURE__ */ React__default.createElement(radixIcons.PaperPlaneIcon, null))))
      });
    }
  }, "Subscribe to email newsletter"));
}
const interactive = {
  type: "demo",
  code,
  component: Demo
};

exports.interactive = interactive;
//# sourceMappingURL=interactive.js.map
