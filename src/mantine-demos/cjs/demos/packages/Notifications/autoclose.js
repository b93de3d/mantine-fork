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
  const notifications$1 = notifications.useNotifications();
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    variant: "outline",
    onClick: () => notifications$1.showNotification({ message: "I will close in 4 seconds" })
  }, "Notifications Provider timeout"), /* @__PURE__ */ React__default.createElement(core.Button, {
    variant: "outline",
    onClick: () => notifications$1.showNotification({
      message: "I will close in 500ms",
      autoClose: 500
    })
  }, "Closes in 500ms"), /* @__PURE__ */ React__default.createElement(core.Button, {
    variant: "outline",
    onClick: () => notifications$1.showNotification({
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

exports.autoclose = autoclose;
//# sourceMappingURL=autoclose.js.map
