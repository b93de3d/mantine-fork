import React from 'react';
import { useMantineTheme, Text, Group } from '@mantine/core';
import { useElementSize } from '@mantine/hooks';

const code = `
import { useElementSize } from '@mantine/hooks';

function Demo() {
  const theme = useMantineTheme();
  const { ref, width, height } = useElementSize();

  return (
    <>
      <textarea ref={ref} style={{ width: 400, height: 120 }} />
      <div>Width: {width}px, height: {height}px</div>
    </>
  );
}`;
function Demo() {
  const theme = useMantineTheme();
  const { ref, width, height } = useElementSize();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Text, {
    align: "center",
    size: "sm",
    style: { marginBottom: theme.spacing.xs }
  }, "Resize textarea by dragging its right bottom corner"), /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement("textarea", {
    ref,
    style: {
      width: 400,
      height: 120,
      border: "none",
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2],
      position: "relative"
    }
  })), /* @__PURE__ */ React.createElement(Text, {
    align: "center",
    mt: "sm"
  }, "Width: ", width, "px, height: ", height, "px"));
}
const useElementSizeDemo = {
  type: "demo",
  code,
  component: Demo
};

export { useElementSizeDemo };
//# sourceMappingURL=use-element-size.js.map
