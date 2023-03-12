import { useRouter } from "next/router";
import { useState } from "react";
import { CheckedIcon, UnCheckedIcon } from "./SvgIcons";

export function CheckBox(props: {
  value?: boolean;
  label?: string;
  categoryId?: string;
}) {
  const router = useRouter();
  const { value, label, categoryId } = props;
  const { query } = router;
  const [checked, setChecked] = useState(false);
  const handleChange = (e: any) => {
    setChecked(!checked);
  };
  return (
    <div className="" onClick={handleChange}>
      <input type="checkbox" id="apollo-checkbox" className="hidden" />
      <label htmlFor="appolo-checkbox" className="cursor-pointer">
        <div className="flex mb-2">
          <span>{checked ? <CheckedIcon /> : <UnCheckedIcon />}</span>
          {props.label && (
            <span className="text-dark-gray text-callout font-semibold ml-3 uppercase">
              {props.label}
            </span>
          )}
        </div>
      </label>
    </div>
  );
}
