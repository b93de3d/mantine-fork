'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var reactTransitionGroup = require('react-transition-group');
var core = require('@mantine/core');
var hooks = require('@mantine/hooks');
var Notifications_context = require('../Notifications.context.js');
var getPositionStyles = require('./get-position-styles/get-position-styles.js');
var getNotificationStateStyles = require('./get-notification-state-styles/get-notification-state-styles.js');
var NotificationContainer = require('../NotificationContainer/NotificationContainer.js');
var NotificationsProvider_styles = require('./NotificationsProvider.styles.js');
var useNotificationsState = require('./use-notifications-state/use-notifications-state.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
    zIndex = core.getDefaultZIndex("overlay"),
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
  } = useNotificationsState['default']({ limit });
  const reduceMotion = hooks.useReducedMotion();
  const duration = reduceMotion ? 1 : transitionDuration;
  const { classes, cx, theme } = NotificationsProvider_styles['default']();
  const positioning = (POSITIONS.includes(position) ? position : "bottom-right").split("-");
  const items = notifications.map((notification) => /* @__PURE__ */ React__default.createElement(reactTransitionGroup.Transition, {
    key: notification.id,
    timeout: duration,
    unmountOnExit: true,
    mountOnEnter: true,
    onEnter: (node) => node.offsetHeight
  }, (state) => /* @__PURE__ */ React__default.createElement(NotificationContainer['default'], {
    notification,
    onHide: hideNotification,
    className: classes.notification,
    autoClose,
    sx: __spreadValues({}, getNotificationStateStyles['default']({
      state,
      positioning,
      transitionDuration: duration,
      maxHeight: notificationMaxHeight
    }))
  })));
  return /* @__PURE__ */ React__default.createElement(Notifications_context.NotificationsContext.Provider, {
    value: {
      notifications,
      queue,
      showNotification,
      hideNotification,
      updateNotification,
      clean,
      cleanQueue
    }
  }, /* @__PURE__ */ React__default.createElement(core.Portal, {
    zIndex
  }, /* @__PURE__ */ React__default.createElement(core.Box, __spreadValues({
    className: cx(classes.notifications, className),
    style,
    sx: __spreadValues({
      maxWidth: containerWidth
    }, getPositionStyles['default'](positioning, containerWidth, theme.spacing.md))
  }, others), /* @__PURE__ */ React__default.createElement(reactTransitionGroup.TransitionGroup, null, items))), children);
}
NotificationsProvider.displayName = "@mantine/notifications/NotificationsProvider";

exports.NotificationsProvider = NotificationsProvider;
//# sourceMappingURL=NotificationsProvider.js.map
