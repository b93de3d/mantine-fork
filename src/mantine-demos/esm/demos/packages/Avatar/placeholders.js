import React from 'react';
import { StarIcon } from '@modulz/radix-icons';
import { Group, Avatar } from '@mantine/core';

const code = `
// Default placeholder
<Avatar src={null} alt="no image here" />

// Default placeholder with custom color
<Avatar src={null} alt="no image here" color="indigo" />

// Placeholder with initials
<Avatar src={null} alt="Vitaly Rtishchev" color="red">VR</Avatar>

// Placeholder with custom icon
<Avatar color="blue" radius="xl">
  <StarIcon />
</Avatar>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Avatar, {
    src: null,
    alt: "no image here"
  }), /* @__PURE__ */ React.createElement(Avatar, {
    src: null,
    alt: "no image here",
    color: "indigo"
  }), /* @__PURE__ */ React.createElement(Avatar, {
    src: null,
    alt: "no image here",
    color: "red"
  }, "VR"), /* @__PURE__ */ React.createElement(Avatar, {
    color: "blue",
    radius: "xl"
  }, /* @__PURE__ */ React.createElement(StarIcon, {
    style: { width: 24, height: 24 }
  }))));
}
const placeholders = {
  type: "demo",
  code,
  component: Demo
};

export { placeholders };
//# sourceMappingURL=placeholders.js.map
