import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Dropdown, DropdownProps } from "@/components";

import { FaHome, FaInfoCircle, FaCog } from "react-icons/fa";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
  argTypes: {
    placement: {
      control: {
        type: "select",
        options: ["top", "bottom", "left", "right"],
      },
    },
  },
} as Meta<typeof Dropdown>;

const Template: StoryFn<DropdownProps> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  trigger: (
    <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
      Open Dropdown
    </button>
  ),
  items: [
    {
      label: "Home",
      onClick: () => alert("Home clicked"),
      icon: <FaHome />,
    },
    {
      label: "About",
      onClick: () => alert("About clicked"),
      icon: <FaInfoCircle />,
    },
    {
      label: "Settings",
      onClick: () => alert("Settings clicked"),
      icon: <FaCog />,
    },
  ],
  placement: "bottom",
};
