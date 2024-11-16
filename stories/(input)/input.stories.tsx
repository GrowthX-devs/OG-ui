import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Input, InputProps } from "@/components";

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["text", "password", "email", "number"],
      },
    },
    size: {
      control: {
        type: "select",
        options: ["sm", "md", "lg"],
      },
    },
    error: { control: "text" },
    helperText: { control: "text" },
    placeholder: { control: "text" },
    isDisabled: { control: "boolean" },
  },
} as Meta<InputProps>;

const Template: StoryFn<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: "text",
  size: "md",
  placeholder: "Enter text",
  helperText: "This is a helper text",
};

export const WithError = Template.bind({});
WithError.args = {
  type: "text",
  size: "md",
  placeholder: "Enter text",
  error: "This is an error message",
};

export const WithLeftElement = Template.bind({});
WithLeftElement.args = {
  type: "text",
  size: "md",
  placeholder: "Enter text",
  leftElement: <span>🔍</span>,
};

export const WithRightElement = Template.bind({});
WithRightElement.args = {
  type: "text",
  size: "md",
  placeholder: "Enter text",
  rightElement: <span>🗿</span>,
};

export const Disabled = Template.bind({});
Disabled.args = {
  type: "text",
  size: "md",
  placeholder: "Disabled input",
  isDisabled: true,
};
