import React from 'react';
import { Group, Image } from '@mantine/core';

const image = "https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80";
const code = `
// By default image will have object-fit: cover
<Image
  width={200}
  height={80}
  src="https://images.unsplash.com/long-image-url-was-here.jpg"
/>

// Set fit="contain" to preserve image proportions
// in this case image wrapper will still have given width and height
<Image
  width={200}
  height={80}
  fit="contain"
  src="https://images.unsplash.com/long-image-url-was-here.jpg"
/>

// It's not necessary to use both width and height
<Image
  height={80}
  src="https://images.unsplash.com/long-image-url-was-here.jpg"
/>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Image, {
    width: 200,
    height: 80,
    src: image
  }), /* @__PURE__ */ React.createElement(Image, {
    width: 200,
    height: 80,
    fit: "contain",
    src: image
  }), /* @__PURE__ */ React.createElement(Image, {
    height: 80,
    src: image
  }));
}
const sizes = {
  type: "demo",
  code,
  component: Demo
};

export { sizes };
//# sourceMappingURL=sizes.js.map
