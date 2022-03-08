import React from 'react';
import { EyeOpenIcon, CodeIcon, ExternalLinkIcon } from '@modulz/radix-icons';
import { Group, SegmentedControl, Center, Box } from '@mantine/core';

const code = `
import { Center, SegmentedControl, Box } from '@mantine/core';
import { EyeOpenIcon, CodeIcon, ExternalLinkIcon } from '@modulz/radix-icons';

function Demo() {
  return (
    <SegmentedControl
      data={[
        {
          value: 'preview',
          label: (
            <Center>
              <EyeOpenIcon />
              <Box ml={10}>Preview</Box>
            </Center>
          ),
        },
        {
          value: 'code',
          label: (
            <Center>
              <CodeIcon />
              <Box ml={10}>Code</Box>
            </Center>
          ),
        },
        {
          value: 'export',
          label: (
            <Center>
              <ExternalLinkIcon />
              <Box ml={10}>Export</Box>
            </Center>
          ),
        },
      ]}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(SegmentedControl, {
    data: [
      {
        value: "preview",
        label: /* @__PURE__ */ React.createElement(Center, null, /* @__PURE__ */ React.createElement(EyeOpenIcon, null), /* @__PURE__ */ React.createElement(Box, {
          ml: 10
        }, "Preview"))
      },
      {
        value: "code",
        label: /* @__PURE__ */ React.createElement(Center, null, /* @__PURE__ */ React.createElement(CodeIcon, null), /* @__PURE__ */ React.createElement(Box, {
          ml: 10
        }, "Code"))
      },
      {
        value: "export",
        label: /* @__PURE__ */ React.createElement(Center, null, /* @__PURE__ */ React.createElement(ExternalLinkIcon, null), /* @__PURE__ */ React.createElement(Box, {
          ml: 10
        }, "Export"))
      }
    ]
  }));
}
const labels = {
  type: "demo",
  component: Demo,
  code
};

export { labels };
//# sourceMappingURL=labels.js.map
