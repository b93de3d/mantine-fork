import React, { forwardRef } from 'react';
import useStyles from './Step.styles.js';
import { UnstyledButton } from '../../Button/UnstyledButton/UnstyledButton.js';
import { Transition } from '../../Transition/Transition.js';
import { Loader } from '../../Loader/Loader.js';
import { CheckboxIcon } from '../../Checkbox/CheckboxIcon.js';
import { Text } from '../../Text/Text.js';

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
const defaultIconSizes = {
  xs: 16,
  sm: 18,
  md: 20,
  lg: 22,
  xl: 24
};
const Step = forwardRef((_a, ref) => {
  var _b = _a, {
    className,
    state,
    color,
    icon,
    completedIcon,
    progressIcon,
    label,
    description,
    withIcon = true,
    iconSize,
    size = "md",
    radius = "xl",
    loading,
    allowStepClick = true,
    allowStepSelect,
    iconPosition = "left",
    __staticSelector = "Step",
    classNames,
    styles
  } = _b, others = __objRest(_b, [
    "className",
    "state",
    "color",
    "icon",
    "completedIcon",
    "progressIcon",
    "label",
    "description",
    "withIcon",
    "iconSize",
    "size",
    "radius",
    "loading",
    "allowStepClick",
    "allowStepSelect",
    "iconPosition",
    "__staticSelector",
    "classNames",
    "styles"
  ]);
  const { classes, cx, theme } = useStyles({ color, iconSize, size, radius, allowStepClick, iconPosition }, { name: __staticSelector, classNames, styles });
  const _iconSize = theme.fn.size({ size, sizes: defaultIconSizes });
  const _icon = state === "stepCompleted" ? null : state === "stepProgress" ? progressIcon : icon;
  return /* @__PURE__ */ React.createElement(UnstyledButton, __spreadValues({
    className: cx(classes.step, classes[state], className),
    tabIndex: allowStepClick ? 0 : -1,
    ref
  }, others), withIcon && /* @__PURE__ */ React.createElement("div", {
    className: classes.stepIcon
  }, /* @__PURE__ */ React.createElement(Transition, {
    mounted: state === "stepCompleted",
    transition: "pop",
    duration: 200
  }, (transitionStyles) => /* @__PURE__ */ React.createElement("div", {
    className: classes.stepCompletedIcon,
    style: transitionStyles
  }, loading ? /* @__PURE__ */ React.createElement(Loader, {
    color: "#fff",
    size: _iconSize,
    className: classes.stepLoader
  }) : completedIcon || /* @__PURE__ */ React.createElement(CheckboxIcon, {
    indeterminate: false,
    width: _iconSize,
    height: _iconSize
  }))), state !== "stepCompleted" ? loading ? /* @__PURE__ */ React.createElement(Loader, {
    size: _iconSize
  }) : _icon || icon : null), (label || description) && /* @__PURE__ */ React.createElement("div", {
    className: classes.stepBody
  }, label && /* @__PURE__ */ React.createElement(Text, {
    className: classes.stepLabel
  }, label), description && /* @__PURE__ */ React.createElement(Text, {
    className: classes.stepDescription,
    color: "dimmed"
  }, description)));
});
Step.displayName = "@mantine/core/Step";

export { Step };
//# sourceMappingURL=Step.js.map
