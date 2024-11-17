import React from "react";
import { Breadcrumb, BreadcrumbProps } from "@/components";
import { StoryFn } from "@storybook/react";

export default {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
};

const Template: StoryFn<BreadcrumbProps> = (args) => <Breadcrumb {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { href: "/", label: "Home" },
    { href: "/library", label: "Library" },
    { label: "Data", isCurrent: true },
  ],
  separator: <span>/</span>,
};

export const WithoutSeparator = Template.bind({});
WithoutSeparator.args = {
  items: [
    { href: "/", label: "Home" },
    { href: "/library", label: "Library" },
    { label: "Data", isCurrent: true },
  ],
  separator: null,
};
