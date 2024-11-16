import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "gradient"
    | "glass"
    | "icon"
    | "glowOnHover";
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  icon?: JSX.Element; // Optional icon for icon variant
  disabled?: boolean; // Disabled state
  isLoading?: boolean; // New loading state
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "medium",
  onClick,
  icon,
  disabled = false,
  isLoading = false, // Default is not loading
}) => {
  // Base styles for the button
  const baseStyle =
    "px-4 py-2 rounded transition duration-300 ease-in-out focus:outline-none";

  // Variant styles (conditionally applied based on `variant`)
  const variantStyle = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-blue-200 text-black hover:bg-blue-300",
    outline:
      "border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white",
    gradient:
      "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg hover:from-indigo-600 hover:to-purple-600",
    glass:
      "bg-blue-500/30 text-white backdrop-blur-md hover:bg-blue-500/50 border border-white/20",
    icon: "flex items-center space-x-2 bg-blue-500 text-white px-5 py-2 rounded-full shadow-md hover:bg-blue-600",
    glowOnHover:
      "glow-on-hover relative bg-gray-900 text-white rounded-lg transition-transform hover:scale-105 shadow-lg",
  }[variant];

  // Size styles (conditionally applied based on `size`)
  const sizeStyle =
    size === "small"
      ? "text-sm px-3 py-1"
      : size === "large"
      ? "text-lg px-6 py-3"
      : "text-base";

  // Disabled styles
  const disabledStyle = "opacity-50 cursor-not-allowed";

  // Loading styles
  const loadingStyle = "relative flex items-center justify-center";

  // Compose the final className
  const buttonClass = `${baseStyle} ${variantStyle} ${sizeStyle} ${
    disabled || isLoading ? disabledStyle : ""
  }`;

  return (
    <button
      onClick={!disabled && !isLoading ? onClick : undefined} // Prevent `onClick` when disabled or loading
      className={`${buttonClass} ${isLoading ? loadingStyle : ""}`}
      disabled={disabled || isLoading} // Native `disabled` attribute
    >
      {isLoading ? (
        // Render spinner for the loading state
        <>
          <span>{children}</span>
          <span className="animate-spin w-5 h-5 pl-2 border-2 border-white border-t-transparent rounded-full"></span>
        </>
      ) : variant === "icon" && icon ? (
        // Render icon if variant is "icon" and an icon is provided
        <span>{icon}</span>
      ) : (
        // Render the label by default
        <span>{children}</span>
      )}
    </button>
  );
};

export default Button;
