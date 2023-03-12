import { useRouter } from "next/router";
import React from "react";
import { CheckBox } from "../CheckBox";

export default function SidebarFilterGroup(props: {
  title: string;
  list: { title: string }[];
  categoryId?: string;
}) {
  return (
    <div className="">
      <h5 className="pt-4 pb-2 font-bold text-dark-gray text-headline">
        {props.title}
      </h5>
      <div className="p-4 rounded-lg border-2 border-lightest-gray h-40 overflow-auto no-scrollbar">
        {props.list.map((item, key) => (
          <CheckBox
            key={key}
            label={item.title}
            categoryId={props.categoryId}
          />
        ))}
      </div>
    </div>
  );
}
