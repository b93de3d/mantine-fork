import React from 'react';
import { Group, Image, Text } from '@mantine/core';

const code = `
<Image
  width={200}
  height={120}
  src={null}
  alt="Without placeholder"
/>

<Image
  width={200}
  height={120}
  src={null}
  alt="With default placeholder"
  withPlaceholder
/>

<Image
  height={120}
  width={200}
  src="42.png"
  alt="With custom placeholder"
  withPlaceholder
  placeholder={<Text align="center">This image contained the meaning of life</Text>}
/>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Image, {
    width: 200,
    height: 120,
    src: null,
    alt: "Without placeholder"
  }), /* @__PURE__ */ React.createElement(Image, {
    width: 200,
    height: 120,
    src: null,
    alt: "With default placeholder",
    withPlaceholder: true
  }), /* @__PURE__ */ React.createElement(Image, {
    height: 120,
    width: 200,
    src: "42.png",
    alt: "With custom placeholder",
    withPlaceholder: true,
    placeholder: /* @__PURE__ */ React.createElement(Text, {
      align: "center"
    }, "This image contained the meaning of life")
  }));
}
const placeholders = {
  type: "demo",
  code,
  component: Demo
};

export { placeholders };
//# sourceMappingURL=placeholders.js.map
