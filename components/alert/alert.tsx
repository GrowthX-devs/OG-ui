export interface AlertProps {
  status?: "info" | "warning" | "success" | "error";
  variant?: "subtle" | "solid" | "left-accent";
  title?: string;
  isClosable?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
}

export const Alert: React.FC<AlertProps> = ({
  status = "info",
  variant = "subtle",
  title,
  isClosable,
  onClose,
  children,
}) => {
  const statusStyles = {
    info: {
      bg: "bg-blue-50",
      border: "border-blue-500",
      text: "text-blue-700",
      solid: "bg-blue-500 text-white",
    },
    warning: {
      bg: "bg-yellow-50",
      border: "border-yellow-500",
      text: "text-yellow-700",
      solid: "bg-yellow-500 text-white",
    },
    success: {
      bg: "bg-green-50",
      border: "border-green-500",
      text: "text-green-700",
      solid: "bg-green-500 text-white",
    },
    error: {
      bg: "bg-red-50",
      border: "border-red-500",
      text: "text-red-700",
      solid: "bg-red-500 text-white",
    },
  };

  const variantStyles = {
    subtle: statusStyles[status].bg,
    solid: statusStyles[status].solid,
    "left-accent": `border-l-4 ${statusStyles[status].border} ${statusStyles[status].bg}`,
  };

  return (
    <div className={`rounded-md p-4 ${variantStyles[variant]}`}>
      <div className="flex">
        <div className="flex-1">
          {title && (
            <h3
              className={`text-sm font-medium ${
                variant === "solid" ? "text-white" : statusStyles[status].text
              }`}
            >
              {title}
            </h3>
          )}
          <div
            className={`text-sm ${
              variant === "solid" ? "text-white" : statusStyles[status].text
            }`}
          >
            {children}
          </div>
        </div>
        {isClosable && (
          <button
            onClick={onClose}
            className={`ml-3 ${
              variant === "solid" ? "text-white" : statusStyles[status].text
            }`}
          >
            <span className="sr-only">Close</span>
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};
