import React, { useRef } from 'react';
import { Group, Button } from '@mantine/core';
import { BaseDemo } from './_base.js';

const code = `
import { useRef } from 'react';
import { Button, Group } from '@mantine/core';
import { Dropzone } from '@mantine/dropzone';

function Demo() {
  const openRef = useRef();
  return (
    <>
      <Dropzone openRef={openRef}>
        {/* children */}
      </Dropzone>

      <Group position="center" mt="md">
        <Button onClick={() => openRef.current()}>Select files</Button>
      </Group>
    </>
  );
}


`;
function Demo() {
  const openRef = useRef();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(BaseDemo, {
    openRef
  }), /* @__PURE__ */ React.createElement(Group, {
    position: "center",
    mt: "md"
  }, /* @__PURE__ */ React.createElement(Button, {
    onClick: () => openRef.current()
  }, "Select files")));
}
const manual = {
  type: "demo",
  component: Demo,
  code
};

export { manual };
//# sourceMappingURL=manual.js.map
