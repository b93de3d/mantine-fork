'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Notifications_context = require('../Notifications.context.js');

function useNotifications() {
  const context = React.useContext(Notifications_context.NotificationsContext);
  if (!context) {
    throw new Error("@mantine/notifications: NotificationsProvider was not found in tree");
  }
  return context;
}

exports.useNotifications = useNotifications;
//# sourceMappingURL=use-notifications.js.map
