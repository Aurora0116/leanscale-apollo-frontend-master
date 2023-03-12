import { InfoIcon } from "components/SvgIcons";

const Ask = () => {
  return (
    <div className="m-2 flex p-4 bg-white rounded-lg shadow-default items-center">
      <InfoIcon />
      <div className="pl-4">
        <h1 className="text-dark-gray text-callout mb-3">
          Need help about this item?
        </h1>
        <button className="bg-primary text-caption-1 text-white rounded-lg px-[15px] py-[6px]">
          Ask a Pharmacist
        </button>
      </div>
    </div>
  );
};

export default Ask;
