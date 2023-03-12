import React from "react";
interface PageProps {
  data?: { id: number; title: string; status: boolean }[];
}
const Steps = ({ data }: PageProps) => {
  const steps = data
    ? data
    : [
        { id: 1, title: "Delivery", status: true },
        { id: 2, title: "Payment", status: false },
      ];
  return (
    <div className="mb-5">
      <div className={`grid grid-cols-${steps.length}`}>
        {steps.map((item, i) => (
          <div
            key={item.id}
            className={`col-start-${
              i + 1
            } col-span-1 text-[14px] font-bold text-center ${
              item.status ? "text-dark-gray" : "text-light-gray"
            }`}
          >
            {item.title}
          </div>
        ))}
      </div>
      <div className="flex">
        {steps.map((item, i) => (
          <React.Fragment key={i}>
            <div
              style={{
                width: `${steps.length * 16}px`,
              }}
              className={`${
                item.status ? "bg-apollo-primary" : "bg-light-gray"
              } rounded-full ml-[-2px] h-[16px]`}
            ></div>
            <div
              className={`h-[10px] ${
                item.status ? "bg-apollo-primary" : "bg-light-gray"
              } w-[100%] ml-[-2px] mt-[3px]`}
            ></div>
          </React.Fragment>
        ))}
        <div
          style={{
            width: `${steps.length * 16}px`,
          }}
          className="h-[16px] bg-light-gray rounded-full ml-[-2px]"
        ></div>
      </div>
    </div>
  );
};

export default Steps;
