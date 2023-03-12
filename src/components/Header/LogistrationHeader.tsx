import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Header: NextPage = () => {
  return (
    <div>
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
        <div className="bg-apollo-white h-[106px] border-t-2 border-grey">
          <div className="hero container max-w-screen-lg mx-auto pt-5 flex justify-center">
            <Image
              src="/static/images/logo@text.svg"
              alt="AR"
              width="272px"
              height="64px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
