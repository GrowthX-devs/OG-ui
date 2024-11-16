export interface InputProps {
  type?: "text" | "password" | "email" | "number";
  size?: "sm" | "md" | "lg";
  placeholder?: string;
  error?: string;
  helperText?: string;
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
  isDisabled?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  type = "text",
  size = "md",
  placeholder,
  error,
  helperText,
  leftElement,
  rightElement,
  isDisabled,
  value,
  onChange,
}) => {
  const baseStyles =
    "w-full rounded-md border transition-colors focus:outline-none focus:ring-2";

  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <div className="w-full">
      <div className="relative">
        {leftElement && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            {leftElement}
          </div>
        )}
        <input
          type={type}
          className={`
              ${baseStyles}
              ${sizeStyles[size]}
              ${
                error
                  ? "border-red-500 focus:ring-red-200"
                  : "border-gray-300 focus:ring-blue-200"
              }
              ${leftElement ? "pl-10" : ""}
              ${rightElement ? "pr-10" : ""}
              ${isDisabled ? "bg-gray-100 cursor-not-allowed" : ""}
            `}
          placeholder={placeholder}
          disabled={isDisabled}
          value={value}
          onChange={onChange}
        />
        {rightElement && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            {rightElement}
          </div>
        )}
      </div>
      {(error || helperText) && (
        <p
          className={`mt-1 text-sm ${error ? "text-red-500" : "text-gray-500"}`}
        >
          {error || helperText}
        </p>
      )}
    </div>
  );
};

export default Input;
