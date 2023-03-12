import OptionButton from "./OptionButton";

const BuyingOption = () => {
  return (
    <div className="pt-4 border-solid border-b-2 border-lightest-gray">
      <h1 className="text-dark-gray text-callout">Buying Options</h1>
      <div className="flow-root">
        <OptionButton title={"Once"} act={false} />
        <OptionButton title={"Tell Me"} act={true} />
        <OptionButton title={"Tell Me"} act={false} />
        <OptionButton title={"Tell Me"} act={false} />
        <OptionButton title={"Tell Me"} act={false} />
        <OptionButton title={"Tell Me"} act={false} />
        <OptionButton title={"Tell Me"} act={false} />
      </div>
      <h1 className="text-dark-gray text-callout font-bold mt-2">
        Product Options
      </h1>
      <div className="flow-root mb-4">
        <OptionButton title={"7mg/24h"} act={false} />
        <OptionButton title={"14mg/24h"} act={true} />
        <OptionButton title={"21mg/24h"} act={false} />
      </div>
    </div>
  );
};

export default BuyingOption;
