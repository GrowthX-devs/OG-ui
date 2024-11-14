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
    | "icon"
    | "glowOnHover";
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  icon?: JSX.Element; // Optional icon for icon variant
  disabled?: boolean; // New disabled prop
};

const Button: React.FC<ButtonProps> = ({
  label,
  variant = "primary",
  size = "medium",
  onClick,
  icon,
  disabled = false,
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
    glowOnHover:
      "glow-on-hover relative bg-gray-900 text-white rounded-lg transition-opacity ease-in-out",
  }[variant];

  // Define size styles based on the size prop
  const sizeStyle =
    size === "small" ? "text-sm" : size === "large" ? "text-lg" : "text-base";

  // Define disabled style
  const disabledStyle = "opacity-50 cursor-not-allowed";

  return (
    <button
      onClick={!disabled ? onClick : undefined} // Prevent onClick when disabled
      className={`${baseStyle} ${variantStyle} ${sizeStyle} ${
        disabled ? disabledStyle : ""
      }`}
      disabled={disabled} // HTML disabled attribute
    >
      {/* Only render icon if the icon prop is passed and the variant is 'icon' */}
      {variant === "icon" && icon && <span>{icon}</span>}
      <span>{label}</span>
    </button>
  );
};

export default Button;
