import React from "react";
interface Props {
  icon?: any | undefined;
  onChange?: React.ChangeEventHandler<HTMLSelectElement> | undefined;
  className?: string;
  defaultOption?: string;
  options?: { label: string; value: string | number; key: string | number }[];
}

const CustomSelectInput = ({
  icon,
  onChange = () => {},
  className = "",
  defaultOption = "",
  options,
}: Props) => {
  return (
    <div className="relative w-full bg-apollo-dark-white">
      {icon && (
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          {icon}
        </span>
      )}
      <div className="select-wrapper pr-1">
        <select
          onChange={onChange}
          className={`custyom-select-input py-2 block placeholder-light-gray w-full h-10 bg-apollo-dark-white rounded ${
            icon && "pl-10"
          } px-2 text-sm text-dark-gray ${className}`}
        >
          <option selected>{defaultOption}</option>
          {options?.map((item) => (
            <option key={item?.key} value={item?.value}>
              {item?.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
export default CustomSelectInput;
