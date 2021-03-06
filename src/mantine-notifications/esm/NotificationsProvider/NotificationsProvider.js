import React from 'react';
import { Transition, TransitionGroup } from 'react-transition-group';
import { getDefaultZIndex, Portal, Box } from '@mantine/core';
import { useReducedMotion } from '@mantine/hooks';
import { NotificationsContext } from '../Notifications.context.js';
import getPositionStyles from './get-position-styles/get-position-styles.js';
import getNotificationStateStyles from './get-notification-state-styles/get-notification-state-styles.js';
import NotificationContainer from '../NotificationContainer/NotificationContainer.js';
import useStyles from './NotificationsProvider.styles.js';
import useNotificationsState from './use-notifications-state/use-notifications-state.js';

var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const POSITIONS = [
  "top-left",
  "top-right",
  "top-center",
  "bottom-left",
  "bottom-right",
  "bottom-center"
];
function NotificationsProvider(_a) {
  var _b = _a, {
    className,
    position = "bottom-right",
    autoClose = 4e3,
    transitionDuration = 250,
    containerWidth = 440,
    notificationMaxHeight = 200,
    limit = 5,
    zIndex = getDefaultZIndex("overlay"),
    style,
    children
  } = _b, others = __objRest(_b, [
    "className",
    "position",
    "autoClose",
    "transitionDuration",
    "containerWidth",
    "notificationMaxHeight",
    "limit",
    "zIndex",
    "style",
    "children"
  ]);
  const {
    notifications,
    queue,
    showNotification,
    updateNotification,
    hideNotification,
    clean,
    cleanQueue
  } = useNotificationsState({ limit });
  const reduceMotion = useReducedMotion();
  const duration = reduceMotion ? 1 : transitionDuration;
  const { classes, cx, theme } = useStyles();
  const positioning = (POSITIONS.includes(position) ? position : "bottom-right").split("-");
  const items = notifications.map((notification) => /* @__PURE__ */ React.createElement(Transition, {
    key: notification.id,
    timeout: duration,
    unmountOnExit: true,
    mountOnEnter: true,
    onEnter: (node) => node.offsetHeight
  }, (state) => /* @__PURE__ */ React.createElement(NotificationContainer, {
    notification,
    onHide: hideNotification,
    className: classes.notification,
    autoClose,
    sx: __spreadValues({}, getNotificationStateStyles({
      state,
      positioning,
      transitionDuration: duration,
      maxHeight: notificationMaxHeight
    }))
  })));
  return /* @__PURE__ */ React.createElement(NotificationsContext.Provider, {
    value: {
      notifications,
      queue,
      showNotification,
      hideNotification,
      updateNotification,
      clean,
      cleanQueue
    }
  }, /* @__PURE__ */ React.createElement(Portal, {
    zIndex
  }, /* @__PURE__ */ React.createElement(Box, __spreadValues({
    className: cx(classes.notifications, className),
    style,
    sx: __spreadValues({
      maxWidth: containerWidth
    }, getPositionStyles(positioning, containerWidth, theme.spacing.md))
  }, others), /* @__PURE__ */ React.createElement(TransitionGroup, null, items))), children);
}
NotificationsProvider.displayName = "@mantine/notifications/NotificationsProvider";

export { NotificationsProvider };
//# sourceMappingURL=NotificationsProvider.js.map
