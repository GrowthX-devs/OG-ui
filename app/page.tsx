"use client";

import Tabs, { Tab } from "@/components/animations/tab";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen mt-10 p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] ">
      <Tabs>
        <Tab title="Tab 1">Content 1</Tab>
        <Tab title="Tab 2">Content 2</Tab>
        <Tab title="Tab 3">Content 3</Tab>
        <Tab title="Tab 4">Content 4</Tab>
      </Tabs>
    </div>
  );
}
