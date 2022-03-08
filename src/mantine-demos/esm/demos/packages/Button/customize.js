import React from 'react';
import { TwitterLogoIcon } from '@modulz/radix-icons';
import { Group, Button } from '@mantine/core';

const code = `
<Button
  component="a"
  target="_blank"
  rel="noopener noreferrer"
  href="https://twitter.com/mantinedev"
  leftIcon={<TwitterLogoIcon width={18} height={18} />}
  styles={(theme) => ({
    root: {
      backgroundColor: '#00acee',
      border: 0,
      height: 42,
      paddingLeft: 20,
      paddingRight: 20,

      '&:hover': {
        backgroundColor: theme.fn.darken('#00acee', 0.05),
      },
    },

    leftIcon: {
      marginRight: 15,
    },
  })}
>
  Follow on Twitter
</Button>
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Button, {
    component: "a",
    target: "_blank",
    rel: "noopener noreferrer",
    href: "https://twitter.com/mantinedev",
    leftIcon: /* @__PURE__ */ React.createElement(TwitterLogoIcon, {
      width: 18,
      height: 18
    }),
    styles: (theme) => ({
      root: {
        backgroundColor: "#00acee",
        border: 0,
        height: 42,
        paddingLeft: 20,
        paddingRight: 20,
        "&:hover": {
          backgroundColor: theme.fn.darken("#00acee", 0.05)
        }
      },
      leftIcon: {
        marginRight: 15
      }
    })
  }, "Follow on Twitter"));
}
const customize = {
  type: "demo",
  code,
  component: Demo
};

export { customize };
//# sourceMappingURL=customize.js.map
