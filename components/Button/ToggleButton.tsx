import React, { useState } from "react";

interface ToggleButtonProps {
  onToggle?: (isToggled: boolean) => void;
  defaultChecked?: boolean;
  label?: string;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({
  onToggle,
  defaultChecked = false,
  label = "Dark Mode",
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(defaultChecked);

  const handleToggle = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    if (onToggle) {
      onToggle(newCheckedState);
    }
  };

  return (
    <div className="flex items-center">
      <label htmlFor="dark-toggle" className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            type="checkbox"
            id="dark-toggle"
            className="checkbox hidden"
            checked={isChecked}
            onChange={handleToggle}
          />
          <div
            className={`block w-14 h-8 rounded-full transition border-[1px] ${
              isChecked
                ? "dark:border-white bg-gray-900"
                : "border-gray-900 bg-white"
            }`}
          ></div>
          <div
            className={`dot absolute left-1 top-1 w-6 h-6 rounded-full transition ${
              isChecked ? "dark:bg-white" : "bg-gray-800"
            }`}
            style={{ transform: isChecked ? "translateX(100%)" : "none" }}
          ></div>
        </div>
        {label && (
          <div
            className={`ml-3 font-medium transition ${
              isChecked ? "dark:text-white" : "text-gray-900"
            }`}
          >
            {label}
          </div>
        )}
      </label>
    </div>
  );
};

export default ToggleButton;
