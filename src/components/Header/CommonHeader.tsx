import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { CartIcon, UserIcon, SearchIcon } from "components/SvgIcons";
import Navigation from "components/Navigation";

const CommonHeader = ({ subHeader }: { subHeader: boolean }) => {
  return (
    <div className="">
      <Head>
        <title>Apollo</title>
        <meta name="description" content="Next.js+TS Tailwind" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="full-width">
        <div className="grid grid-cols-24 pt-2 pb-1">
          <div className="col-start-3 col-span-4 text-[14px]">
            <span className="cursor-pointer">
              <Image
                src="/static/images/en.png"
                alt="EN"
                width="24px"
                height="18px"
              />
              <span className="ml-1 align-[3px]">EN</span>
            </span>
            <span className="cursor-pointer ml-5">
              <Image
                src="/static/images/ar.png"
                alt="AR"
                width="24px"
                height="18px"
              />
              <span className="ml-1 align-[3px]">AR</span>
            </span>
          </div>
        </div>
        <div
          className={`bg-apollo-white h-[106px] border-t-2 border-grey grid grid-cols-24 items-center ${
            subHeader ? "" : "border-b-2"
          }`}
        >
          <div className="col-start-3 col-span-6">
            <button
              type="button"
              className="inline-flex items-center text-sm px-3 py-1 text-center mr-2 mb-2 bg-apollo-primary text-white font-medium leading-tight rounded transition duration-150 ease-in-out"
            >
              <CartIcon />
              <div className="text-[12px] ml-1">2</div>
            </button>
            <button
              type="button"
              className="inline-flex items-center text-sm px-1 py-1 text-center bg-none font-medium leading-tight rounded transition duration-150 ease-in-out"
            >
              <UserIcon color="#595959" />
              <div className="text-[12px] ml-1">My Account</div>
            </button>
          </div>
          <div className="col-start-9 col-span-5">
            <div className="relative w-full">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <SearchIcon />
              </span>
              <input
                className="
                    py-2 block w-full h-10 bg-apollo-dark-white rounded pl-10
                    px-2 text-sm font-bold text-gray-700
                    "
                type="text"
                placeholder="Search any product..."
              />
            </div>
          </div>
          <div className="col-start-14 col-span-4"></div>
          <div className="col-start-21 col-span-5 text-right">
            <Image
              src="/static/images/logo@text.svg"
              alt="AR"
              width="272px"
              height="64px"
            />
          </div>
        </div>
        {subHeader && (
          <div className="bg-apollo-linear-gradient h-[43px] text-[14px] text-white border-t-2 border-grey grid grid-cols-24 items-center">
            <div className="col-start-3 col-span-12">
              <Navigation />
            </div>
            <div className="col-start-15 col-span-3"></div>
            <div className="col-start-18 col-span-5 text-right">
              <span className="cursor-pointer">Winter Deals</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommonHeader;
