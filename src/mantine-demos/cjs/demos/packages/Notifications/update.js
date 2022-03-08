'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var radixIcons = require('@modulz/radix-icons');
var core = require('@mantine/core');
var notifications = require('@mantine/notifications');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `import React from 'react';
import { Group, Button } from '@mantine/core';
import { useNotifications } from '@mantine/notifications';
import { CheckIcon } from '@modulz/radix-icons';

function Demo() {
  const notifications = useNotifications();

  return (
    <Group position="center">
      <Button
        variant="outline"
        onClick={() => {
          const id = notifications.showNotification({
            loading: true,
            title: 'Loading your data',
            message: 'Data will be loaded in 3 seconds, you cannot close this yet',
            autoClose: false,
            disallowClose: true,
          });

          setTimeout(() => {
            notifications.updateNotification(id, {
              id,
              color: 'teal',
              title: 'Data was loaded',
              message:
                'Notification will close in 2 seconds, you can close this notification now',
              icon: <CheckIcon />,
              autoClose: 2000,
            });
          }, 3000);
        }}
      >
        Show update notification
      </Button>
    </Group>
  );
}`;
function Demo() {
  const notifications$1 = notifications.useNotifications();
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    variant: "outline",
    onClick: () => {
      const id = notifications$1.showNotification({
        loading: true,
        title: "Loading your data",
        message: "Data will be loaded in 3 seconds, you cannot close this yet",
        autoClose: false,
        disallowClose: true
      });
      setTimeout(() => {
        notifications$1.updateNotification(id, {
          id,
          color: "teal",
          title: "Data was loaded",
          message: "Notification will close in 2 seconds, you can close this notification now",
          icon: /* @__PURE__ */ React__default.createElement(radixIcons.CheckIcon, null),
          autoClose: 2e3
        });
      }, 3e3);
    }
  }, "Show update notification"));
}
const update = {
  type: "demo",
  code,
  component: Demo
};

exports.update = update;
//# sourceMappingURL=update.js.map
