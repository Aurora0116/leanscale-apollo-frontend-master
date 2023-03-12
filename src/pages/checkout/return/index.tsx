import React, { useState } from "react";
import type { NextPage } from "next";
import Layout from "components/Layout";
import Modal from "components/Modal";
import CheckBoxCircle from "components/CheckBoxCircle";
import ProductItem from "components/ProductItem";
import { RECOMMENDED_FOR_YOU } from "../../../demodata";
import CheckBox from "components/CustomCheckboxInput";
import { RadioType } from "components/RadioType";
import { Button } from "components/Button";

const Return: NextPage = () => {
  const [refundToggle, setRefundToggle] = useState(true);
  const [showReturnPolicyModal, setShowReturnPolicyModal] = useState(false);
  const [showReturnConfirmModal, setShowReturnConfirmModal] = useState(false);
  const handleToggle = () => {
    setRefundToggle((prev) => !prev);
  };
  return (
    <Layout className="pb-0">
      <div className="w-full bg-apollo-white">
        <div className="grid grid-cols-12 pt-4">
          <div className="col-start-2 col-span-10">
            <div className="text-[20px] text-apollo-light-gray pl-4">{`Home > My Account > Orders > Order Details > Return Items`}</div>
            <div className="text-[34px]">Select Items to Return</div>
            <div className="grid grid-cols-2 gap-3 mt-5">
              <div className="">
                <div className="border border-3 rounded-2xl">
                  <div className="p-4 flex" style={{ alignItems: "center" }}>
                    <CheckBox checked />
                    {RECOMMENDED_FOR_YOU.slice(0, 1).map((item, key) => (
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
                  </div>
                  <div className="p-8">
                    <div className="text-[12px] font-bold mb-3">
                      Why are you returning this?
                    </div>
                    <div className="relative w-full mb-4">
                      <select className="py-2 block w-full h-10 bg-apollo-dark-white font-bold rounded pl-2 px-2 text-sm text-dark-gray">
                        <option selected>Better price available</option>
                      </select>
                    </div>
                    <div className="text-[12px] font-bold mb-3">
                      Can you explain shortly? (Optional)
                    </div>
                    <div className="relative w-full mb-4">
                      <textarea
                        placeholder="Description goes here..."
                        className="py-2 block w-full h-20 bg-apollo-dark-white font-bold rounded pl-2 px-2 text-sm text-dark-gray"
                      ></textarea>
                    </div>
                    <div className="text-[16px] font-bold mb-1">
                      Product Photos/Reports
                    </div>
                    <div className="text-[12px] mb-3">
                      You can add images, shipping report or service report{" "}
                      <br />
                      explaining why you want to return the product.
                    </div>
                    <div className="grid bg-apollo-dark-white h-[69px] rounded border border-apollo-light-gray text-apollo-light-gray text-[16px] text-center place-items-center cursor-pointer">
                      Add images or files...
                    </div>
                  </div>
                </div>
                <div className="border border-3 rounded-2xl mt-5">
                  <div className="p-4 flex" style={{ alignItems: "center" }}>
                    <CheckBox checked />
                    {RECOMMENDED_FOR_YOU.slice(2, 3).map((item, key) => (
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
                  </div>
                  <div className="p-8">
                    <div className="text-[12px] font-bold mb-3">
                      Why are you returning this?
                    </div>
                    <div className="relative w-full mb-4">
                      <select className="py-2 block w-full h-10 bg-apollo-dark-white font-bold rounded pl-2 px-2 text-sm text-dark-gray">
                        <option selected>Choose a response...</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="border border-3 rounded-2xl mt-5">
                  <div className="p-4 flex" style={{ alignItems: "center" }}>
                    <CheckBox />
                    {RECOMMENDED_FOR_YOU.slice(3, 4).map((item, key) => (
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
                  </div>
                </div>
                <div className="text-[16px] font-bold mt-5">Refund Method</div>
                <div className="mt-5">
                  <RadioType
                    checked={refundToggle}
                    onClick={handleToggle}
                    label={
                      <span className="text-[14px]">
                        Refund to Store Credit (Recommended)
                      </span>
                    }
                  />
                </div>
                <div className="mt-5">
                  <RadioType
                    checked={!refundToggle}
                    onClick={handleToggle}
                    label={
                      <span className="text-[14px]">
                        Refund to my credit/debit card
                      </span>
                    }
                  />
                </div>
                {!refundToggle && (
                  <>
                    <div className="text-[12px] font-bold mb-3 mt-5">
                      Select your credit/debit card
                    </div>
                    <div className="relative w-full mb-4">
                      <select className="py-2 block w-full h-10 bg-apollo-dark-white font-bold rounded pl-2 px-2 text-sm text-dark-gray">
                        <option selected>Add new card...</option>
                      </select>
                    </div>
                    <div className="text-[12px] font-bold mb-3 mt-5">
                      Add New Credit/Debit Card
                    </div>
                    <div className="">
                      <div className="relative w-full">
                        <input
                          className="py-2 block w-full h-10 bg-apollo-dark-white rounded px-2 text-sm font-bold text-dark-gray pr-10"
                          type="text"
                          placeholder="Card Holder&lsquo;s Name"
                        />
                        <div className="relative w-full mt-4">
                          <input
                            className="py-2 block w-full h-10 bg-apollo-dark-white rounded px-2 text-sm font-bold text-dark-gray"
                            type="text"
                            placeholder="Card Number"
                          />
                        </div>
                        <div className="flex grid grid-cols-2 gap-3 mt-4 mb-3">
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
                    </div>
                  </>
                )}
                <div className="text-[16px] font-bold mt-5">Return Method</div>
                <div className="mt-5">
                  <RadioType
                    onClick={() => {}}
                    checked={false}
                    label={
                      <span className="text-[14px]">
                        Get it at my address free of charge
                      </span>
                    }
                  />
                </div>
                <div className="mt-5">
                  <RadioType
                    onClick={() => {}}
                    checked
                    label={
                      <div>
                        <div className="text-[14px]">
                          I will drop off to the store
                        </div>
                        <div className="text-[12px] font-bold text-apollo-primary">
                          See Our Stores on Map
                        </div>
                      </div>
                    }
                  />
                </div>
                <div className="text-[16px] font-bold mt-5">
                  The address to which the product will be sent back if the
                  return is refused
                </div>
                <div className="mt-5 p-4 grid grid-cols-6 bg-apollo-dark-white rounded border border-apollo-light-gray">
                  <div className="col-start-1 col-span-5">
                    <div className="text-[12px] font-bold">My Home</div>
                    <div className="text-[14px] text-apollo-light-gray">
                      Nazlah Dist., P.O.Box: 16544 Jeddah
                    </div>
                  </div>
                  <div className="col-start-6 col-span-1 text-right">
                    <Button title="Change" variant="outline" />
                  </div>
                </div>
                <div className="mt-5 mb-5">
                  <Button title="Submit Return Request" />
                </div>
              </div>
              <div>
                <div className="bg-apollo-dark-white rounded-2xl p-3">
                  <div className="bg-apollo-white rounded-2xl p-3">
                    <div className="text-[17px] font-bold">
                      Our Return Policy
                    </div>
                    <ul style={{ listStyle: "disc" }} className="p-5">
                      <li>
                        All Materials are returnable except the Materials that
                        are non-returnable due to hygienic reasons, for instance
                        but not limited to (shavers, epilators, oral/ dental
                        care) unless found defective, in addition to the
                        refrigerated Materials under specific degree determined
                        at to our discretion.
                      </li>
                      <li>
                        You must bring your national ID and original invoice in
                        order to benefit from the return service and warranty.
                      </li>
                      <li>
                        You can return the Materials if it were at the same
                        state as purchased with all its parts and covered with
                        its original cover.
                      </li>
                      <li>
                        You may return the Materials within 15 days from the
                        date of receipt.
                      </li>
                      <li>
                        In case of return, the amount of the refunded Materials
                        will be transferred to your bank account within 5 to 7
                        business days.
                      </li>
                      <li>
                        Fees of delivery could not be refunded unless the return
                        was due to manufactory defect.
                      </li>
                      <li>
                        If the Materials were delivered in Riyadh, you may
                        return the Materials by visiting one of the
                        Pharmacies&lsquo; branches. If the Materials were
                        delivered outside of Riyadh, you must ship the Materials
                        to any of the Pharmacies&lsquo; branches with bearing
                        all the concerned fees including but not limited to
                        shipment fees.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Return Policy Popup */}
      {showReturnPolicyModal && (
        <Modal
          title=""
          modalWidth="40rem"
          onClick={() => {}}
          closeModal={() => setShowReturnPolicyModal(false)}
          show={showReturnPolicyModal}
          customFooter={true}
        >
          <div className="p-5">
            <div className="text-[28px] text-center">Our Return Policy</div>
            <ul style={{ listStyle: "disc" }}>
              <li>
                All Materials are returnable except the Materials that are
                non-returnable due to hygienic reasons, for instance but not
                limited to (shavers, epilators, oral/ dental care) unless found
                defective, in addition to the refrigerated Materials under
                specific degree determined at to our discretion.
              </li>
              <li>
                You must bring your national ID and original invoice in order to
                benefit from the return service and warranty.
              </li>
              <li>
                You can return the Materials if it were at the same state as
                purchased with all its parts and covered with its original
                cover.
              </li>
              <li>
                You may return the Materials within 15 days from the date of
                receipt.
              </li>
              <li>
                In case of return, the amount of the refunded Materials will be
                transferred to your bank account within 5 to 7 business days.
              </li>
              <li>
                Fees of delivery could not be refunded unless the return was due
                to manufactory defect.
              </li>
              <li>
                If the Materials were delivered in Riyadh, you may return the
                Materials by visiting one of the Pharmacies&lsquo; branches. If
                the Materials were delivered outside of Riyadh, you must ship
                the Materials to any of the Pharmacies&lsquo; branches with
                bearing all the concerned fees including but not limited to
                shipment fees.
              </li>
            </ul>
            <div className="grid grid-cols-2 gap-2 mt-3">
              <Button title="Continue" fullWidth />
              <Button title="Cancel Return" fullWidth variant="outline" />
            </div>
          </div>
        </Modal>
      )}
      {/* Return Comfirmed popup */}
      {showReturnConfirmModal && (
        <Modal
          title=""
          modalWidth="40rem"
          onClick={() => {}}
          closeModal={() => setShowReturnConfirmModal(false)}
          show={showReturnConfirmModal}
          customFooter={true}
        >
          <div className="p-3">
            <div className="text-[28px] text-center">
              <CheckBoxCircle
                wrapperClassName="inline-block"
                checkBoxClassName="w-[64px] h-[64px]"
                checked
              />
            </div>
            <div className="text-[28px] text-apollo-primary px-14 text-center">
              Your return request has been created
            </div>
            <div className="text-[16px] text-center mb-5">
              We apologize for the inconvenience you experienced. You can drop
              off the product you have created a return request to one of our
              stores within 3 working days.
            </div>
            <div className="text-[16px] font-bold text-center mb-5">
              Items with the Return Request
            </div>
            {RECOMMENDED_FOR_YOU.slice(0, 1).map((item, key) => (
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
            <div className="grid grid-cols-2 gap-2 mt-3">
              <Button title="Continue Shopping" fullWidth />
              <Button
                title="See Our Stores on Map"
                fullWidth
                variant="outline"
              />
            </div>
          </div>
        </Modal>
      )}
    </Layout>
  );
};

export default Return;
