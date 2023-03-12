import type { NextPage } from "next";
import Image from "next/image";
import {
  WhatsAppIcon,
  PhoneCallIcon,
  EmailFilledIcon,
  FacebookIcon,
  TwitterIcon,
  SnapchatIcon,
  YoutubeIcon,
  LinkedInIcon,
  InstagramIcon,
} from "components/SvgIcons";

const FooterForHome: NextPage = () => {
  return (
    <>
      <div className="grid grid-cols-24 bg-white">
        <div className="col-start-3 col-span-5 text-center">
          <Image
            src="/static/images/image12.png"
            alt="logo image"
            width="246px"
            height="56px"
          />
        </div>
        <div className="col-start-8 col-span-5 text-center">
          <Image
            src="/static/images/image13.png"
            alt="logo image"
            width="246px"
            height="56px"
          />
        </div>
        <div className="col-start-13 col-span-5 text-center">
          <Image
            src="/static/images/image14.png"
            alt="logo image"
            width="246px"
            height="56px"
          />
        </div>
        <div className="col-start-21 col-span-5 text-center">
          <Image
            src="/static/images/image15.png"
            alt="logo image"
            width="246px"
            height="56px"
          />
        </div>
      </div>
      <div className="w-full grid grid-cols-24 left-0 bottom-0 mb-2 pt-3 mt-5">
        <div className="col-start-3 col-span-5">
          <div className=" text-[17px] font-bold">Information</div>
          <div className=" text-[14px] mt-4">Lakum Terms and Conditions</div>
          <div className=" text-[14px] mt-4">Website Terms of Use</div>
          <div className=" text-[14px] mt-4">Who We Are</div>
          <div className=" text-[14px] mt-4">Our Locations</div>
        </div>
        <div className="col-start-8 col-span-5 text-[12px]">
          <div className=" text-[17px] font-bold">My Account</div>
          <div className=" text-[14px] mt-4">My Wishlist</div>
          <div className=" text-[14px] mt-4">Orders</div>
          <div className=" text-[14px] mt-4">Prescriptions</div>
          <div className=" text-[14px] mt-4">Refunds & Returns</div>
          <div className=" text-[14px] mt-4">Profile Settings</div>
        </div>
        <div className="col-start-13 col-span-5 text-[12px]">
          <div className=" text-[17px] font-bold">Contact Us</div>
          <div className=" text-[14px] mt-4">
            <button
              type="button"
              className="inline-flex items-center text-sm text-center bg-none font-medium leading-tight rounded transition duration-150 ease-in-out"
            >
              <WhatsAppIcon />
              <div className="text-[12px] ml-1">Chat from WhatsApp</div>
            </button>
          </div>
          <div className=" text-[14px] mt-4">
            <button
              type="button"
              className="inline-flex items-center text-sm text-center bg-none font-medium leading-tight rounded transition duration-150 ease-in-out"
            >
              <PhoneCallIcon />
              <div className="text-[12px] ml-1">Call us</div>
            </button>
          </div>
          <div className=" text-[14px] mt-4">
            <button
              type="button"
              className="inline-flex items-center text-sm text-center bg-none font-medium leading-tight rounded transition duration-150 ease-in-out"
            >
              <EmailFilledIcon />
              <div className="text-[12px] ml-1">Send an email</div>
            </button>
          </div>
        </div>
        <div className="col-start-21 col-span-5 text-[12px] text-right">
          <div className="mb-10">
            <Image
              src="/static/images/logo@text.svg"
              alt="AR"
              width="272px"
              height="64px"
            />
          </div>
          <div className="inline-flex mt-20">
            <span className="ml-3 cursor-pointer">
              <FacebookIcon />
            </span>
            <span className="ml-3 cursor-pointer">
              <TwitterIcon />
            </span>
            <span className="ml-3 cursor-pointer">
              <SnapchatIcon />
            </span>
            <span className="ml-3 cursor-pointer">
              <YoutubeIcon />
            </span>
            <span className="ml-3 cursor-pointer">
              <LinkedInIcon />
            </span>
            <span className="ml-3 cursor-pointer">
              <InstagramIcon />
            </span>
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-24 mt-5 left-0 bottom-0 pb-3 pt-3 border-t-2 border-grey text-apollo-light-gray">
        <div className="col-start-3 col-span-12 text-[12px]">
          VAT Registration No. 300094611410003 - CR No. 1010252818
        </div>
        <div className="col-start-15 col-span-3 text-[12px] text-right"></div>
        <div className="col-start-21 col-span-5 text-[12px] text-right">
          Copyright © HMG Group. All rights reserved.
        </div>
      </div>
    </>
  );
};

export default FooterForHome;
