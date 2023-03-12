import React from "react";
import type { NextPage } from "next";
import Layout from "components/Layout";
import ConnectHmgAccount from "components/ConnectHMGAccount";
import PhoneInput from "components/CustomPhoneInput";
import {
  EmailIcon,
  CallIcon,
  NotificationIcon,
  LangaugeIcon,
  DiscreteIcon,
  StatisticIcon,
  ToggleOffIcon,
  ToggleOnIcon,
  UserIcon,
  GenderIcon,
  CityIcon,
} from "components/SvgIcons";
import { Button } from "components/Button";

const AccountInformation: NextPage = () => {
  return (
    <Layout
      showSideBar
      sideBarTitle="Profile Settings"
      sideBarBreadcrumb="Account Settings"
    >
      <div className="grid grid-cols-1 mb-4">
        <ConnectHmgAccount className="w-full border-2 mt-0" />
      </div>
      <div className="grid grid-cols-12 gap-x-3 mb-3">
        <div className="col-start-1 col-span-6 border-2 rounded-2xl p-4">
          <div className="text-[22px] font-bold">Notification</div>
          <div className="grid grid-cols-12 mt-5">
            <div className="col-start-1 col-span-9">
              <div className="inline-flex text-[17px] font-bold">
                <NotificationIcon />
                <span className="ml-2">Push</span>
              </div>
            </div>
            <div className="col-start-10 col-span-3 text-right cursor-pointer">
              <ToggleOnIcon />
            </div>
          </div>
          <div className="grid grid-cols-12 mt-5">
            <div className="col-start-1 col-span-9">
              <div className="inline-flex text-[17px] font-bold">
                <CallIcon />
                <span className="ml-2">Call</span>
              </div>
            </div>
            <div className="col-start-10 col-span-3 text-right cursor-pointer">
              <ToggleOnIcon />
            </div>
          </div>
          <div className="grid grid-cols-12 mt-5">
            <div className="col-start-1 col-span-9">
              <div className="inline-flex text-[17px] font-bold">
                <EmailIcon />
                <span className="ml-2">Email</span>
              </div>
            </div>
            <div className="col-start-10 col-span-3 text-right cursor-pointer">
              <ToggleOnIcon />
            </div>
          </div>
        </div>
        <div className="col-start-7 col-span-6 border-2 rounded-2xl p-4">
          <div className="text-[22px] font-bold">Other Options</div>
          <div className="grid grid-cols-12 mt-5">
            <div className="col-start-1 col-span-9">
              <div className="inline-flex text-[17px] font-bold">
                <LangaugeIcon />
                <span className="ml-2">Change Language</span>
              </div>
            </div>
            <div className="col-start-10 col-span-3 text-right text-apollo-light-gray font-bold text-[17px] cursor-pointer">
              English
            </div>
          </div>
          <div className="grid grid-cols-12 mt-5">
            <div className="col-start-1 col-span-9">
              <div className="inline-flex text-[17px] font-bold">
                <DiscreteIcon />
                <span className="ml-2">Show Discreet Items</span>
              </div>
            </div>
            <div className="col-start-10 col-span-3 text-right text-apollo-light-gray font-bold text-[17px] cursor-pointer">
              <ToggleOnIcon />
            </div>
          </div>
          <div className="grid grid-cols-12 mt-5">
            <div className="col-start-1 col-span-9">
              <div className="inline-flex text-[17px] font-bold">
                <StatisticIcon />
                <span className="ml-2">Share Usage Statistics</span>
              </div>
            </div>
            <div className="col-start-10 col-span-3 text-right text-apollo-light-gray font-bold text-[17px] cursor-pointer">
              <ToggleOffIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="text-[22px] font-bold mt-4">My Information</div>
      <div className="form-group mb-6">
        <div className={`flex grid mt-3 grid-cols-2 gap-3`}>
          <div className="relative w-full mt-4">
            <PhoneInput
              value={"966234242342323"}
              fullWidth
              onChange={() => {}}
            />
          </div>
          <div className="relative w-full mt-4">
            <span
              className={`absolute inset-y-0 left-0 flex items-center pl-2`}
            >
              <UserIcon />
            </span>
            <input
              className="py-2 block w-full h-10 bg-apollo-dark-white rounded pl-10 px-2 text-sm font-bold text-dark-gray"
              type="text"
              value="Jamal Mansour"
              placeholder="Your name"
            />
          </div>
          <div className="relative w-full mt-4">
            <span
              className={`absolute inset-y-0 left-0 flex items-center pl-2`}
            >
              <EmailIcon />
            </span>
            <input
              className="py-2 block w-full h-10 bg-apollo-dark-white rounded pl-10 px-2 text-sm font-bold text-dark-gray"
              type="text"
              value="jamal.mansour@leanscale.com"
              placeholder="Enter your email..."
            />
          </div>
          <div className="relative w-full mt-4">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <GenderIcon />
            </span>
            <select className="py-2 block w-full h-10 bg-apollo-dark-white rounded pl-10 px-2 text-sm text-dark-gray">
              <option>Select your gender...</option>
              <option selected>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
          <div className="relative w-full mt-4">
            <select className="py-2 block w-full h-10 bg-apollo-dark-white font-bold rounded pl-2 px-2 text-sm text-dark-gray">
              <option selected>🇸🇦 Saudi Arabia</option>
            </select>
          </div>
          <div className="relative w-full mt-4">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <CityIcon />
            </span>
            <select className="py-2 block w-full h-10 bg-apollo-dark-white rounded pl-10 px-2 text-sm text-dark-gray">
              <option>Select city...</option>
              <option selected>Riyadh</option>
            </select>
          </div>
        </div>
      </div>
      <div className="mb-5">
        <Button className="opacity-50" disabled title="Save My Profile" />
      </div>
    </Layout>
  );
};

export default AccountInformation;
