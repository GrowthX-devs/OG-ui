import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { Button, ToggleButton } from "../../components";
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
        "neumorphic",
        "glowOnHover",
        "icon",
      ],
    },
  },
} as Meta<typeof Button>;

const Button1: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Primary = Button1.bind({});
Primary.args = {
  label: "Primary Button",
  variant: "primary",
  size: "medium",
  onClick: action("Primary button clicked"),
};

export const Secondary = Button1.bind({});
Secondary.args = {
  label: "Secondary Button",
  variant: "secondary",
  size: "medium",
  onClick: action("Secondary button clicked"),
};

// New button variant stories
export const Outline = Button1.bind({});
Outline.args = {
  label: "Outline Button",
  variant: "outline",
  size: "medium",
  onClick: action("Outline button clicked"),
};

export const Gradient = Button1.bind({});
Gradient.args = {
  label: "Gradient Button",
  variant: "gradient",
  size: "medium",
  onClick: action("Gradient button clicked"),
};

export const Glass = Button1.bind({});
Glass.args = {
  label: "Glass Button",
  variant: "glass",
  size: "medium",
  onClick: action("Glass button clicked"),
};

export const Neumorphic = Button1.bind({});
Neumorphic.args = {
  label: "Neumorphic Button",
  variant: "neumorphic",
  size: "medium",
  onClick: action("Neumorphic button clicked"),
};
export const DisabledPrimary = Button1.bind({});
DisabledPrimary.args = {
  label: "Disabled Primary Button",
  variant: "primary",
  size: "medium",
  disabled: true,
  onClick: action("Primary button clicked"),
};

export const glowOnHover = Button1.bind({});
glowOnHover.args = {
  label: "Glow-on-hover Button",
  variant: "glowOnHover",
  size: "medium",
  onClick: action("Glow-on-hover button clicked"),
};
