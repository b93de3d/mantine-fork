import React, { useState } from 'react';
import { useHotkeys, getHotkeyHandler } from '@mantine/hooks';
import { useNotifications } from '@mantine/notifications';
import { TextInput } from '@mantine/core';

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
  useHotkeys([
    [
      "alt+mod+shift+X",
      () => {
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
      }
    ]
  ]);
  const [value, setValue] = useState("I've just used a hotkey to send a message");
  const notifications = useNotifications();
  const handleSubmit = () => notifications.showNotification({ title: "Your message", message: value });
  const handleSave = () => notifications.showNotification({ title: "You saved", color: "teal", message: value });
  return /* @__PURE__ */ React.createElement(TextInput, {
    placeholder: "Your message",
    label: "Press \u2318+Enter or Ctrl+Enter when input has focus to send message",
    value,
    onChange: (event) => setValue(event.target.value),
    onKeyDown: getHotkeyHandler([
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

export { useHotkeysHook };
//# sourceMappingURL=use-hotkeys.js.map
