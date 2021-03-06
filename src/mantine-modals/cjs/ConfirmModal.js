'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var context = require('./context.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
function ConfirmModal({
  id,
  cancelProps,
  confirmProps,
  labels,
  closeOnConfirm = true,
  closeOnCancel = true,
  groupProps,
  onCancel,
  onConfirm,
  children
}) {
  const ctx = React.useContext(context.modalsContext);
  const handleCancel = (event) => {
    typeof (cancelProps == null ? void 0 : cancelProps.onClick) === "function" && (cancelProps == null ? void 0 : cancelProps.onClick(event));
    typeof onCancel === "function" && onCancel();
    closeOnCancel && (ctx == null ? void 0 : ctx.closeModal(id));
  };
  const handleConfirm = (event) => {
    typeof (confirmProps == null ? void 0 : confirmProps.onClick) === "function" && (confirmProps == null ? void 0 : confirmProps.onClick(event));
    typeof onConfirm === "function" && onConfirm();
    closeOnConfirm && (ctx == null ? void 0 : ctx.closeModal(id));
  };
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, children && /* @__PURE__ */ React__default.createElement(core.Box, {
    mb: "md"
  }, children), /* @__PURE__ */ React__default.createElement(core.Group, __spreadValues({
    position: "right"
  }, groupProps), /* @__PURE__ */ React__default.createElement(core.Button, __spreadProps(__spreadValues({
    variant: "default"
  }, cancelProps), {
    onClick: handleCancel
  }), (cancelProps == null ? void 0 : cancelProps.children) || labels.cancel), /* @__PURE__ */ React__default.createElement(core.Button, __spreadProps(__spreadValues({}, confirmProps), {
    onClick: handleConfirm
  }), (confirmProps == null ? void 0 : confirmProps.children) || labels.confirm)));
}

exports.ConfirmModal = ConfirmModal;
//# sourceMappingURL=ConfirmModal.js.map
