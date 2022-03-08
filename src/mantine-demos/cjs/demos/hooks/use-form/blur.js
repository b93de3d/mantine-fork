'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var hooks = require('@mantine/hooks');
var CodeDemo = require('../../../components/Demo/CodeDemo/CodeDemo.js');

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
const code = `import { TextInput } from '@mantine/core';
import { useForm } from '@mantine/hooks';

export function Demo() {
  const form = useForm({
    initialValues: { email: '' },
    validationRules: { email: (value) => /^\\S+@\\S+$/.test(value) },
    errorMessages: { email: 'Invalid email' },
  });

  return (
    <TextInput
      required
      label="Email"
      placeholder="your@email.com"
      onBlur={() => form.validateField('email')}
      {...form.getInputProps('email')}
    />
  );
}
`;
function UseFormBlurValidateDemo() {
  const theme = core.useMantineTheme();
  const form = hooks.useForm({
    initialValues: { email: "" },
    validationRules: { email: (value) => /^\S+@\S+$/.test(value) },
    errorMessages: { email: "Invalid email" }
  });
  return /* @__PURE__ */ React__default.createElement(CodeDemo['default'], {
    code,
    language: "tsx",
    demoBackground: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white
  }, /* @__PURE__ */ React__default.createElement("div", {
    style: { maxWidth: 360, margin: "auto" }
  }, /* @__PURE__ */ React__default.createElement(core.TextInput, __spreadValues({
    required: true,
    label: "Email",
    placeholder: "your@email.com",
    onBlur: () => form.validateField("email")
  }, form.getInputProps("email")))));
}

exports.UseFormBlurValidateDemo = UseFormBlurValidateDemo;
//# sourceMappingURL=blur.js.map
