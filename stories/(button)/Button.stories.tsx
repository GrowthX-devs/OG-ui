import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { Button } from "../../components";
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
      options: [
        "primary",
        "secondary",
        "outline",
        "gradient",
        "glass",
        "glowOnHover",
        "icon",
      ],
    },
  },
} as Meta<typeof Button>;

const Button1: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Primary = Button1.bind({});
Primary.args = {
  children: "Primary Button",
  variant: "primary",
  size: "medium",
  isLoading: false,
  onClick: action("Primary button clicked"),
};

export const Secondary = Button1.bind({});
Secondary.args = {
  children: "Secondary Button",
  variant: "secondary",
  size: "medium",
  isLoading: false,
  onClick: action("Secondary button clicked"),
};

// New button variant stories
export const Outline = Button1.bind({});
Outline.args = {
  children: "Outline Button",
  variant: "outline",
  size: "medium",
  isLoading: false,
  onClick: action("Outline button clicked"),
};

export const Gradient = Button1.bind({});
Gradient.args = {
  children: "Gradient Button",
  variant: "gradient",
  size: "medium",
  isLoading: false,
  onClick: action("Gradient button clicked"),
};

export const Glass = Button1.bind({});
Glass.args = {
  children: "Glass Button",
  variant: "glass",
  size: "medium",
  isLoading: false,
  onClick: action("Glass button clicked"),
};

export const DisabledPrimary = Button1.bind({});
DisabledPrimary.args = {
  children: "Disabled Primary Button",
  variant: "primary",
  size: "medium",
  disabled: true,
  isLoading: false,
  onClick: action("Primary button clicked"),
};

export const Loading = Button1.bind({});
Loading.args = {
  children: "Loading Button",
  variant: "primary",
  size: "medium",
  isLoading: true,
  onClick: action("Loading button clicked"),
};

export const glowOnHover = Button1.bind({});
glowOnHover.args = {
  children: "Glow-on-hover Button",
  variant: "glowOnHover",
  size: "medium",
  isLoading: false,
  onClick: action("Glow-on-hover button clicked"),
};
