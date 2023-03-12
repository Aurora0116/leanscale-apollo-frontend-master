import PickUpMap from "components/PickupMap";
import { useState } from "react";

const MoreDetail = ({
  title,
  icon,
  stores,
}: {
  title: string;
  icon?: any;
  stores?: boolean;
}) => {
  const titleArray = title.split("/");
  const drawTitle = () => {
    for (let i = 0; i < titleArray.length; i++) {
      if (i == 1) {
        return (
          <h1 className="text-caption-1 text-[#00A024] font-bold pl-4">
            {titleArray[i]}
          </h1>
        );
      } else {
        return (
          <h1 className="text-caption-1 text-dark-gray font-bold pl-4">
            {titleArray[i]}
          </h1>
        );
      }
    }
  };

  const [isMap, setIsMap] = useState(false);

  return (
    <>
      <div
        className="w-full p-4 flex items-center border-2 border-solid border-lightest-gray rounded-lg shadow-default-shadow my-2 justify-between"
        onClick={() => setIsMap(true)}
      >
        <div className="flex items-center">
          {icon ? icon : <></>}
          {titleArray.length > 1 ? (
            <h1 className="text-caption-1 text-dark-gray font-bold pl-4">
              {titleArray[0]}{" "}
              <a className="text-caption-1 text-[#00A024] font-bold">
                {titleArray[1]}
              </a>
              {titleArray[2]}
            </h1>
          ) : (
            <h1 className="text-caption-1 text-dark-gray font-bold pl-4">
              {title}
            </h1>
          )}
        </div>
        {stores ? (
          <h2 className="text-caption-1 text-[#00A024] font-bold">
            Check Stores {">"}
          </h2>
        ) : (
          <></>
        )}
      </div>
      <PickUpMap isOpen={isMap} onClose={() => setIsMap(false)} />
    </>
  );
};

export default MoreDetail;
