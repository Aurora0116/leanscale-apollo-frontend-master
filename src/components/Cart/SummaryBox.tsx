import React from "react";
import { OrderIcon, LinkIcon } from "components/SvgIcons";
import ProductItem from "components/ProductItem";
import { Button } from "components/Button";
interface PageProps {
  isButton?: boolean;
  isOffer?: boolean;
  cart?: any[];
  isLink?: boolean;
  isGuest?: boolean;
  wrapperClassName?: string;
  isPurchasing?: boolean;
}
const SummaryBox = ({
  isButton = false,
  isOffer = false,
  cart = [],
  isLink = false,
  isGuest = true,
  wrapperClassName = "",
  isPurchasing = false,
}: PageProps) => {
  return (
    <div className={`bg-[#F7F7F8] rounded-2xl p-5 ${wrapperClassName}`}>
      {cart.map((item, key) => (
        <ProductItem
          key={key}
          title={item.title}
          image={item.image}
          price={item.price}
          discount={item.discount}
          rating={item.rating}
          prescriptionNeeded={item.prescriptionNeeded}
          horizontal
          className="max-w-[calc(100%)] bg-[#F7F7F8]"
        />
      ))}
      <div className="bg-apollo-white rounded-2xl p-5">
        <div className="text-[18px] font-bold">Order Summary</div>
        {isPurchasing ? (
          <>
            <div className="grid grid-cols-2 mt-2 text-[14px]">
              <div>Total Amount</div>
              <div className="font-bold text-right">SAR 75.87</div>
            </div>
            <div className="grid grid-cols-2 mt-2 text-[14px]">
              <div>Order ID</div>
              <div className="font-bold text-right">243 654 219</div>
            </div>
            <div className="grid grid-cols-2 mt-2 text-[14px]">
              <div>Delivery Method</div>
              <div className="font-bold text-right">Pickup from Pharmacy</div>
            </div>
            <div className="grid grid-cols-2 mt-2 text-[14px]">
              <div>Order Status</div>
              {isGuest ? (
                <div className="font-bold text-right">Waiting Payment</div>
              ) : (
                <div className="font-bold text-right">Preparing</div>
              )}
            </div>
            <hr className="mt-2 mb-2" />
            <div className="text-[14px] font-bold">Pickup Address</div>
            <div className="grid grid-cols-2">
              <div>
                <div className="text-[12px] font-bold text-apollo-primary">
                  Derma Pharmacy Olaya
                </div>
                <div className="text-[10px]">
                  2570-2546 Street Number 74, As Sulimaniyah, Riyadh 12214,
                  Saudi Arabia
                </div>
              </div>
              <div className="text-right">
                <Button title="Get Directions" />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="grid grid-cols-2 mt-2 text-[14px]">
              <div>Products</div>
              <div className="font-bold text-right">SAR 70.00</div>
            </div>
            <div className="grid grid-cols-2 mt-2 text-[14px]">
              <div>Shipping</div>
              <div className="font-bold text-right">SAR 5.00</div>
            </div>
            <div className="grid grid-cols-2 mt-2 text-[14px]">
              <div>Tax</div>
              <div className="font-bold text-right">SAR 0.87</div>
            </div>
            <div className="grid grid-cols-2 mt-2 text-[14px] text-apollo-light-gray">
              <div>Insurance Patient Share</div>
              <div className="font-bold text-right">Not applicable</div>
            </div>
            <div className="grid grid-cols-2 mt-2 text-[14px] text-apollo-light-gray">
              <div>Lakum Points Earned</div>
              <div className="font-bold text-right">Not applicable</div>
            </div>
            <hr className="mt-3" />
            <div className="grid grid-cols-2 mt-2 text-[18px]">
              <div>Total Amount</div>
              <div className="font-bold text-right">SAR 75.87</div>
            </div>
          </>
        )}
      </div>
      {isOffer && (
        <div className="flex bg-apollo-white rounded-2xl p-5 mt-5">
          <OrderIcon color="#2E8F66" />{" "}
          <span className="ml-4">
            Add to cart +SAR 35.00&sbquo; get
            <span className="text-apollo-primary cursor-pointer">
              {" "}
              FREE delivery
            </span>
          </span>
        </div>
      )}
      {isButton && <Button title="Proceed to Checkout" className="mt-4" />}
      {isLink && !isGuest && (
        <div className="mt-5 cursor-pointer text-apollo-primary text-[14px] text-center">
          <LinkIcon /> Let someone pay for you
        </div>
      )}
    </div>
  );
};

export default SummaryBox;
