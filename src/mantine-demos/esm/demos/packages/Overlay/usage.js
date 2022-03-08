import React, { useState } from 'react';
import { Overlay, Button, Group } from '@mantine/core';

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
  const [visible, setVisible] = useState(false);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    style: {
      margin: "auto",
      position: "relative",
      height: 100,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, visible && /* @__PURE__ */ React.createElement(Overlay, {
    opacity: 0.6,
    color: "#000"
  }), /* @__PURE__ */ React.createElement(Button, {
    color: visible ? "red" : "teal"
  }, !visible ? "Click as much as you like" : "Won't click, haha")), /* @__PURE__ */ React.createElement(Group, {
    position: "center",
    style: { marginTop: 20 }
  }, /* @__PURE__ */ React.createElement(Button, {
    onClick: () => setVisible((v) => !v)
  }, "Toggle overlay")));
}
const usage = {
  type: "demo",
  code,
  component: Demo
};

export { usage };
//# sourceMappingURL=usage.js.map
