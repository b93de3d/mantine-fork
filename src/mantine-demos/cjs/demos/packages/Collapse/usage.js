'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useState } from 'react';
import { Button, Collapse } from '@mantine/core';

function Demo() {
  const [opened, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen((o) => !o)}>
        Toggle content
      </Button>

      <Collapse in={opened}>
        {/* content... */}
      </Collapse>
    </>
  );
}
`;
function Demo() {
  const [opened, setOpen] = React.useState(false);
  return /* @__PURE__ */ React__default.createElement("div", {
    style: { maxWidth: 400, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center",
    style: { marginBottom: 5 }
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    onClick: () => setOpen((o) => !o),
    style: { marginBottom: 5 }
  }, "Toggle content")), /* @__PURE__ */ React__default.createElement(core.Collapse, {
    in: opened
  }, /* @__PURE__ */ React__default.createElement(core.Text, null, "From Bulbapedia: Bulbasaur is a small, quadrupedal Pok\xE9mon that has blue-green skin with darker patches. It has red eyes with white pupils, pointed, ear-like structures on top of its head, and a short, blunt snout with a wide mouth. A pair of small, pointed teeth are visible in the upper jaw when its mouth is open. Each of its thick legs ends with three sharp claws. On Bulbasaur's back is a green plant bulb, which is grown from a seed planted there at birth. The bulb also conceals two slender, tentacle-like vines and provides it with energy through photosynthesis as well as from the nutrient-rich seeds contained within.")));
}
const usage = {
  type: "demo",
  code,
  component: Demo
};

exports.usage = usage;
//# sourceMappingURL=usage.js.map
