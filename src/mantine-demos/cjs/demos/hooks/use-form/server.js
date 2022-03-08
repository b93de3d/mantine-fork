'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var hooks = require('@mantine/hooks');
var CodeDemo = require('../../../components/Demo/CodeDemo/CodeDemo.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
  const theme = core.useMantineTheme();
  const [loading, setLoading] = React.useState(false);
  const [serverError, setServerError] = React.useState(null);
  const form = hooks.useForm({
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
  return /* @__PURE__ */ React__default.createElement(CodeDemo['default'], {
    code,
    language: "tsx",
    demoBackground: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white
  }, /* @__PURE__ */ React__default.createElement("div", {
    style: { maxWidth: 360, margin: "auto" }
  }, /* @__PURE__ */ React__default.createElement("form", {
    onSubmit: form.onSubmit(handleSubmit),
    style: { position: "relative" }
  }, /* @__PURE__ */ React__default.createElement(core.LoadingOverlay, {
    visible: loading
  }), /* @__PURE__ */ React__default.createElement(core.TextInput, {
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
  }), /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "right",
    style: { marginTop: 15 }
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    type: "submit"
  }, "Register")))));
}

exports.UseFormServerValidationDemo = UseFormServerValidationDemo;
//# sourceMappingURL=server.js.map
