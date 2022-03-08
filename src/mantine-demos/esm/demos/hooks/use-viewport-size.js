import React from 'react';
import { useViewportSize } from '@mantine/hooks';
import { Text } from '@mantine/core';

const code = `
import { useViewportSize } from '@mantine/hooks';

function Demo() {
  const { height, width } = useViewportSize();
  return <>Width: {width}, height: {height}</>;
}
`;
function Demo() {
  const { height, width } = useViewportSize();
  return /* @__PURE__ */ React.createElement(Text, {
    align: "center"
  }, "Width: ", width, ", height: ", height);
}
const useViewportSizeDemo = {
  type: "demo",
  code,
  component: Demo
};

export { useViewportSizeDemo };
//# sourceMappingURL=use-viewport-size.js.map
