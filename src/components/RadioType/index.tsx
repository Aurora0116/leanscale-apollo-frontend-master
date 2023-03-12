import { RadioTypeFillIcon, RadioTypeIcon } from "components/SvgIcons";

export function RadioType(props: {
  checked: boolean;
  label?: any;
  onClick: () => void;
}) {
  const handleChange = (e: any) => {};
  return (
    <div className="">
      <input
        type="radio"
        checked={props.checked}
        className="hidden"
        onChange={handleChange}
      />
      <label className="cursor-pointer">
        <div
          className="flex"
          style={{ alignItems: "center" }}
          onClick={() => !props.checked && props.onClick()}
        >
          <span>
            {props.checked ? <RadioTypeFillIcon /> : <RadioTypeIcon />}
          </span>
          {props.label && (
            <span className="text-dark-gray text-callout font-semibold ml-3">
              {props.label}
            </span>
          )}
        </div>
      </label>
    </div>
  );
}
