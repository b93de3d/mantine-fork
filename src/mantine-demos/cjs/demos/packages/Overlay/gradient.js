'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Overlay, Button, useMantineTheme } from '@mantine/core';

function Demo() {
  const theme = useMantineTheme();

  return (
    <div
      style={{
        position: 'relative',
        height: 200,
        width: '100%',
        maxWidth: 400,
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Button>Under overlay</Button>
      <Overlay
        gradient={\`linear-gradient(105deg, \${theme.black} 20%, #312f2f 50%, \${theme.colors.gray[4]} 100%)\`}
      />
    </div>
  );
}
`;
function Demo() {
  const theme = core.useMantineTheme();
  return /* @__PURE__ */ React__default.createElement("div", {
    style: {
      position: "relative",
      height: 200,
      width: "100%",
      maxWidth: 400,
      marginLeft: "auto",
      marginRight: "auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /* @__PURE__ */ React__default.createElement(core.Button, null, "Under overlay"), /* @__PURE__ */ React__default.createElement(core.Overlay, {
    gradient: `linear-gradient(105deg, ${theme.black} 20%, #312f2f 50%, ${theme.colors.gray[4]} 100%)`
  }));
}
const gradient = {
  type: "demo",
  component: Demo,
  code
};

exports.gradient = gradient;
//# sourceMappingURL=gradient.js.map
