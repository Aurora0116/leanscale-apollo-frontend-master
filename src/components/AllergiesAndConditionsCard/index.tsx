import React from "react";
import { TrashIcon } from "components/SvgIcons";
interface PageProps {
  title: string;
}
const AllergiesAndConditionsCard = ({ title }: PageProps) => {
  return (
    <div className="grid grid-cols-12 border-2 p-[16px]">
      <div className="col-start-1 col-span-9">{title}</div>
      <div className="col-start-10 col-span-3 text-right align-middle cursor-pointer">
        <TrashIcon />
      </div>
    </div>
  );
};

export default AllergiesAndConditionsCard;
