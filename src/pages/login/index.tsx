import React, { useState } from "react";
import type { NextPage } from "next";
import Layout from "components/Layout";
import Link from "next/link";
import { UserIcon, NationalityIcon, OTPIcon } from "components/SvgIcons";
import PhoneInput from "components/CustomPhoneInput";
import { Button } from "components/Button";

const Login: NextPage = () => {
  const [otp, setOTP] = useState<number>();
  const [error, setError] = useState<boolean>(false);
  const [phoneNumber, setPhoneNumber] = useState<string>();
  return (
    <Layout isLogin>
      <div className="hero container max-w-screen-lg mx-auto w-[564px] rounded-2xl mt-20 flex justify-start bg-apollo-white">
        <div className="pl-5 mb-3">
          <h1 className="font-bold text-[20px] pb-2 pt-2">
            Login with HMG Account
          </h1>
          {otp && (
            <>
              <p className="text-[16px] pb-2">
                To continue, enter the 6-digit code we sent to your phone
                <br />
                number +966 56 608 3167.
              </p>
              <p className="text-[14px] text-apollo-primary pb-2 cursor-pointer">
                Send code again
              </p>
            </>
          )}
          <p className="text-[10px] mb-2">Choose Login Type</p>
          {/*  Form start */}
          <div className="form-group mb-6">
            <div className="flex grid grid-cols-2 gap-3">
              <div className="relative w-full">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <NationalityIcon />
                </span>
                <select
                  defaultValue="National ID"
                  className="py-2 block w-full placeholder-light-gray h-10 bg-apollo-dark-white rounded pl-10 px-2 text-sm font-bold text-dark-gray"
                >
                  <option>National ID</option>
                </select>
              </div>
              <div className="relative w-full">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <UserIcon />
                </span>
                <input
                  className="py-2 block w-full placeholder-light-gray h-10 bg-apollo-dark-white rounded pl-10 px-2 text-sm font-bold text-dark-gray"
                  type="text"
                  placeholder="Your National ID"
                />
              </div>
            </div>
            <div
              className={`flex grid mt-3 ${
                otp ? "grid-cols-2 gap-3" : "grid-cols-1"
              }`}
            >
              <div className="relative w-full">
                {/* <input
                  className={`${
                    otp ? "w-[255px]" : "w-[520px]"
                  } py-2 block h-10 bg-apollo-dark-white rounded pl-10 px-2 text-sm font-bold text-gray-700`}
                  type="text"
                  placeholder="Phone Number"
                /> */}
                <PhoneInput
                  otp={otp}
                  value={phoneNumber}
                  onChange={setPhoneNumber}
                />
              </div>
              {otp && (
                <div className="relative w-full">
                  <span
                    className={`${
                      error ? "mb-5" : ""
                    } absolute inset-y-0 left-0 flex items-center pl-2`}
                  >
                    <OTPIcon color={error ? "#E81103" : "#AAAAAA"} />
                  </span>
                  <input
                    className={`${
                      error ? "border border-apollo-error" : ""
                    } py-2 block w-full h-10 placeholder-light-gray bg-apollo-dark-white rounded pl-10 px-2 text-sm font-bold text-dark-gray`}
                    type="text"
                    placeholder="Enter 6-digit code"
                  />
                  {error && (
                    <small className="block mt-1 ml-1 text-xs text-[10px] text-apollo-error">
                      Verification code is incorrect.
                    </small>
                  )}
                </div>
              )}
            </div>
          </div>
          <Button
            onClick={() => (otp ? setError(true) : setOTP(1234))}
            title={otp ? "Login" : "Continue"}
          />
          {/* Form end */}
        </div>
      </div>
      <p className="text-[14px] text-apollo-primary pt-6 text-center cursor-pointer">
        <Link href="/login-with-number">Continue with your phone</Link>
      </p>
    </Layout>
  );
};

export default Login;
