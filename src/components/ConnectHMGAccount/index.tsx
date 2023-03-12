import React from "react";
import Link from "next/link";
import Image from "next/image";
interface PageProps {
  className?: string;
}
const ConnectHmgAccount = ({ className = "" }: PageProps) => {
  return (
    <div
      className={`hero container max-w-screen-lg mx-auto ${className} border border-[#ECECEC] rounded-2xl mt-10 flex justify-start bg-apollo-white`}
    >
      <div className="pl-5 pr-5 mb-3">
        <h1 className="font-bold text-[18px] pb-2 pt-2">
          Connect with HMG Account
        </h1>
        <p className="text-[14px] pb-2">
          Connect your HMG account, your prescriptions will automatically appear
          on your profile and the cost of your medicines will be automatically
          deducted from your insurance.
        </p>
        <Link href="/login">
          <button
            type="button"
            className="inline-flex text-[#CE0041] bg-none border border-[#CE0041] rounded text-sm px-3 py-2 text-center mr-2 mb-2"
          >
            <Image
              src="/static/images/hmg-group1.png"
              alt="HMG-group"
              width="22px"
              height="22px"
            />
            <div className="text-[14px] ml-1">Login with HMG Account</div>
          </button>
        </Link>
      </div>
    </div>
  );
};
export default ConnectHmgAccount;
