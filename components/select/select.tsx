import { useState } from "react";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps {
  options: SelectOption[];
  isMulti?: boolean;
  isSearchable?: boolean;
  placeholder?: string;
  onChange: (selectedOptions: SelectOption[]) => void;
}

export const Select: React.FC<SelectProps> = ({
  options,
  isMulti = false,
  isSearchable = false,
  placeholder = "Select...",
  onChange,
}) => {
  const [selectedOptions, setSelectedOptions] = useState<SelectOption[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (option: SelectOption) => {
    if (isMulti) {
      const newSelectedOptions = selectedOptions.includes(option)
        ? selectedOptions.filter((o) => o.value !== option.value)
        : [...selectedOptions, option];
      setSelectedOptions(newSelectedOptions);
      onChange(newSelectedOptions);
    } else {
      setSelectedOptions([option]);
      onChange([option]);
      setIsOpen(false);
    }
  };

  const filteredOptions = isSearchable
    ? options.filter((option) =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : options;

  return (
    <div className="relative text-gray-700">
      <div
        className="border rounded-md p-2 cursor-pointer"
        onClick={toggleDropdown}
      >
        {selectedOptions.length > 0
          ? selectedOptions.map((option) => option.label).join(", ")
          : placeholder}
      </div>
      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white border rounded-md shadow-lg">
          {isSearchable && (
            <input
              type="text"
              className="p-2 border-b w-full"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          )}
          <ul className="max-h-60 overflow-auto">
            {filteredOptions.map((option) => (
              <li
                key={option.value}
                className={`p-2 cursor-pointer hover:bg-gray-200 ${
                  selectedOptions.includes(option) ? "bg-gray-300" : ""
                }`}
                onClick={() => handleSelectOption(option)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
