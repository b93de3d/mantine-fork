import React from 'react';
import { User, MapPin, CircleCheck } from 'tabler-icons-react';
import { useAccordionState, useMantineTheme, Accordion, SimpleGrid, TextInput, Textarea, Group, Button, Text } from '@mantine/core';

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
  const [state, handlers] = useAccordionState({ total: 3, initialItem: 0 });
  const theme = useMantineTheme();
  const breakpoints = [{ maxWidth: "sm", cols: 1 }];
  return /* @__PURE__ */ React.createElement(Accordion, {
    state,
    onChange: handlers.setState,
    disableIconRotation: true
  }, /* @__PURE__ */ React.createElement(Accordion.Item, {
    label: "Personal information",
    icon: /* @__PURE__ */ React.createElement(User, {
      color: theme.colors.blue[6]
    })
  }, /* @__PURE__ */ React.createElement(SimpleGrid, {
    cols: 2,
    breakpoints
  }, /* @__PURE__ */ React.createElement(TextInput, {
    label: "Email",
    placeholder: "Email",
    required: true
  }), /* @__PURE__ */ React.createElement(TextInput, {
    label: "Full name",
    placeholder: "Full name",
    required: true
  })), /* @__PURE__ */ React.createElement(Textarea, {
    label: "Your message",
    placeholder: "Message (optional)",
    mt: "md",
    minRows: 2,
    autosize: true
  }), /* @__PURE__ */ React.createElement(Group, {
    position: "right",
    mt: "xl"
  }, /* @__PURE__ */ React.createElement(Button, {
    onClick: () => handlers.toggle(1)
  }, "Next step"))), /* @__PURE__ */ React.createElement(Accordion.Item, {
    label: "Shipping address",
    icon: /* @__PURE__ */ React.createElement(MapPin, {
      color: theme.colors.red[6]
    })
  }, /* @__PURE__ */ React.createElement(SimpleGrid, {
    cols: 3,
    breakpoints
  }, /* @__PURE__ */ React.createElement(TextInput, {
    label: "City",
    placeholder: "City"
  }), /* @__PURE__ */ React.createElement(TextInput, {
    label: "State",
    placeholder: "State"
  }), /* @__PURE__ */ React.createElement(TextInput, {
    label: "Zip",
    placeholder: "Zip"
  })), /* @__PURE__ */ React.createElement(Textarea, {
    label: "Additional information",
    placeholder: "Additional information",
    autosize: true,
    mt: "md",
    minRows: 2
  }), /* @__PURE__ */ React.createElement(Group, {
    position: "apart",
    mt: "xl"
  }, /* @__PURE__ */ React.createElement(Button, {
    variant: "default",
    onClick: () => handlers.toggle(0)
  }, "Previous step"), /* @__PURE__ */ React.createElement(Button, {
    onClick: () => handlers.toggle(2)
  }, "Next step"))), /* @__PURE__ */ React.createElement(Accordion.Item, {
    label: "Confirmation",
    icon: /* @__PURE__ */ React.createElement(CircleCheck, {
      color: theme.colors.teal[6]
    })
  }, /* @__PURE__ */ React.createElement(Text, null, "All done!"), /* @__PURE__ */ React.createElement(Text, {
    color: "dimmed",
    size: "sm"
  }, "We will start processing your order soon"), /* @__PURE__ */ React.createElement(Group, {
    position: "left",
    mt: "xl"
  }, /* @__PURE__ */ React.createElement(Button, {
    variant: "default",
    onClick: () => handlers.toggle(1)
  }, "Previous step"))));
}
const form = {
  type: "demo",
  component: Demo,
  code
};

export { form };
//# sourceMappingURL=form.js.map
