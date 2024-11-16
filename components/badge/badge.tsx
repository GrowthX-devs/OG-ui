export interface BadgeProps {
  variant?: "solid" | "outline" | "subtle";
  colorScheme?: "blue" | "green" | "red" | "yellow" | "gray";
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = "solid",
  colorScheme = "blue",
  children,
}) => {
  const colorStyles = {
    blue: {
      solid: "bg-blue-500 text-white",
      outline: "border border-blue-500 text-blue-500 bg-white",
      subtle: "bg-blue-100 text-blue-700",
    },
    green: {
      solid: "bg-green-500 text-white",
      outline: "border border-green-500 text-green-500 bg-white",
      subtle: "bg-green-100 text-green-700",
    },
    red: {
      solid: "bg-red-500 text-white",
      outline: "border border-red-500 text-red-500 bg-white",
      subtle: "bg-red-100 text-red-700",
    },
    yellow: {
      solid: "bg-yellow-500 text-white",
      outline: "border border-yellow-500 text-yellow-500 bg-white",
      subtle: "bg-yellow-100 text-yellow-700",
    },
    gray: {
      solid: "bg-gray-500 text-white",
      outline: "border border-gray-500 text-gray-500 bg-white",
      subtle: "bg-gray-100 text-gray-700",
    },
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium ${colorStyles[colorScheme][variant]}`}
    >
      {children}
    </span>
  );
};
