'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var tablerIconsReact = require('tabler-icons-react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { User, MapPin, CircleCheck } from 'tabler-icons-react';
import { TextInput, Textarea, Group, Button, ThemeIcon, Text, SimpleGrid, Accordion, useAccordionState } from '@mantine/core';

function Demo() {
  const [state, handlers] = useAccordionState({ total: 3, initialItem: 0 });
  const theme = useMantineTheme();
  const breakpoints = [{ maxWidth: 'sm' as const, cols: 1 }];

  return (
    <Accordion state={state} onChange={handlers.setState} disableIconRotation>
      <Accordion.Item label="Personal information" icon={<User color={theme.colors.blue[6]} />}>
        <SimpleGrid cols={2} breakpoints={breakpoints}>
          <TextInput label="Email" placeholder="Email" required />
          <TextInput label="Full name" placeholder="Full name" required />
        </SimpleGrid>
        <Textarea
          label="Your message"
          placeholder="Message (optional)"
          mt="md"
          minRows={2}
          autosize
        />
        <Group position="right" mt="xl">
          <Button onClick={() => handlers.toggle(1)}>Next step</Button>
        </Group>
      </Accordion.Item>
      <Accordion.Item label="Shipping address" icon={<MapPin color={theme.colors.red[6]} />}>
        <SimpleGrid cols={3} breakpoints={breakpoints}>
          <TextInput label="City" placeholder="City" />
          <TextInput label="State" placeholder="State" />
          <TextInput label="Zip" placeholder="Zip" />
        </SimpleGrid>

        <Textarea
          label="Additional information"
          placeholder="Additional information"
          autosize
          mt="md"
          minRows={2}
        />

        <Group position="apart" mt="xl">
          <Button variant="default" onClick={() => handlers.toggle(0)}>
            Previous step
          </Button>
          <Button onClick={() => handlers.toggle(2)}>Next step</Button>
        </Group>
      </Accordion.Item>
      <Accordion.Item label="Confirmation" icon={<CircleCheck color={theme.colors.teal[6]} />}>
        <Text>All done!</Text>
        <Text color="dimmed" size="sm">
          We will start processing your order soon
        </Text>
        <Group position="left" mt="xl">
          <Button variant="default" onClick={() => handlers.toggle(1)}>
            Previous step
          </Button>
        </Group>
      </Accordion.Item>
    </Accordion>
  );
}
`;
function Demo() {
  const [state, handlers] = core.useAccordionState({ total: 3, initialItem: 0 });
  const theme = core.useMantineTheme();
  const breakpoints = [{ maxWidth: "sm", cols: 1 }];
  return /* @__PURE__ */ React__default.createElement(core.Accordion, {
    state,
    onChange: handlers.setState,
    disableIconRotation: true
  }, /* @__PURE__ */ React__default.createElement(core.Accordion.Item, {
    label: "Personal information",
    icon: /* @__PURE__ */ React__default.createElement(tablerIconsReact.User, {
      color: theme.colors.blue[6]
    })
  }, /* @__PURE__ */ React__default.createElement(core.SimpleGrid, {
    cols: 2,
    breakpoints
  }, /* @__PURE__ */ React__default.createElement(core.TextInput, {
    label: "Email",
    placeholder: "Email",
    required: true
  }), /* @__PURE__ */ React__default.createElement(core.TextInput, {
    label: "Full name",
    placeholder: "Full name",
    required: true
  })), /* @__PURE__ */ React__default.createElement(core.Textarea, {
    label: "Your message",
    placeholder: "Message (optional)",
    mt: "md",
    minRows: 2,
    autosize: true
  }), /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "right",
    mt: "xl"
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    onClick: () => handlers.toggle(1)
  }, "Next step"))), /* @__PURE__ */ React__default.createElement(core.Accordion.Item, {
    label: "Shipping address",
    icon: /* @__PURE__ */ React__default.createElement(tablerIconsReact.MapPin, {
      color: theme.colors.red[6]
    })
  }, /* @__PURE__ */ React__default.createElement(core.SimpleGrid, {
    cols: 3,
    breakpoints
  }, /* @__PURE__ */ React__default.createElement(core.TextInput, {
    label: "City",
    placeholder: "City"
  }), /* @__PURE__ */ React__default.createElement(core.TextInput, {
    label: "State",
    placeholder: "State"
  }), /* @__PURE__ */ React__default.createElement(core.TextInput, {
    label: "Zip",
    placeholder: "Zip"
  })), /* @__PURE__ */ React__default.createElement(core.Textarea, {
    label: "Additional information",
    placeholder: "Additional information",
    autosize: true,
    mt: "md",
    minRows: 2
  }), /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "apart",
    mt: "xl"
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    variant: "default",
    onClick: () => handlers.toggle(0)
  }, "Previous step"), /* @__PURE__ */ React__default.createElement(core.Button, {
    onClick: () => handlers.toggle(2)
  }, "Next step"))), /* @__PURE__ */ React__default.createElement(core.Accordion.Item, {
    label: "Confirmation",
    icon: /* @__PURE__ */ React__default.createElement(tablerIconsReact.CircleCheck, {
      color: theme.colors.teal[6]
    })
  }, /* @__PURE__ */ React__default.createElement(core.Text, null, "All done!"), /* @__PURE__ */ React__default.createElement(core.Text, {
    color: "dimmed",
    size: "sm"
  }, "We will start processing your order soon"), /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "left",
    mt: "xl"
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    variant: "default",
    onClick: () => handlers.toggle(1)
  }, "Previous step"))));
}
const form = {
  type: "demo",
  component: Demo,
  code
};

exports.form = form;
//# sourceMappingURL=form.js.map
