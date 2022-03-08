import React from 'react';
import { Text } from '@mantine/core';
import { Toolbar, DEFAULT_CONTROLS, DEFAULT_LABELS } from '@mantine/rte';

const code = `
<RichTextEditor
  controls={[
    ['bold', 'italic', 'underline', 'link', 'image'],
    ['unorderedList', 'h1', 'h2', 'h3'],
    ['sup', 'sub'],
    ['alignLeft', 'alignCenter', 'alignRight'],
  ]}
/>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Text, {
    style: { paddingLeft: 15 }
  }, "Default toolbar:"), /* @__PURE__ */ React.createElement(Toolbar, {
    controls: DEFAULT_CONTROLS,
    labels: DEFAULT_LABELS,
    style: { borderBottomWidth: 0 }
  }), /* @__PURE__ */ React.createElement(Text, {
    style: { paddingLeft: 15, marginTop: 15 }
  }, "Custom toolbar:"), /* @__PURE__ */ React.createElement(Toolbar, {
    controls: [
      ["bold", "italic", "underline", "link", "image"],
      ["unorderedList", "h1", "h2", "h3"],
      ["sup", "sub"],
      ["alignLeft", "alignCenter", "alignRight"]
    ],
    labels: DEFAULT_LABELS,
    style: { borderBottomWidth: 0 }
  }));
}
const toolbar = {
  type: "demo",
  component: Demo,
  code
};

export { toolbar };
//# sourceMappingURL=toolbar.js.map
