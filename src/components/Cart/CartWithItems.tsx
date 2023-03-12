import React from "react";
import type { NextPage } from "next";
import ProductItem from "components/ProductItem";
import { RECOMMENDED_FOR_YOU } from "../../demodata";
import SummaryBox from "components/Cart/SummaryBox";
const CartWithItems: NextPage = () => {
  return (
    <div className="grid grid-cols-6">
      <div className="col-start-1 col-span-4 p-5">
        {RECOMMENDED_FOR_YOU.slice(0, 2)
          .map((item) => ({ ...item, rating: 5 }))
          .map((item, key) => (
            <ProductItem
              key={key}
              title={item.title}
              image={item.image}
              price={item.price}
              discount={item.discount}
              cartAbleWithPlusMinus={item.cartAble}
              rating={item.rating}
              prescriptionNeeded={item.prescriptionNeeded}
              horizontal
              className="max-w-[calc(100%)]"
            />
          ))}
      </div>
      <div className="col-start-5 col-span-2">
        <SummaryBox isButton isOffer />
      </div>
    </div>
  );
};

export default CartWithItems;
