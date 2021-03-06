import React, { useRef, useEffect } from 'react';
import { Notification } from '@mantine/core';
import getAutoClose from './get-auto-close/get-auto-close.js';

function NotificationContainer({
  className,
  sx,
  notification,
  autoClose,
  onHide
}) {
  const autoCloseTimeout = getAutoClose(autoClose, notification);
  const hideTimeout = useRef();
  const handleHide = () => {
    onHide(notification.id);
    window.clearTimeout(hideTimeout.current);
  };
  const cancelDelayedHide = () => {
    clearTimeout(hideTimeout.current);
  };
  const handleDelayedHide = () => {
    if (typeof autoCloseTimeout === "number") {
      hideTimeout.current = window.setTimeout(handleHide, autoCloseTimeout);
    }
  };
  useEffect(() => {
    if (typeof notification.onOpen === "function") {
      notification.onOpen(notification);
    }
  }, []);
  useEffect(() => {
    handleDelayedHide();
    return cancelDelayedHide;
  }, [autoClose, notification.autoClose]);
  return /* @__PURE__ */ React.createElement(Notification, {
    sx,
    className,
    title: notification.title,
    onClose: handleHide,
    color: notification.color,
    radius: notification.radius,
    icon: notification.icon,
    loading: notification.loading,
    disallowClose: notification.disallowClose,
    onMouseEnter: cancelDelayedHide,
    onMouseLeave: handleDelayedHide
  }, notification.message);
}
NotificationContainer.displayName = "@mantine/notifications/NotificationContainer";

export default NotificationContainer;
//# sourceMappingURL=NotificationContainer.js.map
