import React, { useState } from "react";
import type { NextPage } from "next";
import Layout from "components/Layout";
import SummaryBox from "components/Cart/SummaryBox";
import Steps from "components/Cart/Steps";
import { Pickup, StandardShipping } from "components/Cart/DeliveryMethods";
const DeliveryMethod: NextPage = () => {
  const [isGuest] = useState(false);
  const [deliveryMethods, setDeliveryMethods] = useState([
    {
      id: 1,
      name: "Same Day Shipping ($15.00)",
      delivery: "Delivery on this Saturday",
      active: false,
      component: "",
    },
    {
      id: 2,
      name: "Standart Shipping ($5.00)",
      delivery: "Delivery on Tuesday next week",
      active: false,
      component: <StandardShipping isGuest={isGuest} />,
    },
    {
      id: 3,
      name: "Pickup from Pharmacy",
      delivery: "Nearest: Derma Pharmacy Olaya",
      active: true,
      component: <Pickup />,
    },
  ]);

  const handleClick = (id: number) => {
    setDeliveryMethods(
      deliveryMethods.map((item) => ({
        ...item,
        active: item.id === id ? true : false,
      }))
    );
  };

  const component = deliveryMethods.find((item) => item.active)?.component;
  return (
    <Layout subHeader={false} className="pb-0">
      <div className="w-full bg-apollo-white">
        <div className="grid grid-cols-12 pt-4">
          <div className="col-start-2 col-span-10">
            <div className="grid grid-cols-6">
              <div className="col-start-1 col-span-4 pr-5">
                <div className="text-[34px]">Delivery Method</div>
                <div className="text-[20px] mt-5 font-bold">
                  Select a Delivery Method
                </div>
                <div className="grid grid-cols-3 gap-2 mr-2">
                  {deliveryMethods.map((item) => (
                    <div
                      onClick={() => handleClick(item.id)}
                      key={item.id}
                      className={`border-2 rounded-2xl p-3 cursor-pointer ${
                        item.active && "border-apollo-primary"
                      }`}
                    >
                      <div className="text-[14px] font-bold">{item.name}</div>
                      <div className="text-[12px] font-bold text-light-gray">
                        {item.delivery}
                      </div>
                    </div>
                  ))}
                </div>
                {component}
              </div>
              <div className="col-start-5 col-span-2">
                <div className="mb-5">
                  <Steps />
                </div>
                <SummaryBox />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DeliveryMethod;
