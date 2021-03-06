import React, { forwardRef, useState, useRef } from 'react';
import { getDefaultZIndex, extractMargins, InputWrapper, Input, Popper, Paper, Modal, CloseButton } from '@mantine/core';
import { useUuid, useFocusTrap, useClickOutside, useWindowEvent, useMergedRef } from '@mantine/hooks';
import useStyles from './DatePickerBase.styles.js';

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
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
const RIGHT_SECTION_WIDTH = {
  xs: 24,
  sm: 30,
  md: 34,
  lg: 40,
  xl: 44
};
const DatePickerBase = forwardRef((_a, ref) => {
  var _b = _a, {
    classNames,
    className,
    style,
    styles,
    wrapperProps,
    required,
    allowFreeInput = false,
    label,
    error,
    id,
    description,
    placeholder,
    shadow = "sm",
    transition = "pop-top-left",
    transitionDuration = 200,
    transitionTimingFunction,
    closeDropdownOnScroll = false,
    size = "sm",
    children,
    inputLabel,
    __staticSelector = "DatePickerBase",
    dropdownOpened,
    setDropdownOpened,
    dropdownType = "popover",
    clearable = true,
    clearButtonLabel,
    onClear,
    positionDependencies = [],
    zIndex = getDefaultZIndex("popover"),
    withinPortal = true,
    onBlur,
    onFocus,
    onChange,
    onKeyDown,
    name = "date",
    sx,
    amountOfMonths = 1,
    onDropdownClose,
    onDropdownOpen,
    clickOutsideEvents = ["mouseup", "touchstart"],
    modalZIndex
  } = _b, others = __objRest(_b, [
    "classNames",
    "className",
    "style",
    "styles",
    "wrapperProps",
    "required",
    "allowFreeInput",
    "label",
    "error",
    "id",
    "description",
    "placeholder",
    "shadow",
    "transition",
    "transitionDuration",
    "transitionTimingFunction",
    "closeDropdownOnScroll",
    "size",
    "children",
    "inputLabel",
    "__staticSelector",
    "dropdownOpened",
    "setDropdownOpened",
    "dropdownType",
    "clearable",
    "clearButtonLabel",
    "onClear",
    "positionDependencies",
    "zIndex",
    "withinPortal",
    "onBlur",
    "onFocus",
    "onChange",
    "onKeyDown",
    "name",
    "sx",
    "amountOfMonths",
    "onDropdownClose",
    "onDropdownOpen",
    "clickOutsideEvents",
    "modalZIndex"
  ]);
  const { classes, cx, theme } = useStyles({ size, invalid: !!error }, { classNames, styles, name: __staticSelector });
  const { margins, rest } = extractMargins(others);
  const [dropdownElement, setDropdownElement] = useState(null);
  const [rootElement, setRootElement] = useState(null);
  const [referenceElement, setReferenceElement] = useState(null);
  const uuid = useUuid(id);
  const focusTrapRef = useFocusTrap(!allowFreeInput && dropdownOpened);
  const inputRef = useRef();
  const closeDropdown = () => {
    setDropdownOpened(false);
    onDropdownClose == null ? void 0 : onDropdownClose();
  };
  const openDropdown = () => {
    setDropdownOpened(true);
    onDropdownOpen == null ? void 0 : onDropdownOpen();
  };
  const toggleDropdown = () => {
    setDropdownOpened(!dropdownOpened);
    !dropdownOpened ? onDropdownOpen == null ? void 0 : onDropdownOpen() : onDropdownClose == null ? void 0 : onDropdownClose();
  };
  const closeOnEscape = (event) => {
    if (event.nativeEvent.code === "Escape") {
      closeDropdown();
      window.setTimeout(() => {
        var _a2;
        return (_a2 = inputRef.current) == null ? void 0 : _a2.focus();
      }, 0);
    }
  };
  useClickOutside(() => dropdownType === "popover" && !allowFreeInput && closeDropdown(), clickOutsideEvents, [dropdownElement, rootElement]);
  useWindowEvent("scroll", () => closeDropdownOnScroll && closeDropdown());
  const rightSection = clearable ? /* @__PURE__ */ React.createElement(CloseButton, {
    variant: "transparent",
    "aria-label": clearButtonLabel,
    onClick: onClear,
    size
  }) : null;
  const handleInputBlur = (event) => {
    typeof onBlur === "function" && onBlur(event);
    if (allowFreeInput) {
      closeDropdown();
    }
  };
  const handleInputFocus = (event) => {
    typeof onFocus === "function" && onFocus(event);
    if (allowFreeInput) {
      openDropdown();
    }
  };
  const handleKeyDown = (event) => {
    typeof onKeyDown === "function" && onKeyDown(event);
    if ((event.code === "Space" || event.code === "Enter") && !allowFreeInput) {
      event.preventDefault();
      openDropdown();
    }
  };
  return /* @__PURE__ */ React.createElement(InputWrapper, __spreadValues(__spreadValues({
    required,
    id: uuid,
    label,
    error,
    description,
    className,
    style,
    classNames,
    styles,
    size,
    __staticSelector,
    sx,
    ref: setReferenceElement
  }, margins), wrapperProps), /* @__PURE__ */ React.createElement("div", {
    ref: setRootElement
  }, /* @__PURE__ */ React.createElement("div", {
    className: classes.wrapper
  }, /* @__PURE__ */ React.createElement(Input, __spreadValues({
    classNames: __spreadProps(__spreadValues({}, classNames), {
      input: cx(classes.input, { [classes.freeInput]: allowFreeInput }, classNames == null ? void 0 : classNames.input)
    }),
    styles,
    onClick: () => !allowFreeInput ? toggleDropdown() : openDropdown(),
    onKeyDown: handleKeyDown,
    id: uuid,
    ref: useMergedRef(ref, inputRef),
    __staticSelector,
    size,
    name,
    placeholder,
    value: inputLabel,
    required,
    invalid: !!error,
    readOnly: !allowFreeInput,
    rightSection,
    rightSectionWidth: theme.fn.size({ size, sizes: RIGHT_SECTION_WIDTH }),
    onBlur: handleInputBlur,
    onFocus: handleInputFocus,
    onChange,
    autoComplete: "off"
  }, rest))), dropdownType === "popover" ? /* @__PURE__ */ React.createElement(Popper, {
    referenceElement,
    transitionDuration,
    transitionTimingFunction,
    forceUpdateDependencies: positionDependencies,
    transition,
    mounted: dropdownOpened,
    position: "bottom",
    placement: "start",
    gutter: 10,
    withinPortal,
    withArrow: true,
    arrowSize: 3,
    zIndex,
    arrowClassName: classes.arrow
  }, /* @__PURE__ */ React.createElement("div", {
    className: classes.dropdownWrapper,
    ref: setDropdownElement,
    "data-mantine-stop-propagation": dropdownOpened,
    onKeyDownCapture: closeOnEscape,
    "aria-hidden": allowFreeInput || void 0
  }, /* @__PURE__ */ React.createElement(Paper, {
    className: classes.dropdown,
    shadow,
    ref: focusTrapRef
  }, children))) : /* @__PURE__ */ React.createElement(Modal, {
    opened: dropdownOpened,
    onClose: closeDropdown,
    hideCloseButton: true,
    size: amountOfMonths * 400,
    zIndex: modalZIndex
  }, children)));
});
DatePickerBase.displayName = "@mantine/dates/DatePickerBase";

export { DatePickerBase };
//# sourceMappingURL=DatePickerBase.js.map
