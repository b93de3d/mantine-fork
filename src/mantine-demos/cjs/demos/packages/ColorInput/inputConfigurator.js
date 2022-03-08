'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@mantine/core');

const codeTemplate = (props) => `<ColorInput
 ${props}
/>`;
const inputConfigurator = {
  type: "configurator",
  component: core.ColorInput,
  codeTemplate,
  configuratorProps: { multiline: true },
  configurator: [
    { name: "placeholder", type: "string", initialValue: "Pick color" },
    {
      name: "label",
      type: "string",
      initialValue: "Your favorite color"
    },
    {
      name: "description",
      type: "string",
      initialValue: ""
    },
    {
      name: "error",
      type: "string",
      initialValue: ""
    },
    {
      name: "variant",
      type: "select",
      data: [
        { label: "default", value: "default" },
        { label: "filled", value: "filled" },
        { label: "unstyled", value: "unstyled" }
      ],
      initialValue: "default",
      defaultValue: "default"
    },
    { name: "radius", type: "size", initialValue: "sm", defaultValue: "sm" },
    { name: "size", type: "size", initialValue: "sm", defaultValue: "sm" },
    { name: "disabled", type: "boolean", initialValue: false, defaultValue: false },
    {
      name: "required",
      type: "boolean",
      initialValue: true,
      defaultValue: false
    }
  ]
};

exports.inputConfigurator = inputConfigurator;
//# sourceMappingURL=inputConfigurator.js.map
