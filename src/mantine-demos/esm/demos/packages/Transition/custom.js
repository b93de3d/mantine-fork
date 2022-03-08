import React, { useState } from 'react';
import { useClickOutside } from '@mantine/hooks';
import { useMantineTheme, Button, Transition, Paper } from '@mantine/core';

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
import { Transition, Paper, Button } from '@mantine/core';
import { useClickOutside } from '@mantine/hooks';

const scaleY = {
  in: { opacity: 1, transform: 'scaleY(1)' },
  out: { opacity: 0, transform: 'scaleY(0)' },
  common: { transformOrigin: 'top' },
  transitionProperty: 'transform, opacity',
};

function Demo() {
  const [opened, setOpened] = useState(false);
  const clickOutsideRef = useClickOutside(() => setOpened(false));

  return (
    <div
      style={{
        maxWidth: 200,
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        margin: 'auto',
      }}
    >
      <Button onClick={() => setOpened(true)}>Open dropdown</Button>
      <Transition mounted={opened} transition={scaleY} duration={200} timingFunction="ease">
        {(styles) => (
          <Paper
            shadow="md"
            style={{ ...styles, position: 'absolute', top: 0, left: 0, right: 0, height: 120 }}
            ref={clickOutsideRef}
          >
            Dropdown
          </Paper>
        )}
      </Transition>
    </div>
  );
}`;
const scaleY = {
  in: { opacity: 1, transform: "scaleY(1)" },
  out: { opacity: 0, transform: "scaleY(0)" },
  common: { transformOrigin: "top" },
  transitionProperty: "transform, opacity"
};
function Demo() {
  const [opened, setOpened] = useState(false);
  const clickOutsideRef = useClickOutside(() => setOpened(false));
  const theme = useMantineTheme();
  return /* @__PURE__ */ React.createElement("div", {
    style: {
      maxWidth: 200,
      position: "relative",
      display: "flex",
      justifyContent: "center",
      margin: "auto"
    }
  }, /* @__PURE__ */ React.createElement(Button, {
    onClick: () => setOpened(true)
  }, "Open dropdown"), /* @__PURE__ */ React.createElement(Transition, {
    mounted: opened,
    transition: scaleY,
    duration: 200,
    timingFunction: "ease"
  }, (styles) => /* @__PURE__ */ React.createElement(Paper, {
    shadow: "md",
    ref: clickOutsideRef,
    style: __spreadProps(__spreadValues({}, styles), {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: 120,
      padding: theme.spacing.xl,
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white
    })
  }, "Dropdown")));
}
const custom = {
  type: "demo",
  code,
  component: Demo
};

export { Demo, custom };
//# sourceMappingURL=custom.js.map
