'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var dates = require('@mantine/dates');

const codeTemplate = (props) => `<DatePicker
 ${props}
/>`;
const configurator = {
  type: "configurator",
  component: dates.DatePicker,
  codeTemplate,
  configuratorProps: { multiline: true, center: false },
  configurator: [
    { name: "placeholder", type: "string", initialValue: "Event date" },
    {
      name: "label",
      type: "string",
      initialValue: "Pick date"
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

exports.configurator = configurator;
//# sourceMappingURL=configurator.js.map
