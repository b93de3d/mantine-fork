'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var radixIcons = require('@modulz/radix-icons');
var core = require('@mantine/core');
var notifications = require('@mantine/notifications');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function Demo() {
  const notifications$1 = notifications.useNotifications();
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    variant: "outline",
    onClick: () => notifications$1.showNotification({
      title: "Default notification",
      message: "Hey there, your code is awesome! \u{1F925}"
    })
  }, "Default"), /* @__PURE__ */ React__default.createElement(core.Button, {
    variant: "outline",
    color: "teal",
    onClick: () => notifications$1.showNotification({
      color: "teal",
      title: "You did great",
      message: "Data was saved",
      icon: /* @__PURE__ */ React__default.createElement(radixIcons.CheckIcon, null)
    })
  }, "Teal with icon"), /* @__PURE__ */ React__default.createElement(core.Button, {
    variant: "outline",
    color: "red",
    onClick: () => notifications$1.showNotification({
      color: "red",
      title: "Bummer!",
      message: "You have no right to do this"
    })
  }, "Red color"), /* @__PURE__ */ React__default.createElement(core.Button, {
    variant: "outline",
    color: "grape",
    onClick: () => notifications$1.showNotification({
      color: "grape",
      title: "I will never close",
      message: "unless you click X",
      autoClose: false
    })
  }, "Never closes automatically"), /* @__PURE__ */ React__default.createElement(core.Button, {
    variant: "outline",
    color: "indigo",
    onClick: () => notifications$1.showNotification({
      color: "indigo",
      title: "Custom autoClose timeout",
      message: "notification will be closed in 10 seconds",
      autoClose: 1e4
    })
  }, "10 seconds timeout"), /* @__PURE__ */ React__default.createElement(core.Button, {
    variant: "outline",
    color: "cyan",
    onClick: () => {
      notifications$1.showNotification({
        id: "data-loading",
        color: "cyan",
        loading: true,
        title: "Loading your data",
        message: "Data will be loaded in 3 seconds, you cannot close this yet",
        autoClose: false,
        disallowClose: true
      });
      setTimeout(() => {
        notifications$1.updateNotification("data-loading", {
          id: "data-loading",
          color: "teal",
          title: "Data was loaded",
          message: "Notification will close in 3 seconds, you can close this notification now",
          icon: /* @__PURE__ */ React__default.createElement(radixIcons.CheckIcon, null),
          autoClose: 3e3
        });
      }, 3e3);
    }
  }, "Loading state and update"));
}
const root = {
  type: "demo",
  component: Demo
};

exports.root = root;
//# sourceMappingURL=root.js.map
