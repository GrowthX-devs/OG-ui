import { Skeleton, SkeletonProps } from "@/components";
import { StoryFn } from "@storybook/react";

export default {
  title: "Components/Skeleton",
  component: Skeleton,
};

const Template: StoryFn<SkeletonProps> = (args) => <Skeleton {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: "100%",
  height: "20px",
};

export const CustomDimensions = Template.bind({});
CustomDimensions.args = {
  width: "300px",
  height: "40px",
};
