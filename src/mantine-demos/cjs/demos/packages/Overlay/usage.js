'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useState } from 'react';
import { Button, Group, Overlay } from '@mantine/core';

function Demo() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div style={{ height: 100, position: 'relative' }}>
        {visible && <Overlay opacity={0.6} color="#000" zIndex={5} />}
        <Button color={visible ? 'red' : 'teal'}>
          {!visible ? 'Click as much as you like' : "Won't click, haha"}
        </Button>
      </div>

      <Group position="center">
        <Button onClick={() => setVisible((v) => !v)}>Toggle overlay</Button>
      </Group>
    </>
  );
}
`;
function Demo() {
  const [visible, setVisible] = React.useState(false);
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement("div", {
    style: {
      margin: "auto",
      position: "relative",
      height: 100,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, visible && /* @__PURE__ */ React__default.createElement(core.Overlay, {
    opacity: 0.6,
    color: "#000"
  }), /* @__PURE__ */ React__default.createElement(core.Button, {
    color: visible ? "red" : "teal"
  }, !visible ? "Click as much as you like" : "Won't click, haha")), /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center",
    style: { marginTop: 20 }
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    onClick: () => setVisible((v) => !v)
  }, "Toggle overlay")));
}
const usage = {
  type: "demo",
  code,
  component: Demo
};

exports.usage = usage;
//# sourceMappingURL=usage.js.map
