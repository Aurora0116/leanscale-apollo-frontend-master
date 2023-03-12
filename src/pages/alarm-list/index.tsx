import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import Layout from "components/Layout";
import { AlarmEmptyIcon, FilterIcon } from "components/SvgIcons";
import { RECOMMENDED_FOR_YOU } from "../../demodata";
import ProductItem from "components/ProductItem";
import CheckBox from "components/CustomCheckboxInput";
import { Button } from "components/Button";

const Alarm: NextPage = () => {
  const [alarmlist, setAlarmlist] = useState(RECOMMENDED_FOR_YOU.slice(1, 4));
  const [isEdit, setIsEdit] = useState(false);
  const [selectedItems, setSelectedItems] = useState([0]);
  useEffect(() => {
    // setAlarmlist();
    // testing
  }, []);
  return (
    <Layout
      showSideBar
      sideBarTitle="Alarm List"
      sideBarBreadcrumb="Alarm List"
    >
      {alarmlist.length > 0 ? (
        <>
          <div className="grid grid-cols-2">
            <div className="text-[17px] font-bold mt-4 mb-5">
              Showing {alarmlist.length} items{" "}
              <span
                className="text-[14px] text-apollo-primary font-bold ml-10 cursor-pointer"
                onClick={() => setIsEdit((prev) => !prev)}
              >
                {isEdit ? "Done" : "Edit"}
              </span>
            </div>
            <div className="text-right mr-3">
              <div className="inline-block w-[194px] mr-5">
                <div className="relative w-full">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <FilterIcon />
                  </span>
                  <input
                    className="py-2 block w-full h-10 bg-apollo-dark-white rounded pl-10 px-2 text-sm font-bold text-dark-gray"
                    type="text"
                    placeholder="Filter"
                  />
                </div>
              </div>
              <div className="inline-block w-[115px]">
                <select className="py-2 block w-full h-10 bg-apollo-dark-white font-bold rounded pl-2 px-2 text-sm text-dark-gray">
                  <option selected>All</option>
                </select>
              </div>
            </div>
          </div>
          {isEdit && (
            <div>
              <button
                type="submit"
                className="px-6 py-2.5 bg-apollo-error text-white rounded mr-3"
              >
                Remove Selected
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 bg-none text-apollo-error border border-apollo-error rounded mr-3"
              >
                Remove All
              </button>
            </div>
          )}
          <div className="grid grid-cols-4 text-center">
            {alarmlist.map((item, key) => (
              <div key={key} className="p-5">
                {isEdit && (
                  <CheckBox
                    onClick={() => {
                      if (selectedItems.includes(key)) {
                        setSelectedItems(
                          selectedItems.filter((x) => x !== key)
                        );
                      } else {
                        setSelectedItems([...selectedItems, key]);
                      }
                    }}
                    checked={selectedItems.includes(key)}
                    className="rounded-full"
                    label={
                      <span
                        className={`text-[14px] ${
                          selectedItems.includes(key) && "text-apollo-primary"
                        }`}
                      >
                        {selectedItems.includes(key)
                          ? "Selected"
                          : "Click to select"}
                      </span>
                    }
                  />
                )}
                <ProductItem
                  key={key}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  discount={item.discount}
                  cartAble={item.cartAble}
                  prescriptionNeeded={item.prescriptionNeeded}
                  className="max-w-full p-0"
                />
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="grid grid-cols-12">
          <div className="col-start-4 col-span-6">
            <div className="text-center mt-14">
              <AlarmEmptyIcon />
            </div>
            <div className="text-center p-14 text-[16px] text-apollo-light-gray">
              You don&rsquo;t have any items on your alarm list. If you want,
              you can browse and add the items you like to your alarm list.
            </div>
            <Button fullWidth title="Continue Shopping" />
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Alarm;
