import React from 'react';
import { Highlight } from '@mantine/core';

const code = `
<Highlight
  align="center"
  highlight={['highlighted', 'default']}
  highlightStyles={(theme) => ({
    backgroundImage: theme.fn.linearGradient(45, theme.colors.cyan[5], theme.colors.indigo[5]),
    fontWeight: 700,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  })}
>
  You can change styles of highlighted part if you do not like default styles
</Highlight>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Highlight, {
    align: "center",
    highlight: ["highlighted", "default"],
    highlightStyles: (theme) => ({
      backgroundImage: theme.fn.linearGradient(45, theme.colors.cyan[5], theme.colors.indigo[5]),
      fontWeight: 700,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent"
    })
  }, "You can change styles of highlighted part if you do not like default styles");
}
const styles = {
  type: "demo",
  code,
  component: Demo
};

export { styles };
//# sourceMappingURL=styles.js.map
