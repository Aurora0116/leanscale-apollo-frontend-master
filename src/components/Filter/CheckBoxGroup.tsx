import React from "react";
import CheckBoxCircle from "../CheckBoxCircle";

export default function CheckBoxGroup(props: { title: string; list: any[] }) {
  return (
    <div>
      <h5 className="pt-4 pb-2 font-bold text-dark-gray text-headline">
        {props.title}
      </h5>
      <div className="">
        {props.list.map((item, key) => (
          <CheckBoxCircle key={key} checked={item.checked} label={item.title} />
        ))}
      </div>
    </div>
  );
}
