import React, { useState } from "react";
import type { NextPage } from "next";
import Layout from "components/Layout";
import AllergiesAndConditionsCard from "components/AllergiesAndConditionsCard";
import Modal from "components/Modal";
import { FilterIcon } from "components/SvgIcons";
import CheckBox from "components/CustomCheckboxInput";
import { Button } from "components/Button";

const AllergiesAndConditions: NextPage = () => {
  const [showAllergensModal, setShowAllergensModal] = useState(false);
  const [showConditionsModal, setShowConditionsModal] = useState(false);
  const [data] = useState([
    "ACE inhibitors",
    "ARBs (angiotensin II receptor blockers)",
    "Aspirin",
    "Cephalosporins",
    "Erythromycins",
    "Statins",
  ]);
  return (
    <Layout
      showSideBar
      sideBarTitle="Profile Settings"
      sideBarBreadcrumb="Account Settings"
    >
      <div className="grid grid-cols-12 gap-x-3 mb-3">
        <div className="col-start-1 col-span-6">
          <div className="text-[22px] font-bold">Allergens</div>
          <AllergiesAndConditionsCard title="Sulfonamides" />
          <Button
            fullWidth
            onClick={() => setShowAllergensModal(true)}
            title="Add New Allergens"
            className="mt-2"
          />
        </div>
        <div className="col-start-7 col-span-6">
          <div className="text-[22px] font-bold">Medical Conditions</div>
          <AllergiesAndConditionsCard title="Hypertension" />
          <AllergiesAndConditionsCard title="Osteoarthritis (OA)" />
          <Button
            fullWidth
            onClick={() => setShowConditionsModal(true)}
            title="Add New Condition"
            className="mt-2"
          />
        </div>
      </div>
      <Modal
        show={showAllergensModal}
        backdrop
        buttonTitle="Add Allergens"
        title="Add New Allergens"
        closeModal={() => setShowAllergensModal(false)}
        onClick={() => {}}
      >
        <div>
          <div className="relative w-full mt-4">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <FilterIcon />
            </span>
            <input
              className="py-2 block w-full h-10 bg-apollo-dark-white rounded pl-10 px-2 text-sm font-bold text-dark-gray"
              type="text"
              placeholder="Filter allergens..."
            />
          </div>
          <div className="mt-5">
            {data.map((item, i) => (
              <CheckBox key={i} label={item} />
            ))}
          </div>
        </div>
      </Modal>
      <Modal
        show={showConditionsModal}
        backdrop
        buttonTitle="Add Conditions"
        title="Add New Conditions"
        closeModal={() => setShowConditionsModal(false)}
        onClick={() => {}}
      >
        <div>
          <div className="relative w-full mt-4">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <FilterIcon />
            </span>
            <input
              className="py-2 block w-full h-10 bg-apollo-dark-white rounded pl-10 px-2 text-sm font-bold text-dark-gray"
              type="text"
              placeholder="Filter conditions..."
            />
          </div>
          <div className="mt-5">
            {data.map((item, i) => (
              <CheckBox key={i} label={item} />
            ))}
          </div>
        </div>
      </Modal>
    </Layout>
  );
};

export default AllergiesAndConditions;
