import type { NextPage } from "next";

const Footer: NextPage = () => {
  return (
    <div className="w-full grid grid-cols-24 mt-5 left-0 fixed bottom-0 pb-3 pt-3 border-t-2 border-grey text-apollo-light-gray">
      <div className="col-start-3 col-span-12 text-[12px]">
        VAT Registration No. 300094611410003 - CR No. 1010252818
      </div>
      <div className="col-start-15 col-span-3 text-[12px] text-right"></div>
      <div className="col-start-21 col-span-5 text-[12px] text-right">
        Copyright © HMG Group. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
