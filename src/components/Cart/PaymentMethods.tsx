import React, { useState } from "react";
import CheckBoxCircle from "components/CheckBoxCircle";
import { ApplePlayIcon } from "components/SvgIcons";
import { Button } from "components/Button";

export const CashOnDelivery = ({ isGuest }: { isGuest: boolean }) => {
  return (
    <>
      {!isGuest && (
        <>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-apollo-dark-white rounded-2xl p-4">
              <div className="grid grid-cols-2 mb-4">
                <div className="text-[18px] font-bold text-apollo-primary">
                  LAKUM
                </div>
                <div className="grid grid-cols-2 text-[18px] bg-apollo-primary rounded text-white p-2">
                  <div className="grid grid-cols-2 border-r-2">
                    <div className="text-[12px]">RIYAL</div>
                    <div className="text-[12px] font-bold text-right pr-2">
                      0.13
                    </div>
                  </div>
                  <div>
                    <div className="grid grid-cols-2">
                      <div className="text-[12px] pl-2">POINTS</div>
                      <div className="text-[12px] font-bold text-right">
                        5.0
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <CheckBoxCircle
                checked
                label={
                  <span className="text-[14px]">
                    I want to use my LAKUM points{" "}
                    <span className="font-bold">(-SAR 5.00)</span>
                  </span>
                }
              />
            </div>
            <div className="border-2 m-3 rounded-2xl p-4">
              <div className="text-[18px] font-bold">Store Credit</div>
              <CheckBoxCircle
                checked
                label={
                  <span className="text-[14px]">
                    I want to use my LAKUM points{" "}
                    <span className="font-bold">(-SAR 5.00)</span>
                  </span>
                }
              />
            </div>
          </div>
          <div className="text-[18px] font-bold mt-4 mb-1">
            Coupons & Promotions
          </div>
          <div className="grid grid-cols-2 gap-3 bg-apollo-dark-white rounded-2xl p-5 mb-2">
            <div>
              <div className="border border-apollo-error rounded-2xl bg-white grid grid-cols-2 px-2 py-3 align-middle">
                <div className="text-[16px] pt-2">COVID19</div>
                <div className="text-right">
                  <Button title="+" />
                </div>
              </div>
              <div className="text-[10px] text-apollo-error">
                This coupon has expired.
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 bg-apollo-white p-4 align-middle">
              <div>
                <div className="text-[16px] font-bold">
                  Get ready for winter!
                </div>
                <div className="text-[12px] mt-1">
                  Get 15% off every &ldquo;Vitamins & Supplements&rdquo; product
                  you order through the app!
                </div>
              </div>
              <div>
                <div className="text-[16px] font-bold text-right">
                  <Button title="Apply" />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      <CheckBoxCircle
        checked
        label={
          <span className="text-[14px]">
            I read and accept to HMG Group&lsquo;s{" "}
            <span className="text-apollo-primary cursor-pointer font-bold">
              Terms and Conditions
            </span>{" "}
            and{" "}
            <span className="text-apollo-primary cursor-pointer font-bold">
              Privacy Policy
            </span>
          </span>
        }
      />
      <Button title="Order Now" />
      <button
        type="submit"
        className="inline-block mt-3 ml-2 mb-4 px-6 py-2.5 pb-[9px] bg-apollo-black text-white font-medium text-xs leading-tight rounded transition duration-150 ease-in-out"
      >
        <ApplePlayIcon />
      </button>
    </>
  );
};

export const CreditDebitCard = ({ isGuest }: { isGuest: boolean }) => {
  const [cards] = useState([
    { id: 1, name: "VISA - 2308" },
    { id: 2, name: "AMEX - 1201" },
    { id: 3, name: "MasterCard - 2265" },
  ]);
  return (
    <>
      {!isGuest && (
        <>
          <div className="text-[20px] font-bold mb-3">
            Enter Your Credit/Debit Card
          </div>
          {!isGuest && (
            <div className="grid grid-cols-5 gap-2 mr-2">
              {cards.map((item) => (
                <div
                  key={item.id}
                  className={`border-2 rounded-2xl p-2 py-3 text-[14px] font-bold align-middle text-center`}
                >
                  {item.name}
                </div>
              ))}
              <div
                className={`border-2 rounded-2xl p-2 py-3 align-middle text-center text-[14px] text-apollo-primary cursor-pointer border-apollo-primary`}
              >
                + New Card
              </div>
            </div>
          )}
          <div className="grid grid-cols-2 gap-2 mt-5 mb-5">
            <div>
              <div className="grid grid-cols-1">
                <div className="relative w-full mb-5">
                  <input
                    className="py-2 block w-full h-10 bg-apollo-dark-white rounded px-2 text-sm font-bold text-dark-gray"
                    type="text"
                    placeholder="Card Holder&lsquo;s Name"
                  />
                </div>
                <div className="relative w-full mb-5">
                  <input
                    className="py-2 block w-full h-10 bg-apollo-dark-white rounded px-2 text-sm font-bold text-dark-gray"
                    type="text"
                    placeholder="Card Number"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="relative w-full">
                  <input
                    className="py-2 block w-full h-10 bg-apollo-dark-white rounded px-2 text-sm font-bold text-dark-gray"
                    type="text"
                    placeholder="MM/YYYY"
                  />
                </div>
                <div className="relative w-full">
                  <input
                    className="py-2 block w-full h-10 bg-apollo-dark-white rounded px-2 text-sm font-bold text-dark-gray"
                    type="text"
                    placeholder="CVV"
                  />
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="inline-block bg-apollo-linear-gradient-1 w-[300px] h-[174px] rounded-2xl p-3">
                <div className="text-left mt-[50px] text-[20px] text-white">
                  XXXX XXXX XXXX XXXX
                </div>
                <div className="text-left text-[12px] font-bold text-white">
                  MM/YYYY
                </div>
                <div className="text-left text-[17px] mt-[30px] font-bold text-white">
                  NAME SURNAME
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="grid grid-cols-2 gap-3 mt-5 mb-5">
            <div className="bg-apollo-dark-white rounded-2xl p-4">
              <div className="grid grid-cols-2 mb-4">
                <div className="text-[18px] font-bold text-apollo-primary">
                  LAKUM
                </div>
                <div className="grid grid-cols-2 text-[18px] bg-apollo-primary rounded text-white p-2">
                  <div className="grid grid-cols-2 border-r-2">
                    <div className="text-[12px]">RIYAL</div>
                    <div className="text-[12px] font-bold text-right pr-2">
                      0.13
                    </div>
                  </div>
                  <div>
                    <div className="grid grid-cols-2">
                      <div className="text-[12px] pl-2">POINTS</div>
                      <div className="text-[12px] font-bold text-right">
                        5.0
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <CheckBoxCircle
                checked
                label={
                  <span className="text-[14px]">
                    I want to use my LAKUM points{" "}
                    <span className="font-bold">(-SAR 5.00)</span>
                  </span>
                }
              />
            </div>
            <div className="border-2 m-3 rounded-2xl p-4">
              <div className="text-[18px] font-bold">Store Credit</div>
              <CheckBoxCircle
                checked
                label={
                  <span className="text-[14px]">
                    I want to use my LAKUM points{" "}
                    <span className="font-bold">(-SAR 5.00)</span>
                  </span>
                }
              />
            </div>
          </div>
          <hr />
          <div className="text-[18px] font-bold mt-4 mb-1">
            Coupons & Promotions
          </div>
          <div className="grid grid-cols-2 gap-3 bg-apollo-dark-white rounded-2xl p-5 mb-2">
            <div>
              <div className="border rounded-2xl bg-white grid grid-cols-2 px-2 py-3 align-middle">
                <div className="text-[16px] pt-2 text-dark-gray">
                  Enter a coupon code...
                </div>
                <div className="text-right">
                  <Button title="+" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 bg-apollo-white p-4 align-middle">
              <div>
                <div className="text-[16px] font-bold">
                  Get ready for winter!
                </div>
                <div className="text-[12px] mt-1">
                  Get 15% off every &ldquo;Vitamins & Supplements&rdquo; product
                  you order through the app!
                </div>
              </div>
              <div>
                <div className="text-[16px] font-bold text-right">
                  <Button title="Apply" />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      <CheckBoxCircle
        checked
        label={
          <span className="text-[14px]">
            I read and accept to HMG Group&lsquo;s{" "}
            <span className="text-apollo-primary cursor-pointer font-bold">
              Terms and Conditions
            </span>{" "}
            and{" "}
            <span className="text-apollo-primary cursor-pointer font-bold">
              Privacy Policy
            </span>
          </span>
        }
      />
      <Button title="Order Now" />
      <button
        type="submit"
        className="inline-block mt-3 ml-2 mb-4 px-6 py-2.5 pb-[9px] bg-apollo-black text-white font-medium text-xs leading-tight rounded transition duration-150 ease-in-out"
      >
        <ApplePlayIcon />
      </button>
    </>
  );
};
