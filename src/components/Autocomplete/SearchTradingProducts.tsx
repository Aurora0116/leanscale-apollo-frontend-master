import React from "react";

export default function SearchTradingProducts() {
  return (
    <>
      <li className="w-full border-lightest-gray pt-4 custom-border-t-1">
        <p className="text-callout font-bold text-dark-gray px-4">
          Trending items
        </p>
      </li>
      <li>
        <div className="flex p-4">
          <div className=" border-2 border-[#ececec] rounded-lg overflow-hidden mr-2 product-h-image">
            {/* eslint-disable-next-line */}
            <img
              src="/image/demo/product-4.jpg"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
          <div className="">
            <h5 className="font-bold text-dark-gray text-callout">
              Optichmber Repironcs L
            </h5>
            <div className="flex items-center">
              <div className="w-7.5 h-8 rounded bg-secondary mr-2 text-caption-2 text-white p-1">
                30% <br /> Off
              </div>
              <div className="">
                <h5 className="font-bold text-headline text-dark-gray">
                  SAR 15.00
                </h5>
                <p className="font-bold text-light-gray line-through text-caption-1">
                  SAR 15.00
                </p>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div className="flex p-4">
          <div className=" border-2 border-[#ececec] rounded-lg overflow-hidden mr-2 product-h-image">
            {/* eslint-disable-next-line */}
            <img
              src="/image/demo/product-5.jpg"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
          <div className="">
            <h5 className="font-bold text-dark-gray text-callout">
              Optichmber Repironcs L
            </h5>
            <div className="flex items-center">
              <div className="w-7.5 h-8 rounded bg-secondary mr-2 text-caption-2 text-white p-1">
                30% <br /> Off
              </div>
              <div className="">
                <h5 className="font-bold text-headline text-dark-gray">
                  SAR 15.00
                </h5>
                <p className="font-bold text-light-gray line-through text-caption-1">
                  SAR 15.00
                </p>
              </div>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}
