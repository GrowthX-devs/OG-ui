import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Alert, AlertProps } from "@/components";

export default {
  title: "Components/Alert",
  component: Alert,
  argTypes: {
    status: {
      control: { type: "select" },
      options: ["info", "warning", "success", "error"],
    },
    variant: {
      control: { type: "select" },
      options: ["subtle", "solid", "left-accent"],
    },
    title: { control: "text" },
    isClosable: { control: "boolean" },
    onClose: { action: "closed" },
  },
} as Meta<AlertProps>;

const Template: StoryFn<AlertProps> = (args) => <Alert {...args} />;

export const InfoSubtle = Template.bind({});
InfoSubtle.args = {
  status: "info",
  variant: "subtle",
  title: "Information",
  children: "This is an informational alert.",
};

export const SuccessSolid = Template.bind({});
SuccessSolid.args = {
  status: "success",
  variant: "solid",
  title: "Success",
  children: "Your operation was successful!",
};

export const WarningLeftAccent = Template.bind({});
WarningLeftAccent.args = {
  status: "warning",
  variant: "left-accent",
  title: "Warning",
  children: "This is a warning alert with a left accent.",
};

export const ErrorClosable = Template.bind({});
ErrorClosable.args = {
  status: "error",
  variant: "subtle",
  title: "Error",
  isClosable: true,
  children: "There was an error processing your request.",
};
