import React from "react";

type ButtonProps = {
  label: string;
  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "gradient"
    | "glass"
    | "neumorphic"
    | "icon";
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  icon?: JSX.Element; // Optional icon for icon variant
};

const Button: React.FC<ButtonProps> = ({
  label,
  variant = "primary",
  size = "medium",
  onClick,
  icon,
}) => {
  const baseStyle = "px-4 py-2 rounded transition duration-300 ease-in-out";

  // Define variant styles based on the variant prop
  const variantStyle = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-blue-200 text-black hover:bg-blue-300",
    outline:
      "border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white",
    gradient:
      "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg hover:from-indigo-600 hover:to-purple-600",
    glass:
      "bg-blue-500/30 text-white backdrop-blur-md hover:bg-blue-500/50 border border-white/20",
    neumorphic:
      "bg-blue-500 text-white rounded-md shadow-inner hover:shadow-md",
    icon: "flex items-center space-x-2 bg-blue-500 text-white px-5 py-2 rounded-full shadow-md hover:bg-blue-600",
  }[variant];

  // Define size styles based on the size prop
  const sizeStyle =
    size === "small" ? "text-sm" : size === "large" ? "text-lg" : "text-base";

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variantStyle} ${sizeStyle}`}
    >
      {/* Only render icon if the icon prop is passed and the variant is 'icon' */}
      {variant === "icon" && icon && <span>{icon}</span>}
      <span>{label}</span>
    </button>
  );
};

export default Button;
