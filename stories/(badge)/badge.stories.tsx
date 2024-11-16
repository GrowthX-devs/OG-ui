import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Badge, BadgeProps } from "@/components";

export default {
  title: "Components/Badge",
  component: Badge,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["solid", "outline", "subtle"],
    },
    colorScheme: {
      control: { type: "select" },
      options: ["blue", "green", "red", "yellow", "gray"],
    },
    children: { control: "text" },
  },
} as Meta<BadgeProps>;

const Template: StoryFn<BadgeProps> = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: "solid",
  colorScheme: "blue",
  children: "Badge Text",
};

export const Outline = Template.bind({});
Outline.args = {
  variant: "outline",
  colorScheme: "green",
  children: "Outline Badge",
};

export const Subtle = Template.bind({});
Subtle.args = {
  variant: "subtle",
  colorScheme: "red",
  children: "Subtle Badge",
};

export const SolidYellow = Template.bind({});
SolidYellow.args = {
  variant: "solid",
  colorScheme: "yellow",
  children: "Solid Yellow",
};

export const GrayOutline = Template.bind({});
GrayOutline.args = {
  variant: "outline",
  colorScheme: "gray",
  children: "Gray Outline",
};
