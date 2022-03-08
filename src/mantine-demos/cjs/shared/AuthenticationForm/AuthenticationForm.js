'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');
var radixIcons = require('@modulz/radix-icons');
var core = require('@mantine/core');

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
function AuthenticationForm({
  noShadow,
  noPadding,
  noSubmit,
  style
}) {
  const [formType, setFormType] = React.useState("register");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const theme = core.useMantineTheme();
  const toggleFormType = () => {
    setFormType((current) => current === "register" ? "login" : "register");
    setError(null);
  };
  const form = hooks.useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      termsOfService: true
    },
    validationRules: {
      firstName: (value) => formType === "login" || value.trim().length >= 2,
      lastName: (value) => formType === "login" || value.trim().length >= 2,
      email: (value) => /^\S+@\S+$/.test(value),
      password: (value) => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(value),
      confirmPassword: (val, values) => formType === "login" || val === values.password
    },
    errorMessages: {
      email: "Invalid email",
      password: "Password should contain 1 number, 1 letter and at least 6 characters",
      confirmPassword: "Passwords don't match. Try again"
    }
  });
  const handleSubmit = () => {
    setLoading(true);
    setError(null);
    setTimeout(() => {
      setLoading(false);
      setError(formType === "register" ? "User with this email already exists" : "User with this email does not exist");
    }, 3e3);
  };
  return /* @__PURE__ */ React__default.createElement(core.Paper, {
    padding: noPadding ? 0 : "lg",
    shadow: noShadow ? null : "sm",
    style: __spreadValues({
      position: "relative",
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white
    }, style)
  }, /* @__PURE__ */ React__default.createElement("form", {
    onSubmit: form.onSubmit(handleSubmit)
  }, /* @__PURE__ */ React__default.createElement(core.LoadingOverlay, {
    visible: loading
  }), formType === "register" && /* @__PURE__ */ React__default.createElement(core.Group, {
    grow: true
  }, /* @__PURE__ */ React__default.createElement(core.TextInput, __spreadValues({
    "data-autofocus": true,
    required: true,
    placeholder: "Your first name",
    label: "First name"
  }, form.getInputProps("firstName"))), /* @__PURE__ */ React__default.createElement(core.TextInput, __spreadValues({
    required: true,
    placeholder: "Your last name",
    label: "Last name"
  }, form.getInputProps("lastName")))), /* @__PURE__ */ React__default.createElement(core.TextInput, __spreadValues({
    mt: "md",
    required: true,
    placeholder: "Your email",
    label: "Email",
    icon: /* @__PURE__ */ React__default.createElement(radixIcons.EnvelopeClosedIcon, null)
  }, form.getInputProps("email"))), /* @__PURE__ */ React__default.createElement(core.PasswordInput, __spreadValues({
    mt: "md",
    required: true,
    placeholder: "Password",
    label: "Password",
    icon: /* @__PURE__ */ React__default.createElement(radixIcons.LockClosedIcon, null)
  }, form.getInputProps("password"))), formType === "register" && /* @__PURE__ */ React__default.createElement(core.PasswordInput, __spreadValues({
    mt: "md",
    required: true,
    label: "Confirm Password",
    placeholder: "Confirm password",
    icon: /* @__PURE__ */ React__default.createElement(radixIcons.LockClosedIcon, null)
  }, form.getInputProps("confirmPassword"))), formType === "register" && /* @__PURE__ */ React__default.createElement(core.Checkbox, __spreadValues({
    mt: "xl",
    label: "I agree to sell my soul and privacy to this corporation"
  }, form.getInputProps("termsOfService", { type: "checkbox" }))), error && /* @__PURE__ */ React__default.createElement(core.Text, {
    color: "red",
    size: "sm",
    mt: "sm"
  }, error), !noSubmit && /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "apart",
    mt: "xl"
  }, /* @__PURE__ */ React__default.createElement(core.Anchor, {
    component: "button",
    type: "button",
    color: "gray",
    onClick: toggleFormType,
    size: "sm"
  }, formType === "register" ? "Have an account? Login" : "Don't have an account? Register"), /* @__PURE__ */ React__default.createElement(core.Button, {
    color: "blue",
    type: "submit"
  }, formType === "register" ? "Register" : "Login"))));
}

exports.AuthenticationForm = AuthenticationForm;
//# sourceMappingURL=AuthenticationForm.js.map
