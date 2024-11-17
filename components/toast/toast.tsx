import { useEffect } from "react";

export interface ToastProps {
  id: string;
  title: string;
  description?: string;
  status?: "success" | "error" | "warning" | "info";
  duration?: number;
  isClosable?: boolean;
  onClose: (id: string) => void;
}

export const Toast: React.FC<ToastProps> = ({
  id,
  title,
  description,
  status = "info",
  duration = 5000,
  isClosable = true,
  onClose,
}) => {
  useEffect(() => {
    if (duration) {
      const timer = setTimeout(() => {
        onClose(id);
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, id, onClose]);

  const statusStyles = {
    success: "bg-green-500",
    error: "bg-red-500",
    warning: "bg-yellow-500",
    info: "bg-blue-500",
  };

  return (
    <div
      className={`
          ${statusStyles[status]}
          text-white rounded-lg shadow-lg p-4 mb-4
          transform transition-all duration-300 ease-in-out
        `}
    >
      <div className="flex justify-between">
        <div>
          <h3 className="font-medium">{title}</h3>
          {description && <p className="mt-1 text-sm">{description}</p>}
        </div>
        {isClosable && (
          <button
            onClick={() => onClose(id)}
            className="ml-4 text-white hover:text-gray-100"
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
