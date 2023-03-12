import React, { useState } from "react";
import type { NextPage } from "next";
import Layout from "components/Layout";
import PaymentCard from "components/PaymentCard";
import Modal from "components/Modal";
import { PaymentCardIcon } from "components/SvgIcons";
import { Button } from "components/Button";

const Payments: NextPage = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Layout
      showSideBar
      sideBarTitle="Profile Settings"
      sideBarBreadcrumb="Account Settings"
    >
      <div className="grid grid-cols-12 mb-3">
        <div className="col-start-1 col-span-6 text-[22px] font-bold">
          My Cards
        </div>
      </div>
      <div className="grid grid-cols-12 gap-x-3">
        <PaymentCard
          cardNumber="**** **** **** 1201"
          cardType="OneLink"
          expiryDate="12/29"
        />
        <PaymentCard
          cardNumber="**** **** **** 2308"
          cardType="visaCard"
          expiryDate="12/29"
        />
        <PaymentCard
          cardNumber="**** **** **** 2265"
          cardType="masterCard"
          expiryDate="12/29"
        />
        <div className="col-span-4 border-2 rounded p-14 mt-2 flex items-center justify-center">
          <Button onClick={() => setShowModal(true)} title="+ Add New Card" />
        </div>
      </div>
      <Modal
        show={showModal}
        backdrop
        buttonTitle="Add New Card"
        title="Add New Card"
        closeModal={() => setShowModal(false)}
        onClick={() => {}}
      >
        <div>
          <div className="flex grid grid-cols-1 mt-3 mb-3">
            <div className="relative w-full">
              <input
                className="
                    py-2 block w-full h-10 bg-apollo-dark-white rounded
                    px-2 text-sm font-bold text-dark-gray pr-10
                    "
                type="text"
                placeholder="Card Holder&lsquo;s Name"
              />
              <span className="absolute inset-y-0 left-[90%] flex items-center pl-2">
                <PaymentCardIcon />
              </span>
            </div>
          </div>
          <div className="flex grid grid-cols-1 mt-3 mb-3">
            <div className="relative w-full">
              <input
                className="
                    py-2 block w-full h-10 bg-apollo-dark-white rounded
                    px-2 text-sm font-bold text-dark-gray
                    "
                type="text"
                placeholder="Card Number"
              />
            </div>
          </div>
          <div className="flex grid grid-cols-2 gap-3 mt-3 mb-3">
            <div className="relative w-full">
              <input
                className="
                    py-2 block w-full h-10 bg-apollo-dark-white rounded
                    px-2 text-sm font-bold text-dark-gray
                    "
                type="text"
                placeholder="MM/YYYY"
              />
            </div>
            <div className="relative w-full">
              <input
                className="
                    py-2 block w-full h-10 bg-apollo-dark-white rounded
                    px-2 text-sm font-bold text-dark-gray
                    "
                type="text"
                placeholder="CVV"
              />
            </div>
          </div>
        </div>
      </Modal>
    </Layout>
  );
};

export default Payments;
