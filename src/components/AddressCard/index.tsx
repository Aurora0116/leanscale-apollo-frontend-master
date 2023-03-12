import React from "react";
import { TrashIcon, OrderIcon } from "components/SvgIcons";
interface PageProps {
  title: string;
  name: string;
  address: string;
}
const AddressCard = ({ title, name, address }: PageProps) => {
  return (
    <div className="grid grid-cols-12 border-2 p-[16px]">
      <div className="col-start-1 col-span-9">
        <div className="inline-flex text-[17px] font-bold">
          <OrderIcon />
          <span className="ml-2">{title}</span>
        </div>
        <div className="text-[12px] pl-8">
          {name} <br />
          {address}
        </div>
      </div>
      <div className="col-start-10 col-span-3 pt-5 text-right align-middle cursor-pointer">
        <TrashIcon />
      </div>
    </div>
  );
};

export default AddressCard;
