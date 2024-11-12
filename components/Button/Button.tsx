import React from "react";

type ButtonProps = {
  label: string;
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  label,
  variant = "primary",
  size = "medium",
  onClick,
}) => {
  const baseStyle = "px-4 py-2 rounded";
  const variantStyle =
    variant === "primary" ? "bg-blue-500 text-white" : "bg-gray-200 text-black";
  const sizeStyle =
    size === "small" ? "text-sm" : size === "large" ? "text-lg" : "text-base";

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variantStyle} ${sizeStyle}`}
    >
      {label}
    </button>
  );
};

export default Button;
