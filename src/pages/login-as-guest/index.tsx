import React, { useState } from "react";
import type { NextPage } from "next";
import Layout from "components/Layout";
import { UserIcon, EmailIcon, GuestIcon } from "components/SvgIcons";
import PhoneInput from "components/CustomPhoneInput";
import { Button } from "components/Button";

const LoginAsGuest: NextPage = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>();
  return (
    <Layout isLogin>
      <div className="hero container max-w-screen-lg mx-auto w-[564px] rounded-2xl mt-20 flex justify-start bg-apollo-white p-5 ">
        <div className="grid grid-cols-6">
          <div className="col-start-1 col-span-1">
            <GuestIcon />
          </div>
          <div className="col-start-2 col-span-5 pl-3">
            <div className="font-bold text-[17px]">
              Are you sure you want to be a guest?
            </div>
            <div className="text-[12px] mt-2 mb-3">
              If you sign up&sbquo; you will be eligible for special discounts
              and LAKUM points.
            </div>
            <Button title="Sign Up" />
          </div>
        </div>
      </div>
      <div className="hero container max-w-screen-lg mx-auto w-[564px] rounded-2xl mt-5 flex justify-start bg-apollo-white">
        <div className="p-5 mb-3">
          <h1 className="font-bold text-[20px] pb-2 pt-2">Continue as Guest</h1>
          <p className="text-[14px] pb-2">
            We will only use these information to notify you about your order
            and to verify that it&lsquo;s you.
          </p>
          <div className="form-group mb-6">
            <div className={`flex grid mt-3 grid-cols-2 gap-3`}>
              <div className="relative w-full">
                <PhoneInput
                  value={phoneNumber}
                  width
                  onChange={setPhoneNumber}
                />
              </div>
              <div className="relative w-full">
                <select className="py-2 block w-full h-10 bg-apollo-dark-white font-bold rounded pl-2 px-2 text-sm text-dark-gray">
                  <option selected>🇸🇦 Saudi Arabia</option>
                </select>
              </div>
              <div className="relative w-full">
                <span
                  className={`absolute inset-y-0 left-0 flex items-center pl-2`}
                >
                  <UserIcon />
                </span>
                <input
                  className="py-2 block w-full h-10 bg-apollo-dark-white rounded pl-10 px-2 text-sm font-bold text-dark-gray"
                  type="text"
                  placeholder="Your name"
                />
              </div>
              <div className="relative w-full">
                <span
                  className={`absolute inset-y-0 left-0 flex items-center pl-2`}
                >
                  <EmailIcon />
                </span>
                <input
                  className="py-2 block w-full h-10 bg-apollo-dark-white rounded pl-10 px-2 text-sm font-bold text-dark-gray"
                  type="text"
                  placeholder="Enter your email..."
                />
              </div>
            </div>
          </div>
          <Button title="Continue" />
        </div>
      </div>
    </Layout>
  );
};

export default LoginAsGuest;
