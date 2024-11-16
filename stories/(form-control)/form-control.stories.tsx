import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { FormControl, FormControlProps, Input } from "@/components";

export default {
  title: "Components/FormControl",
  component: FormControl,
  argTypes: {
    label: { control: "text" },
    error: { control: "text" },
    required: { control: "boolean" },
    helperText: { control: "text" },
  },
} as Meta<FormControlProps>;

const Template: StoryFn<FormControlProps> = (args) => <FormControl {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Name",
  required: false,
  helperText: "This is some helper text.",
  children: <Input placeholder="Enter your name" />,
};

export const WithError = Template.bind({});
WithError.args = {
  label: "Email",
  required: true,
  error: "This field is required.",
  children: <Input type="email" placeholder="Enter your email" />,
};

export const RequiredField = Template.bind({});
RequiredField.args = {
  label: "Password",
  required: true,
  helperText: "Your password must be at least 8 characters long.",
  children: <Input type="password" placeholder="Enter your password" />,
};

export const WithCustomChildren = Template.bind({});
WithCustomChildren.args = {
  label: "Custom Input",
  helperText: "This is a custom input example.",
  children: (
    <div className="flex gap-2">
      <Input placeholder="First name" />
      <Input placeholder="Last name" />
    </div>
  ),
};
