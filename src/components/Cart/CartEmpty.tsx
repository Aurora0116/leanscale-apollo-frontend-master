import React from "react";
import type { NextPage } from "next";
import { CartWithItemsIcon } from "components/SvgIcons";
const CartEmpty: NextPage = () => {
  return (
    <div>
      <div className="text-center mt-8">
        <CartWithItemsIcon />
      </div>
      <div className="text-center text-[20px] mt-2 mb-5 text-light-gray">
        Your cart appears to be empty. To fill your cart, your
        <br />
        can start to review the following products.
      </div>
    </div>
  );
};

export default CartEmpty;
