import React, { useState } from 'react';
import { useMediaQuery, useForm } from '@mantine/hooks';
import { Pencil2Icon } from '@modulz/radix-icons';
import { useMantineTheme, Group, Popover, ActionIcon, TextInput, Anchor, Button, Avatar, Text } from '@mantine/core';

const code = `
import { useState } from 'react';
import {
  Popover,
  Button,
  Group,
  TextInput,
  Avatar,
  Text,
  ActionIcon,
  useMantineTheme,
} from '@mantine/core';
import { useForm, useMediaQuery } from '@mantine/hooks';
import { Pencil2Icon } from '@modulz/radix-icons';

interface UserEditFormProps {
  initialValues: { name: string; email: string };
  onSubmit(values: { name: string; email: string }): void;
  onCancel(): void;
}

function UserEditForm({ initialValues, onSubmit, onCancel }: UserEditFormProps) {
  const isMobile = useMediaQuery('(max-width: 755px');

  const form = useForm({
    initialValues,
    validationRules: {
      name: (value) => value.trim().length > 2,
      email: (value) => value.trim().length > 2,
    },
  });

  return (
    <form onSubmit={form.onSubmit(onSubmit)}>
      <TextInput
        required
        label="Name"
        placeholder="Name"
        style={{ minWidth: isMobile ? 220 : 300 }}
        value={form.values.name}
        onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
        error={form.errors.name}
        variant="default"
      />

      <TextInput
        required
        label="Email"
        placeholder="Email"
        style={{ minWidth: isMobile ? 220 : 300, marginTop: 15 }}
        value={form.values.email}
        onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
        error={form.errors.email}
        variant="default"
      />

      <Group position="apart" style={{ marginTop: 15 }}>
        <Anchor component="button" color="gray" size="sm" onClick={onCancel}>
          Cancel
        </Anchor>
        <Button type="submit" size="sm">
          Save
        </Button>
      </Group>
    </form>
  );
}

interface UserProps {
  name: string;
  email: string;
  className?: string;
}

function User({ name, email, className }: UserProps) {
  return (
    <div className={className} style={{ display: 'flex' }}>
      <Avatar style={{ marginRight: 15 }} color="blue">
        {name
          .split(' ')
          .map((part) => part.charAt(0).toUpperCase())
          .slice(0, 2)
          .join('')}
      </Avatar>

      <div>
        <Text>{name}</Text>
        <Text size="xs" color="gray">
          {email}
        </Text>
      </div>
    </div>
  );
}

export function EditUserPopover() {
  const [values, setValues] = useState({ name: 'Bob Handsome', email: 'bob@handsome.inc' });
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();

  return (
    <Group>
      <User name={values.name} email={values.email} />

      <Popover
        opened={opened}
        onClose={() => setOpened(false)}
        position="bottom"
        placement="end"
        withCloseButton
        title="Edit user"
        transition="pop-top-right"
        target={
          <ActionIcon
            variant={theme.colorScheme === 'dark' ? 'hover' : 'light'}
            onClick={() => setOpened((o) => !o)}
          >
            <Pencil2Icon />
          </ActionIcon>
        }
      >
        <UserEditForm
          initialValues={values}
          onCancel={() => setOpened(false)}
          onSubmit={(data) => {
            setValues(data);
            setOpened(false);
          }}
        />
      </Popover>
    </Group>
  );
}
`;
function UserEditForm({ initialValues, onSubmit, onCancel }) {
  const isMobile = useMediaQuery("(max-width: 755px");
  const form2 = useForm({
    initialValues,
    validationRules: {
      name: (value) => value.trim().length > 2,
      email: (value) => value.trim().length > 2
    }
  });
  return /* @__PURE__ */ React.createElement("form", {
    onSubmit: form2.onSubmit(onSubmit)
  }, /* @__PURE__ */ React.createElement(TextInput, {
    "data-autofocus": true,
    required: true,
    label: "Name",
    placeholder: "Name",
    sx: { minWidth: isMobile ? 220 : 300 },
    value: form2.values.name,
    onChange: (event) => form2.setFieldValue("name", event.currentTarget.value),
    error: form2.errors.name,
    variant: "default"
  }), /* @__PURE__ */ React.createElement(TextInput, {
    required: true,
    label: "Email",
    placeholder: "Email",
    variant: "default",
    sx: { minWidth: isMobile ? 220 : 300 },
    mt: "md",
    value: form2.values.email,
    onChange: (event) => form2.setFieldValue("email", event.currentTarget.value),
    error: form2.errors.email
  }), /* @__PURE__ */ React.createElement(Group, {
    position: "apart",
    mt: "md"
  }, /* @__PURE__ */ React.createElement(Anchor, {
    component: "button",
    color: "gray",
    onClick: onCancel,
    size: "sm"
  }, "Cancel"), /* @__PURE__ */ React.createElement(Button, {
    type: "submit"
  }, "Save")));
}
function User({ name, email, className }) {
  return /* @__PURE__ */ React.createElement("div", {
    className,
    style: { display: "flex" }
  }, /* @__PURE__ */ React.createElement(Avatar, {
    mr: "md",
    color: "blue"
  }, name.split(" ").map((part) => part.charAt(0).toUpperCase()).slice(0, 2).join("")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Text, null, name), /* @__PURE__ */ React.createElement(Text, {
    size: "xs",
    color: "gray"
  }, email)));
}
function Demo() {
  const [values, setValues] = useState({ name: "Bob Handsome", email: "bob@handsome.inc" });
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();
  const isMobile = useMediaQuery("(max-width: 510px");
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(User, {
    name: values.name,
    email: values.email
  }), /* @__PURE__ */ React.createElement(Popover, {
    opened,
    onClose: () => setOpened(false),
    position: "bottom",
    placement: isMobile ? "center" : "end",
    withCloseButton: true,
    title: "Edit user",
    transition: "pop-top-right",
    gutter: 15,
    target: /* @__PURE__ */ React.createElement(ActionIcon, {
      variant: theme.colorScheme === "dark" ? "hover" : "light",
      onClick: () => setOpened((o) => !o)
    }, /* @__PURE__ */ React.createElement(Pencil2Icon, null))
  }, /* @__PURE__ */ React.createElement(UserEditForm, {
    initialValues: values,
    onCancel: () => setOpened(false),
    onSubmit: (data) => {
      setValues(data);
      setOpened(false);
    }
  })));
}
const form = {
  type: "demo",
  code,
  demoProps: { toggle: true },
  component: Demo
};

export { Demo, form };
//# sourceMappingURL=form.js.map
