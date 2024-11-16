import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Avatar, AvatarProps } from "@/components";

export default {
  title: "Components/Avatar",
  component: Avatar,
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    src: { control: "text" },
    name: { control: "text" },
    badge: { control: "text" },
  },
} as Meta<AvatarProps>;

const Template: StoryFn<AvatarProps> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: "md",
  name: "John Doe",
};

export const WithImage = Template.bind({});
WithImage.args = {
  size: "md",
  src: "https://via.placeholder.com/150",
  name: "Jane Doe",
};

export const WithBadge = Template.bind({});
WithBadge.args = {
  size: "lg",
  name: "Michael Smith",
  badge: <span className="w-3 h-3 bg-green-500 rounded-full block" />,
};

export const ExtraLargeWithInitials = Template.bind({});
ExtraLargeWithInitials.args = {
  size: "xl",
  name: "Chris Evans",
};

export const SmallImageWithBadge = Template.bind({});
SmallImageWithBadge.args = {
  size: "sm",
  src: "https://via.placeholder.com/50",
  name: "Emily Clark",
  badge: <span className="w-2 h-2 bg-red-500 rounded-full block" />,
};
