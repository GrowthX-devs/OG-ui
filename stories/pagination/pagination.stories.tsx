import { Pagination, PaginationProps } from "@/components";
import { StoryFn } from "@storybook/react";

export default {
  title: "Components/Pagination",
  component: Pagination,
};

const Template: StoryFn<PaginationProps> = (args) => <Pagination {...args} />;

export const Default = Template.bind({});
Default.args = {
  totalPages: 10,
  currentPage: 1,
  onPageChange: (page) => console.log(`Page changed to: ${page}`),
};

export const WithCurrentPage = Template.bind({});
WithCurrentPage.args = {
  totalPages: 10,
  currentPage: 5,
  onPageChange: (page) => console.log(`Page changed to: ${page}`),
};
