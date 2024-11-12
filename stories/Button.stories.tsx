import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { Button } from "../components";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary"],
    },
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Primary Button",
  variant: "primary",
  size: "medium",
  onClick: action("Primary button clicked"),
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary Button",
  variant: "secondary",
  size: "medium",
  onClick: action("Secondary button clicked"),
};

// Additional examples for different sizes
export const Small = Template.bind({});
Small.args = {
  label: "Small Button",
  size: "small",
  variant: "primary",
  onClick: action("Small button clicked"),
};

export const Large = Template.bind({});
Large.args = {
  label: "Large Button",
  size: "large",
  variant: "primary",
  onClick: action("Large button clicked"),
};
