import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Select, SelectProps } from "@/components";

export default {
  title: "Components/Select",
  component: Select,
  argTypes: {
    isMulti: { control: "boolean" },
    isSearchable: { control: "boolean" },
    placeholder: { control: "text" },
  },
} as Meta<SelectProps>;

const options = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "cherry", label: "Cherry" },
  { value: "date", label: "Date" },
  { value: "elderberry", label: "Elderberry" },
];

const Template: StoryFn<SelectProps> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  options,
  placeholder: "Select a fruit...",
  onChange: (selectedOptions) => console.log(selectedOptions),
};

export const MultiSelect = Template.bind({});
MultiSelect.args = {
  options,
  isMulti: true,
  placeholder: "Select multiple fruits...",
  onChange: (selectedOptions) => console.log(selectedOptions),
};

export const Searchable = Template.bind({});
Searchable.args = {
  options,
  isSearchable: true,
  placeholder: "Search and select...",
  onChange: (selectedOptions) => console.log(selectedOptions),
};

export const MultiSearchable = Template.bind({});
MultiSearchable.args = {
  options,
  isMulti: true,
  isSearchable: true,
  placeholder: "Search and select multiple...",
  onChange: (selectedOptions) => console.log(selectedOptions),
};
