'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var AuthenticationForm = require('../../../shared/AuthenticationForm/AuthenticationForm.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
const theme = useMantineTheme();

<Modal
  opened={opened}
  onClose={() => setOpened(false)}
  title="Introduce yourself!"
  overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
  overlayOpacity={0.95}
>
  <AuthenticationForm />
</Modal>
`;
function Demo() {
  const [opened, setOpened] = React.useState(false);
  const theme = core.useMantineTheme();
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.Modal, {
    opened,
    onClose: () => setOpened(false),
    title: "Introduce yourself!",
    overlayColor: theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.colors.gray[2],
    overlayOpacity: 0.95
  }, /* @__PURE__ */ React__default.createElement(AuthenticationForm.AuthenticationForm, {
    noPadding: true,
    noShadow: true
  })), /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    onClick: () => setOpened(true)
  }, "Open Modal")));
}
const overlay = {
  type: "demo",
  code,
  component: Demo
};

exports.overlay = overlay;
//# sourceMappingURL=overlay.js.map
