import React, { useState } from "react";
import type { NextPage } from "next";
import Layout from "components/Layout";
import AddressCard from "components/AddressCard";
import Modal from "components/Modal";
import { Button } from "components/Button";

const Addresses: NextPage = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Layout
      showSideBar
      sideBarTitle="Profile Settings"
      sideBarBreadcrumb="Account Settings"
    >
      <div className="grid grid-cols-12 mb-3">
        <div className="col-start-1 col-span-6 text-[22px] font-bold">
          Addresses
        </div>
        <div className="col-start-7 col-span-6 text-right">
          <Button onClick={() => setShowModal(true)} title="Add New Address" />
        </div>
      </div>
      <AddressCard
        title="My Home"
        name="Jamal Mansour"
        address="Nazlah Dist., P.O.Box: 16544 Jeddah"
      />
      <AddressCard
        title="Office"
        name="Jamal Mansour"
        address="Prince Salman St., 1st Industrial City, Landmark: Bajnaid Company"
      />
      <Modal
        show={showModal}
        backdrop
        buttonTitle="Add New Address"
        title="Add New Address"
        closeModal={() => setShowModal(false)}
        onClick={() => {}}
      >
        <div>
          <div className="bg-map-bg-image h-[145px] text-center pt-[60px]">
            <Button
              onClick={() => setShowModal(true)}
              variant="outline"
              title="Refine Map Location"
            />
          </div>
          <div className="flex grid grid-cols-1 mt-3 mb-3">
            <div className="relative w-full">
              <input
                className="py-2 block w-full h-10 bg-apollo-dark-white rounded px-2 text-sm font-bold text-dark-gray"
                type="text"
                placeholder="Address` Name"
              />
            </div>
          </div>
          <div className="flex grid grid-cols-1 mt-3 mb-3">
            <div className="relative w-full">
              <select className="py-2 block w-full h-10 bg-apollo-dark-white font-bold rounded pl-2 px-2 text-sm text-dark-gray">
                <option selected>🇸🇦 Saudi Arabia</option>
              </select>
            </div>
          </div>
          <div className="flex grid grid-cols-1 mt-3 mb-3">
            <div className="relative w-full">
              <input
                className="py-2 block w-full h-10 bg-apollo-dark-white rounded px-2 text-sm font-bold text-dark-gray"
                type="text"
                placeholder="Receiver’s Name"
              />
            </div>
          </div>
          <div className="flex grid grid-cols-1 mt-3 mb-3">
            <div className="relative w-full">
              <input
                className="py-2 block w-full h-10 bg-apollo-dark-white rounded px-2 text-sm font-bold text-dark-gray"
                type="text"
                placeholder="Street Name"
              />
            </div>
          </div>
          <div className="flex grid grid-cols-1 mt-3 mb-3">
            <div className="relative w-full">
              <input
                className="py-2 block w-full h-10 bg-apollo-dark-white rounded px-2 text-sm font-bold text-dark-gray"
                type="text"
                placeholder="Apt. floor etc."
              />
            </div>
          </div>
          <div className="flex grid grid-cols-2 gap-3 mt-3 mb-3">
            <div className="relative w-full">
              <input
                className="py-2 block w-full h-10 bg-apollo-dark-white rounded px-2 text-sm font-bold text-dark-gray"
                type="text"
                placeholder="Postal Code"
              />
            </div>
            <div className="relative w-full">
              <input
                className="py-2 block w-full h-10 bg-apollo-dark-white rounded px-2 text-sm font-bold text-dark-gray"
                type="text"
                placeholder="National Address"
              />
            </div>
          </div>
          <div className="flex grid grid-cols-2 gap-3 mt-3 mb-3">
            <div className="relative w-full">
              <select className="py-2 block w-full h-10 bg-apollo-dark-white font-bold rounded pl-2 px-2 text-sm text-dark-gray">
                <option selected>District</option>
              </select>
            </div>
            <div className="relative w-full">
              <select className="py-2 block w-full h-10 bg-apollo-dark-white font-bold rounded pl-2 px-2 text-sm text-dark-gray">
                <option selected>City</option>
              </select>
            </div>
          </div>
        </div>
      </Modal>
    </Layout>
  );
};

export default Addresses;
