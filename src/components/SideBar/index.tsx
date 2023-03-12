import React from "react";
import Image from "next/image";
import { StoreCreditIcon } from "components/SvgIcons";
import SideBarMenu from "components/SideBarMenu";
interface Page {
  children: React.ReactNode;
  title: string;
  breadcrumb: string;
}
const SideBar = ({ children, title, breadcrumb }: Page) => {
  return (
    <div className="w-full bg-apollo-white">
      <div className="grid grid-cols-12 pt-4 pl-4">
        <div className="col-start-2 col-span-10">
          <div className="text-[28px]">{title}</div>
          <div className="text-[20px] text-apollo-light-gray">{`Home > My Account > ${breadcrumb}`}</div>
        </div>
      </div>
      {/* Content start*/}
      <div className="grid grid-cols-36 mt-5 pb-5">
        <div className="col-start-4 col-span-10">
          <div className="bg-apollo-dark-white rounded pl-[24px] pt-[24px] pr-[24px] pb-[24px]">
            <div className="text-[20px] font-bold">Welcome, Jamal</div>
            <div className="grid grid-cols-2 mt-3 pb-1 border-b-2 border-grey">
              <div>
                <div className="text-[17px] text-apollo-secondary font-bold">
                  LAKUM
                </div>
                <div className="text-[14px] text-apollo-light-gray cursor-pointer">{`Learn More >`}</div>
              </div>
              <div className="text-right">
                <button
                  type="button"
                  className="items-right text-sm px-3 py-1 text-right mr-2 mb-2 bg-apollo-linear-gradient-1 text-white font-medium leading-tight rounded transition duration-150 ease-in-out"
                >
                  <div className="text-[14px]">
                    <span className="font-bold">14.97</span> POINTS
                  </div>
                  <div className="text-[12px]">SAR 7.48</div>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 pb-3 pt-3 border-b-2 border-grey">
              <div className="inline-flex font-[400] text-[16px]">
                <StoreCreditIcon /> <span className="ml-1">Store Credit</span>
              </div>
              <div className="text-right text-[16px] text-apollo-secondary font-bold">
                SAR 76.00
              </div>
            </div>
            <SideBarMenu />
          </div>
        </div>
        <div
          className="col-start-14 pl-5"
          style={{ gridColumn: "span 20 / span 20" }}
        >
          {children}
        </div>
      </div>
      {/* Content End*/}
      {/* Logos start */}
    </div>
  );
};

export default SideBar;
