import React from "react";
import { CheckedCircle, UnCheckedCircle } from "./SvgIcons";

export default function CheckBoxCircle(props: {
  checked: boolean;
  value?: boolean;
  label?: any;
  checkBoxClassName?: string;
  wrapperClassName?: string;
  width?: string;
  height?: string;
}) {
  const handleChange = (e: any) => {};
  return (
    <div className={`py-1 ${props.wrapperClassName}`}>
      <input
        type="checkbox"
        checked={props.checked}
        id="apollo-checkbox"
        className="hidden"
        onChange={handleChange}
      />
      <label htmlFor="appolo-checkbox" className="cursor-pointer">
        <div className="flex items-center">
          <span>
            {props.checked ? (
              <CheckedCircle
                width={props.width}
                height={props.height}
                className={props.checkBoxClassName}
              />
            ) : (
              <UnCheckedCircle
                width={props.width}
                height={props.height}
                className={props.checkBoxClassName}
              />
            )}
          </span>
          {props.label && (
            <span className="text-dark-gray text-body-mobile ml-3">
              {props.label}
            </span>
          )}
        </div>
      </label>
    </div>
  );
}
