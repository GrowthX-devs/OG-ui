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
      options: [
        "primary",
        "secondary",
        "outline",
        "gradient",
        "glass",
        "neumorphic",
        "icon",
      ],
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

// New button variant stories
export const Outline = Template.bind({});
Outline.args = {
  label: "Outline Button",
  variant: "outline",
  size: "medium",
  onClick: action("Outline button clicked"),
};

export const Gradient = Template.bind({});
Gradient.args = {
  label: "Gradient Button",
  variant: "gradient",
  size: "medium",
  onClick: action("Gradient button clicked"),
};

export const Glass = Template.bind({});
Glass.args = {
  label: "Glass Button",
  variant: "glass",
  size: "medium",
  onClick: action("Glass button clicked"),
};

export const Neumorphic = Template.bind({});
Neumorphic.args = {
  label: "Neumorphic Button",
  variant: "neumorphic",
  size: "medium",
  onClick: action("Neumorphic button clicked"),
};

// Icon button with an example icon
// export const IconButton = Template.bind({});
// IconButton.args = {
//   label: "Icon Button",
//   variant: "icon",
//   size: "medium",
//   icon: <FaStar />, // Example icon
//   onClick: action("Icon button clicked"),
// };

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
