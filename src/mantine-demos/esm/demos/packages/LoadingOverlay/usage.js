import React, { useState } from 'react';
import { useMantineTheme, LoadingOverlay, Group, Button } from '@mantine/core';
import { AuthenticationForm } from '../../../shared/AuthenticationForm/AuthenticationForm.js';
import { demoBase } from './_demo-base.js';

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
const code = `import React, { useState } from 'react';
import { LoadingOverlay, Button, Group } from '@mantine/core';

function Demo() {
  const [visible, setVisible] = useState(false);

  // Note that position: relative is required
  return (
    <>
      <div style={{ width: 400, position: 'relative' }}>
        <LoadingOverlay visible={visible} />
        <AuthenticationForm />
      </div>

      <Group position="center">
        <Button onClick={() => setVisible((v) => !v)}>Toggle overlay</Button>
      </Group>
    </>
  );
}`;
function Demo() {
  const [visible, setVisible] = useState(false);
  const theme = useMantineTheme();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    style: {
      borderRadius: 4,
      position: "relative",
      margin: "auto"
    }
  }, /* @__PURE__ */ React.createElement(LoadingOverlay, {
    visible,
    zIndex: 1e3,
    style: { borderRadius: 4 }
  }), /* @__PURE__ */ React.createElement(AuthenticationForm, {
    noSubmit: true,
    noShadow: theme.colorScheme === "dark"
  })), /* @__PURE__ */ React.createElement(Group, {
    position: "center",
    style: { marginTop: 20 }
  }, /* @__PURE__ */ React.createElement(Button, {
    onClick: () => setVisible((v) => !v)
  }, "Toggle overlay")));
}
const usage = __spreadProps(__spreadValues({}, demoBase), {
  type: "demo",
  code,
  component: Demo
});

export { Demo, usage };
//# sourceMappingURL=usage.js.map
