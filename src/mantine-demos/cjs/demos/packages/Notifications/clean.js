'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var notifications = require('@mantine/notifications');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
  const notifications$1 = notifications.useNotifications();
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    variant: "outline",
    onClick: () => {
      Array(10).fill(0).forEach((_, index) => {
        notifications$1.showNotification({
          title: `Notification ${index + 1}`,
          message: "Most notifications are added to queue",
          autoClose: false
        });
      });
    }
  }, "Show 10 notifications"), /* @__PURE__ */ React__default.createElement(core.Button, {
    variant: "outline",
    color: "gray",
    onClick: () => notifications$1.cleanQueue()
  }, "Clean queue"), /* @__PURE__ */ React__default.createElement(core.Button, {
    variant: "outline",
    color: "red",
    onClick: () => notifications$1.clean()
  }, "Clean all"));
}
const clean = {
  type: "demo",
  code,
  component: Demo
};

exports.clean = clean;
//# sourceMappingURL=clean.js.map
