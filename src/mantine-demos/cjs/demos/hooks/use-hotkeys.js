'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');
var notifications = require('@mantine/notifications');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useState } from 'react';
import { getHotkeyHandler } from '@mantine/hooks';
import { useNotifications } from '@mantine/notifications';
import { TextInput } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState("I've just used a hotkey to send a message");
  const notifications = useNotifications();

  const handleSubmit = () =>
    notifications.showNotification({ title: 'Your message', message: value });

  const handleSave = () =>
    notifications.showNotification({ title: 'You saved', color: 'teal', message: value });

  return (
    <TextInput
      placeholder="Your message"
      label="Press \u2318+Enter or Ctrl+Enter when input has focus to send message"
      value={value}
      onChange={(event) => setValue(event.target.value)}
      onKeyDown={getHotkeyHandler([
        ['mod+Enter', handleSubmit],
        ['mod+S', handleSave],
      ])}
    />
  );
}
`;
function Demo() {
  hooks.useHotkeys([
    [
      "alt+mod+shift+X",
      () => {
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
      }
    ]
  ]);
  const [value, setValue] = React.useState("I've just used a hotkey to send a message");
  const notifications$1 = notifications.useNotifications();
  const handleSubmit = () => notifications$1.showNotification({ title: "Your message", message: value });
  const handleSave = () => notifications$1.showNotification({ title: "You saved", color: "teal", message: value });
  return /* @__PURE__ */ React__default.createElement(core.TextInput, {
    placeholder: "Your message",
    label: "Press \u2318+Enter or Ctrl+Enter when input has focus to send message",
    value,
    onChange: (event) => setValue(event.target.value),
    onKeyDown: hooks.getHotkeyHandler([
      ["mod+Enter", handleSubmit],
      ["mod+S", handleSave]
    ])
  });
}
const useHotkeysHook = {
  type: "demo",
  code,
  component: Demo
};

exports.useHotkeysHook = useHotkeysHook;
//# sourceMappingURL=use-hotkeys.js.map
