import React, { useState } from "react";
import type { NextPage } from "next";
import Layout from "components/Layout";
import ProductItem from "components/ProductItem";
import { RECOMMENDED_FOR_YOU } from "../../../demodata";
import CheckBoxCircle from "components/CheckBoxCircle";
import SummaryBox from "components/Cart/SummaryBox";
import { LinkIcon, CopyNewIcon } from "components/SvgIcons";
import { Button } from "components/Button";

const Purchase: NextPage = () => {
  const [isGuest] = useState(true);
  return (
    <Layout subHeader={false} className="pb-0">
      <div className="w-full bg-apollo-white">
        <div className="grid grid-cols-12 pt-4">
          <div className="col-start-4 col-span-6">
            <div className="text-center">
              <CheckBoxCircle
                wrapperClassName="inline-block"
                checkBoxClassName="w-[64px] h-[64px]"
                checked
              />
            </div>
            {isGuest ? (
              <>
                <div className="text-[28px] text-apollo-primary text-center">
                  Payment Link Created
                </div>
                <div className="text-[14px] text-center mb-3">
                  You can send this payment link and make someone to pay your
                  purchase. If you change your mind, you can see order details
                  and pay yourself.
                </div>
                <div className="grid grid-cols-12">
                  <div className="col-start-1 col-span-9 bg-apollo-lightest-gray text-apollo-light-gray p-2 rounded mb-4">
                    <LinkIcon color="#AAAAAA" />{" "}
                    https://alhabibpharmacy.com/payment/6010010052/
                  </div>
                  <div className="col-start-10 col-span-3 text-right">
                    <div className="inline-block">
                      <Button title="Click to Copy" icon={<CopyNewIcon />} />
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="text-[28px] text-apollo-primary text-center">
                  Purchase Confirmed
                </div>
                <div className="text-[14px] text-center mb-3">
                  We&lsquo;re processing your order, confirmation send to{" "}
                  <span className="font-bold">jamal.mansour@leanscale.com</span>
                </div>
              </>
            )}
            <div className="grid grid-cols-6 mb-5">
              <div className="col-start-1 col-span-3">
                <div className="text-[20px] font-bold">
                  The items you ordered
                </div>
                {RECOMMENDED_FOR_YOU.slice(0, 2).map((item, key) => (
                  <ProductItem
                    key={key}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    discount={item.discount}
                    prescriptionNeeded={item.prescriptionNeeded}
                    horizontal
                    className="max-w-[calc(100%)]"
                  />
                ))}
                <div className="mt-2">
                  <Button title="Continue Shopping" className="mr-3" />
                  <Button title="See Order Details" variant="outline" />
                </div>
              </div>
              <div className="col-start-4 col-span-3">
                <SummaryBox
                  isPurchasing
                  isGuest={isGuest}
                  wrapperClassName="p-[3px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Purchase;
