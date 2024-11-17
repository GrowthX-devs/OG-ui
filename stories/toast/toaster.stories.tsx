import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Toaster } from "@/components";

export default {
  title: "Components/Toaster",
  component: Toaster,
} as Meta<typeof Toaster>;

const Template: StoryFn<typeof Toaster> = (args) => (
  <Toaster {...args}>
    {(showToast) => (
      <div className="space-y-4">
        <button
          onClick={() =>
            showToast({
              title: "Success Notification",
              description: "This is a success toast.",
              status: "success",
            })
          }
          className="px-4 py-2 bg-green-500 text-white rounded-md"
        >
          Show Success Toast
        </button>
        <button
          onClick={() =>
            showToast({
              title: "Error Notification",
              description: "This is an error toast.",
              status: "error",
            })
          }
          className="px-4 py-2 bg-red-500 text-white rounded-md"
        >
          Show Error Toast
        </button>
        <button
          onClick={() =>
            showToast({
              title: "Warning Notification",
              description: "This is a warning toast.",
              status: "warning",
            })
          }
          className="px-4 py-2 bg-yellow-500 text-white rounded-md"
        >
          Show Warning Toast
        </button>
        <button
          onClick={() =>
            showToast({
              title: "Info Notification",
              description: "This is an info toast.",
              status: "info",
            })
          }
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Show Info Toast
        </button>
      </div>
    )}
  </Toaster>
);

export const Default = Template.bind({});
Default.args = {};
