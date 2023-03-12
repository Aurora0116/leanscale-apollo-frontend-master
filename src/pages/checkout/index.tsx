import React, { useState } from "react";
import type { NextPage } from "next";
import Layout from "components/Layout";
import { CartEmpty, CartWithItems } from "components/Cart";
import ProductItem from "components/ProductItem";
import { RECOMMENDED_FOR_YOU } from "../../demodata";
const Checkout: NextPage = () => {
  const [isCartEmpty] = useState(false);
  return (
    <Layout subHeader={false} className="pb-0">
      <div className="w-full bg-apollo-white">
        <div className="grid grid-cols-12 pt-4 pl-4">
          <div className="col-start-2 col-span-10">
            <div className="text-[34px]">Your Cart</div>
            {isCartEmpty ? <CartEmpty /> : <CartWithItems />}
            {isCartEmpty ? (
              <div>
                <div className="text-[28px]">These items may interest you</div>
                <div className="grid grid-cols-6">
                  {RECOMMENDED_FOR_YOU.slice(0, 18).map((item, key) => (
                    <ProductItem
                      key={key}
                      title={item.title}
                      image={item.image}
                      price={item.price}
                      discount={item.discount}
                      cartAble={item.cartAble}
                      prescriptionNeeded={item.prescriptionNeeded}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div>
                <div className="text-[28px] pb-2">
                  Frequently bought together
                </div>
                <div className="grid grid-cols-6">
                  {RECOMMENDED_FOR_YOU.slice(0, 6).map((item, key) => (
                    <ProductItem
                      key={key}
                      title={item.title}
                      image={item.image}
                      price={item.price}
                      discount={item.discount}
                      cartAble={item.cartAble}
                      prescriptionNeeded={item.prescriptionNeeded}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
