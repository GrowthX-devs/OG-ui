// ToggleButton Stories

import { ToggleButton } from "@/components";
import { Meta, StoryFn } from "@storybook/react";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/ToggleButton",
  component: ToggleButton,
  argTypes: {
    defaultChecked: {
      control: { type: "boolean" },
      description: "Initial state of the toggle button",
    },
    label: {
      control: { type: "text" },
      description: "Label displayed next to the toggle button",
    },
    onToggle: {
      action: "onToggle",
      description: "Callback function triggered when toggle changes",
    },
  },
} as Meta<typeof ToggleButton>;
const ToggleButtonTemplate: StoryFn<typeof ToggleButton> = (args) => (
  <ToggleButton {...args} />
);

export const ToggleDefault = ToggleButtonTemplate.bind({});
ToggleDefault.args = {
  label: "Toggle Dark Mode",
  defaultChecked: false,
  onToggle: action("Toggle state changed"),
};

export const ToggleChecked = ToggleButtonTemplate.bind({});
ToggleChecked.args = {
  label: "Toggle Dark Mode",
  defaultChecked: true,
  onToggle: action("Toggle state changed"),
};
