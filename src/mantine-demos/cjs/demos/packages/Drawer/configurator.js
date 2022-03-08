'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var AuthenticationForm = require('../../../shared/AuthenticationForm/AuthenticationForm.js');

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
function Wrapper(props) {
  const [opened, setOpened] = React.useState(false);
  return /* @__PURE__ */ React__default.createElement("div", null, /* @__PURE__ */ React__default.createElement(core.Drawer, __spreadValues({
    opened,
    onClose: () => setOpened(false)
  }, props), /* @__PURE__ */ React__default.createElement(AuthenticationForm.AuthenticationForm, {
    noPadding: true,
    noShadow: true
  })), /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    onClick: () => setOpened(true)
  }, "Open drawer")));
}
const codeTemplate = (props) => `function Demo() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Drawer opened={opened} onClose={() => setOpened(false)}${props}>
        <AuthenticationForm />
      </Drawer>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>Open drawer</Button>
      </Group>
    </>
  );
}`;
const configurator = {
  type: "configurator",
  component: Wrapper,
  codeTemplate,
  configurator: [
    {
      name: "position",
      type: "select",
      initialValue: "left",
      defaultValue: "left",
      data: [
        { label: "left", value: "left" },
        { label: "right", value: "right" },
        { label: "top", value: "top" },
        { label: "bottom", value: "bottom" }
      ]
    },
    { name: "title", type: "string", initialValue: "Register", defaultValue: "" },
    { name: "size", type: "size", initialValue: "md", defaultValue: "md" },
    { name: "padding", type: "size", initialValue: "md", defaultValue: 0 },
    { name: "shadow", type: "size", initialValue: "xs", defaultValue: "md" },
    { name: "hideCloseButton", type: "boolean", initialValue: false, defaultValue: false },
    { name: "noOverlay", type: "boolean", defaultValue: false },
    { name: "noFocusTrap", type: "boolean", defaultValue: false },
    { name: "noScrollLock", type: "boolean", defaultValue: false },
    { name: "noCloseOnClickOutside", type: "boolean", defaultValue: false },
    { name: "noCloseOnEscape", type: "boolean", defaultValue: false }
  ]
};

exports.configurator = configurator;
//# sourceMappingURL=configurator.js.map
