import React, { useState } from "react";
import ProductItem from "components/ProductItem";
import CheckBoxCircle from "components/CheckBoxCircle";
import { RECOMMENDED_FOR_YOU } from "../../demodata";
import { UserIcon } from "components/SvgIcons";
import { Button } from "components/Button";

export const Pickup = () => {
  const [isStock] = useState(false);
  return (
    <>
      <div className="text-[18px] font-bold mt-5">Pickup Store</div>
      <div className="text-[12px] mt-1 text-apollo-light-gray">
        Pickup in as little as 30 minutes. Our stores are open 24/7.
      </div>
      <div className="grid grid-cols-2 gap-3 mt-3">
        <div>
          <div className="relative w-full">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pb-4 text-[12px]">
              Change Store
            </span>
            <select
              defaultValue="Derma Pharmacy Olaya"
              className="pt-3 block w-full h-10 bg-apollo-dark-white rounded px-2 text-[12px] font-bold text-apollo-primary"
            >
              <option>Derma Pharmacy Olaya</option>
            </select>
          </div>
          <div className="text-[14px] pt-1">
            Stock status:{" "}
            {isStock ? (
              <span className="text-apollo-primary">In stock</span>
            ) : (
              <span className="text-apollo-error">
                One of the products is out of stock
              </span>
            )}
          </div>
        </div>
        {!isStock && (
          <div className="pr-5">
            {RECOMMENDED_FOR_YOU.slice(0, 1).map((item, key) => (
              <ProductItem
                key={key}
                title={item.title}
                image={item.image}
                price={item.price}
                discount={item.discount}
                prescriptionNeeded={item.prescriptionNeeded}
                horizontal
                className="max-w-[calc(100%)] p-0"
              />
            ))}
            <div className="text-[14px] mt-2 mb-2">
              The stock of these products is not available in the shop you
              selected. If you want, you can choose another store, change the
              delivery option to shipping, or order the product you want from
              the store.
            </div>
            <CheckBoxCircle
              checked
              label={
                <span className="text-[14px] font-bold">
                  I want out of stock products to come to this store. (3-5
                  business days)
                </span>
              }
            />
          </div>
        )}
      </div>
      <Button title="Continue" className="mt-4" />
    </>
  );
};

export const StandardShipping = ({ isGuest }: { isGuest: boolean }) => {
  const [address] = useState([
    { id: 1, name: "My Home", address: "Nazlah Dist., P.O.Box: 16544 Jeddah" },
    { id: 2, name: "Office", address: "Prince Salman St., 1st Industrial..." },
  ]);
  return (
    <>
      <div className="text-[18px] font-bold mt-5 mb-3">Shipping Address</div>
      {!isGuest && (
        <div className="grid grid-cols-3 gap-2 mr-2">
          {address.map((item) => (
            <div key={item.id} className={`border-2 rounded-2xl p-3`}>
              <div className="text-[14px] font-bold">{item.name}</div>
              <div className="text-[12px] font-bold text-light-gray">
                {item.address}
              </div>
            </div>
          ))}
          <div
            className={`border-2 rounded-2xl p-5 text-apollo-primary cursor-pointer border-apollo-primary`}
          >
            + New Address
          </div>
        </div>
      )}
      <div className="">
        <div className="grid grid-cols-2 gap-3 mt-3 mb-3">
          <div className="relative w-full">
            <span
              className={`absolute inset-y-0 left-0 flex items-center pl-2`}
            >
              <UserIcon />
            </span>
            <input
              className="py-2 block w-full h-10 bg-apollo-dark-white rounded pl-10 px-2 text-sm font-bold text-dark-gray"
              type="text"
              placeholder="Your name"
            />
          </div>
          <div className="relative w-full">
            <select className="py-2 block w-full h-10 bg-apollo-dark-white font-bold rounded pl-2 px-2 text-sm text-dark-gray">
              <option selected>🇸🇦 Saudi Arabia</option>
            </select>
          </div>
          <div className="relative w-full">
            <input
              className="py-2 block w-full h-10 bg-apollo-dark-white rounded px-2 text-sm font-bold text-dark-gray"
              type="text"
              placeholder="Street Address"
            />
          </div>
          <div className="relative w-full">
            <input
              className="py-2 block w-full h-10 bg-apollo-dark-white rounded px-2 text-sm font-bold text-dark-gray"
              type="text"
              placeholder="Apt. floor etc."
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 mt-3 mb-3">
          <div className="relative w-full">
            <select className="py-2 block w-full h-10 bg-apollo-dark-white font-bold rounded pl-2 px-2 text-sm text-dark-gray">
              <option selected>Select State...</option>
            </select>
          </div>
          <div className="relative w-full">
            <input
              className="py-2 block w-full h-10 bg-apollo-dark-white rounded px-2 text-sm font-bold text-dark-gray"
              type="text"
              placeholder="City"
            />
          </div>
          <div className="relative w-full">
            <input
              className="py-2 block w-full h-10 bg-apollo-dark-white rounded px-2 text-sm font-bold text-dark-gray"
              type="text"
              placeholder="Zip Code"
            />
          </div>
        </div>
      </div>
      <hr />
      <div className="text-[18px] font-bold mt-3 mb-3">Billing Address</div>
      <CheckBoxCircle
        checked
        label={
          <span className="text-[14px] font-bold">
            Billing address same as delivery address
          </span>
        }
      />
      <Button title="Continue" className="mt-4" />
    </>
  );
};
