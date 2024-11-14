import React, { useEffect } from "react";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

type Icontent = { [key: string]: React.ReactNode | string };

const Tabs = ({ children }: Props) => {
  const [tabHeaders, setTabHeaders] = React.useState<string[]>([]);
  const [contentMap, setContentMap] = React.useState<Icontent>({});
  const [activeTab, setActiveTab] = React.useState<string>("");

  useEffect(() => {
    const headers: string[] = [];
    const content: Icontent = {};
    React.Children.forEach(children, (child) => {
      if (!React.isValidElement(child)) return;
      const { title } = child.props;

      headers.push(title);
      content[title] = child.props.children;
    });

    setTabHeaders(headers);
    setContentMap(content);
    setActiveTab(headers[0]);
  }, [children]);

  const handleTabClick = (title: string) => {
    setActiveTab(title);
  };

  return (
    <div>
      <div className="flex">
        {tabHeaders.map((title, index) => (
          <div key={index} className="relative">
            {activeTab === title && (
              <motion.span
                layoutId="bubble"
                className="absolute inset-0 z-10 bg-white mix-blend-difference"
                style={{ borderRadius: 9999 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}

            <button
              className="p-2  rounded"
              //   key={index}
              onClick={() => handleTabClick(title)}
            >
              {title}
            </button>
          </div>
        ))}
      </div>
      <div>
        {Object.keys(contentMap).map(
          (title) => activeTab === title && contentMap[title]
        )}
      </div>
    </div>
  );
};

export default Tabs;

type ITab = { title: string; children: React.ReactNode };
export const Tab = ({ title, children }: ITab) => {
  return <div title={title}>{children}</div>;
};
