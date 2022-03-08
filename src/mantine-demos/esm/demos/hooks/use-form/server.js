import React, { useState } from 'react';
import { useMantineTheme, LoadingOverlay, TextInput, Group, Button } from '@mantine/core';
import { useForm } from '@mantine/hooks';
import CodeDemo from '../../../components/Demo/CodeDemo/CodeDemo.js';

const code = `import { useState } from 'react';
import { TextInput, Button } from '@mantine/core';
import { useForm } from '@mantine/hooks';

export function Demo() {
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState<string>(null);
  const form = useForm({
    initialValues: { email: 'test@mantine.dev' },
    validationRules: {
      email: (value) => /^\\S+@\\S+$/.test(value),
    },
  });

  const handleSubmit = (values: typeof form['values']) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (values.email === 'test@mantine.dev') {
        setServerError('Email already taken');
        form.setFieldError('email', true);
      }
    }, 1500);
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)} style={{ position: 'relative' }}>
      <LoadingOverlay visible={loading} />
      <TextInput
        required
        label="Email"
        placeholder="your@email.com"
        error={form.errors.email && (serverError || 'Please specify valid email')}
        value={form.values.email}
        onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
        onFocus={() => {
          setServerError(null);
          form.setFieldError('email', false);
        }}
      />

      <Button type="submit">Register</Button>
    </form>
  );
}
`;
function UseFormServerValidationDemo() {
  const theme = useMantineTheme();
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState(null);
  const form = useForm({
    initialValues: { email: "test@mantine.dev" },
    validationRules: {
      email: (value) => /^\S+@\S+$/.test(value)
    }
  });
  const handleSubmit = (values) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (values.email === "test@mantine.dev") {
        setServerError("Email already taken");
        form.setFieldError("email", true);
      }
    }, 1500);
  };
  return /* @__PURE__ */ React.createElement(CodeDemo, {
    code,
    language: "tsx",
    demoBackground: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white
  }, /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 360, margin: "auto" }
  }, /* @__PURE__ */ React.createElement("form", {
    onSubmit: form.onSubmit(handleSubmit),
    style: { position: "relative" }
  }, /* @__PURE__ */ React.createElement(LoadingOverlay, {
    visible: loading
  }), /* @__PURE__ */ React.createElement(TextInput, {
    required: true,
    label: "Email",
    placeholder: "your@email.com",
    error: form.errors.email && (serverError || "Please specify valid email"),
    value: form.values.email,
    onChange: (event) => form.setFieldValue("email", event.currentTarget.value),
    onFocus: () => {
      setServerError(null);
      form.setFieldError("email", false);
    }
  }), /* @__PURE__ */ React.createElement(Group, {
    position: "right",
    style: { marginTop: 15 }
  }, /* @__PURE__ */ React.createElement(Button, {
    type: "submit"
  }, "Register")))));
}

export { UseFormServerValidationDemo };
//# sourceMappingURL=server.js.map
