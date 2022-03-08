import React from 'react';
import { ArrowUpIcon } from '@modulz/radix-icons';
import { useWindowScroll } from '@mantine/hooks';
import { Text, Affix, Transition, Button } from '@mantine/core';

const code = `
import { ArrowUpIcon } from '@modulz/radix-icons';
import { useWindowScroll } from '@mantine/hooks';
import { Affix, Button, Text, Transition } from '@mantine/core';

function Demo() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>
      <Text align="center">Affix is located at the bottom of the screen, scroll to see it</Text>
      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              leftIcon={<ArrowUpIcon />}
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
            >
              Scroll to top
            </Button>
          )}
        </Transition>
      </Affix>
    </>
  );
}
`;
function Demo() {
  const [scroll, scrollTo] = useWindowScroll();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Text, {
    align: "center"
  }, "Affix is located at the bottom of the screen, scroll to see it"), /* @__PURE__ */ React.createElement(Affix, {
    position: { bottom: 20, right: 20 }
  }, /* @__PURE__ */ React.createElement(Transition, {
    transition: "slide-up",
    mounted: scroll.y > 0
  }, (transitionStyles) => /* @__PURE__ */ React.createElement(Button, {
    leftIcon: /* @__PURE__ */ React.createElement(ArrowUpIcon, null),
    style: transitionStyles,
    onClick: () => scrollTo({ y: 0 })
  }, "Scroll to top"))));
}
const usage = {
  type: "demo",
  code,
  component: Demo
};

export { usage };
//# sourceMappingURL=usage.js.map
