import React, { useState } from "react";
import type { NextPage } from "next";
import Layout from "components/Layout";
import { UserIcon, EmailIcon, GenderIcon, CityIcon } from "components/SvgIcons";
import ConnectHmgAccount from "components/ConnectHMGAccount";
import PhoneInput from "components/CustomPhoneInput";
import CheckBoxCircle from "components/CheckBoxCircle";
import CustomSelectInput from "components/CustomSelectInput";
import { Button } from "components/Button";

const Signup: NextPage = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>();
  return (
    <Layout showFooter={false} className="pb-20" isLogin>
      <div className="hero container max-w-screen-lg mx-auto w-[564px] rounded-2xl mt-20 flex justify-start bg-apollo-white">
        <div className="pl-5 mb-3">
          <h1 className="font-bold text-[20px] pb-2 pt-2">
            Signup with your phone number
          </h1>
          <div className="form-group mb-6">
            <div className={`flex grid mt-3 grid-cols-2 gap-3`}>
              <div className="relative w-full">
                {/* <input
                  className={`w-[255px] py-2 block h-10 bg-apollo-dark-white rounded pl-10 px-2 text-sm font-bold text-gray-700`}
                  type="text"
                  placeholder="Phone Number"
                /> */}
                <PhoneInput
                  value={phoneNumber}
                  width
                  onChange={setPhoneNumber}
                />
              </div>
              <div className="relative w-full">
                <span
                  className={`absolute inset-y-0 left-0 flex items-center pl-2`}
                >
                  <UserIcon />
                </span>
                <input
                  className="py-2 block placeholder-light-gray w-full h-10 bg-apollo-dark-white rounded pl-10 px-2 text-sm font-bold text-dark-gray"
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
                  className="py-2 block placeholder-light-gray w-full h-10 bg-apollo-dark-white rounded pl-10 px-2 text-sm font-bold text-dark-gray"
                  type="text"
                  placeholder="Enter your email..."
                />
              </div>
              <CustomSelectInput
                defaultOption="Select your gender..."
                options={[
                  { label: "Male", value: "male", key: 1 },
                  { label: "Female", value: "female", key: 2 },
                ]}
                icon={<GenderIcon />}
              />
              <CustomSelectInput
                defaultOption="Saudi Arabia"
                options={[]}
                icon={"🇸🇦"}
              />
              <CustomSelectInput
                defaultOption="Select city..."
                options={[]}
                icon={<CityIcon />}
              />
            </div>
          </div>
          <div className="form-group form-check mb-4 w-[520px]">
            <CheckBoxCircle
              checked
              width="18px"
              height="18px"
              label={
                <span className="text-[14px] font-bold">
                  I read and accept to HMG Group&lsquo;s{" "}
                  <span className="text-apollo-primary cursor-pointer">
                    Terms and Conditions
                  </span>{" "}
                  and{" "}
                  <span className="text-apollo-primary cursor-pointer">
                    Privacy Policy
                  </span>
                </span>
              }
            />
          </div>
          <div className="form-group form-check mb-6 w-[520px]">
            <CheckBoxCircle
              width="18px"
              height="18px"
              checked
              label={
                <span className="text-[14px] font-bold">
                  I agree to the{" "}
                  <span className="text-apollo-primary cursor-pointer">
                    Terms and Condition
                  </span>{" "}
                  of &lsquo;LAKUM&rsquo; program
                </span>
              }
            />
          </div>
          <Button title="Signup" />
        </div>
      </div>
      <ConnectHmgAccount className="w-[564px]" />
    </Layout>
  );
};

export default Signup;
