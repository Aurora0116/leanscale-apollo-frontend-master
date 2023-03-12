import Header from "components/Header";
import Ask from "components/ProductDetail/Ask";
import BuyingOption from "components/ProductDetail/BuyingOption";
import CartSetting from "components/ProductDetail/CartSetting";
import {
  NotifyMe,
  RxFullNotify,
  RxNotify,
} from "components/ProductDetail/DetailNotice";
import GoodFor from "components/ProductDetail/GoodFor";
import GSK from "components/ProductDetail/GSK";
import IdCard from "components/ProductDetail/IdCard";
import Include from "components/ProductDetail/Include";
import ProductDetailCollapeGroup from "components/ProductDetail/ProductDetailCollapeGroup";
import ProductItem from "components/ProductItem";
import SubHeader from "components/SubHeader";
import { AddToWishlistIcon, ShareIcon } from "components/SvgIcons";
import { TopHeader } from "components/Widget";
import React from "react";
import { RECOMMENDED_FOR_YOU } from "src/demodata";

export default function ProductDetail() {
  return (
    <>
      {/* beginning header */}
      <TopHeader />
      <Header />
      <SubHeader />
      {/* end header */}
      <div className="bg-white ">
        <div className="container mx-auto pt-6">
          <div className="flex items-center p-4 justify-between">
            <div className="flex items-center text-title-3 text-light-gray">
              <span className="hover:underline">Home</span>
              <span>&nbsp;&#62;&nbsp;</span>
              <span className="hover:underline">Medicines</span>
              <span>&nbsp;&#62;&nbsp;</span>
              <span>Nicotion Replacement</span>
            </div>
            <div className="flex items-center">
              <button className="border-none flex items-center">
                <AddToWishlistIcon />
                <span className="ml-2 text-gray-dark text-callout font-bold">
                  Add to Wishlist
                </span>
              </button>
              <button className="border-none flex items-center ml-4">
                <ShareIcon />
                <span className="ml-2 text-gray-dark text-callout font-bold">
                  Share
                </span>
              </button>
            </div>
          </div>
          <div className="m-auto md:flex mt-8">
            <div className="md:w-2/3 p-4">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="h-[290px] overflow-hidden">
                    {/* eslint-disable-next-line */}
                    <img
                      src="/image/demo/product-7.jpg"
                      className="object-contain w-full h-full"
                      alt=""
                    />
                  </div>
                  {/* image list */}
                  <div className="flex items-center justify-center mt-8">
                    <div className="flex items-center">
                      {[1, 2].map((item, key) => (
                        // eslint-disable-next-line
                        <img
                          key={key}
                          src="/image/demo/product-8.jpg"
                          className="w-[70px] h-[50px] mx-1 rounded-lg border-2 object-contain"
                          alt=""
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <GSK
                    title={"Nicotinell Transdermal Plaster 7mg/24hr patch"}
                    pcs={6.42}
                    weight={"0.7 lbs (0,32 kg)"}
                    exDeta={"Jan 2023"}
                    percent={0.3}
                    symbol={"SAR"}
                    price={15}
                  />
                  <BuyingOption />
                  <CartSetting></CartSetting>
                </div>
              </div>

              <ProductDetailCollapeGroup />
            </div>
            <div className="bg-dark-white rounded-lg p-2 h-fit md:w-1/3">
              <Ask />
              <GoodFor />
              <Include />
              <IdCard />
              <NotifyMe />
              <RxNotify />
              <RxFullNotify />
            </div>
          </div>
        </div>
        <div className="container mt-6 mx-auto">
          <h2 className="font-semibold text-title-1 text-dark-gray px-2 pt-4">
            Similar products
          </h2>
          <div className="flex flex-wrap gap-12">
            {RECOMMENDED_FOR_YOU.map((item, key) => (
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

            {/* beginning Partner group */}
            <div className="flex justify-between w-full">
              {/* eslint-disable-next-line */}
              <img src="/image/partners/p-1.png" alt="" />
              {/* eslint-disable-next-line */}
              <img src="/image/partners/p-2.png" alt="" />
              {/* eslint-disable-next-line */}
              <img src="/image/partners/p-3.png" alt="" />
              {/* eslint-disable-next-line */}
              <img src="/image/partners/p-4.png" alt="" />
            </div>
            {/* end Partner group */}
          </div>
        </div>
      </div>
    </>
  );
}
