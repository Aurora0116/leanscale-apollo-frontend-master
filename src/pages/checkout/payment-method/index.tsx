import React, { useState } from "react";
import type { NextPage } from "next";
import Layout from "components/Layout";
import SummaryBox from "components/Cart/SummaryBox";
import Steps from "components/Cart/Steps";
import {
  CashOnDelivery,
  CreditDebitCard,
} from "components/Cart/PaymentMethods";
import { RECOMMENDED_FOR_YOU } from "../../../demodata";
const PaymentMethod: NextPage = () => {
  const [isGuest] = useState(false);
  const [paymentMethods, setPaymentMethods] = useState([
    {
      id: 1,
      name: "Credit/Debit Card",
      active: false,
      component: <CreditDebitCard isGuest={isGuest} />,
    },
    {
      id: 2,
      name: "Bank Transfer",
      active: false,
      component: "",
    },
    {
      id: 3,
      name: "Cash on Delivery",
      delivery: "Nearest: Derma Pharmacy Olaya",
      active: true,
      component: <CashOnDelivery isGuest={isGuest} />,
    },
    {
      id: 4,
      name: "Installments",
      active: false,
      component: "",
    },
  ]);
  const steps = [
    { id: 1, title: "Delivery", status: true },
    { id: 2, title: "Payment", status: true },
  ];

  const handleClick = (id: number) => {
    setPaymentMethods(
      paymentMethods.map((item) => ({
        ...item,
        active: item.id === id ? true : false,
      }))
    );
  };

  const component = paymentMethods.find((item) => item.active)?.component;
  return (
    <Layout subHeader={false} className="pb-0">
      <div className="w-full bg-apollo-white">
        <div className="grid grid-cols-12 pt-4">
          <div className="col-start-2 col-span-10">
            <div className="grid grid-cols-6">
              <div className="col-start-1 col-span-4 pr-5">
                <div className="text-[34px]">Payment Method</div>
                <div className="text-[20px] mt-5 mb-2 font-bold">
                  Select a Payment Method
                </div>
                <div className="grid grid-cols-4 gap-2 mr-2">
                  {paymentMethods.map((item) => (
                    <div
                      onClick={() => handleClick(item.id)}
                      key={item.id}
                      className={`border-2 rounded-2xl p-3 cursor-pointer ${
                        item.active && "border-apollo-primary"
                      }`}
                    >
                      <div className="text-[14px] font-bold text-center">
                        {item.name}
                      </div>
                    </div>
                  ))}
                </div>
                <hr className="mt-5 mb-5" />
                {component}
              </div>
              <div className="col-start-5 col-span-2">
                <div className="mb-5">
                  <Steps data={steps} />
                </div>
                <SummaryBox
                  cart={RECOMMENDED_FOR_YOU.slice(0, 2)}
                  isLink={true}
                  isGuest={isGuest}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PaymentMethod;
