import React, { useState } from 'react';
import { Group, Button, Collapse, Text } from '@mantine/core';

const code = `
import { useState } from 'react';
import { Button, Collapse } from '@mantine/core';

function Demo() {
  const [opened, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen((o) => !o)}>
        Toggle with linear transition
      </Button>

      <Collapse in={opened} transitionDuration={1000} transitionTimingFunction="linear">
        {/* content... */}
      </Collapse>
    </>
  );
}
`;
function Demo() {
  const [opened, setOpen] = useState(false);
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 400, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React.createElement(Group, {
    position: "center",
    style: { marginBottom: 5 }
  }, /* @__PURE__ */ React.createElement(Button, {
    onClick: () => setOpen((o) => !o)
  }, "Toggle with linear transition")), /* @__PURE__ */ React.createElement(Collapse, {
    in: opened,
    transitionDuration: 1e3,
    transitionTimingFunction: "linear"
  }, /* @__PURE__ */ React.createElement(Text, null, "From Bulbapedia: Bulbasaur is a small, quadrupedal Pok\xE9mon that has blue-green skin with darker patches. It has red eyes with white pupils, pointed, ear-like structures on top of its head, and a short, blunt snout with a wide mouth. A pair of small, pointed teeth are visible in the upper jaw when its mouth is open. Each of its thick legs ends with three sharp claws. On Bulbasaur's back is a green plant bulb, which is grown from a seed planted there at birth. The bulb also conceals two slender, tentacle-like vines and provides it with energy through photosynthesis as well as from the nutrient-rich seeds contained within.")));
}
const transition = {
  type: "demo",
  code,
  component: Demo
};

export { transition };
//# sourceMappingURL=transition.js.map
