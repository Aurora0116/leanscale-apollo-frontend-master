import { Button } from "components/Button";
import { AddCartIcon, ShipIcon, ShopIcon } from "components/SvgIcons";
import { useState } from "react";
import CopyAddress from "./CopyAddress";
import MoreDetail from "./MoreDetail";

const CartSetting = () => {
  const [count, setCount] = useState(1);

  const changeCount = (num: number) => {
    if (count > 0 && num === -1) {
      setCount(count + num);
    } else if (num === 1) {
      setCount(count + num);
    }
  };

  return (
    <>
      <div className="my-4 flex items-center">
        <h1 className="text-dark-gray text-callout font-bold">SKU:</h1>
        <CopyAddress address={"6040010006"} />
      </div>
      <div className="flex justify-between items-center">
        <h2 className="text-dark-gray text-callout">Quantity</h2>
        <div className="flex items-center gap-2 grid-cols-3">
          <button
            className="rounded-l-lg bg-lightest-gray text-dark-gray text-title-3 font-bold px-3 py-1"
            onClick={() => changeCount(-1)}
          >
            -
          </button>
          <div className="text-title-3 text-dark-gray text-center inline-block align-middle">
            {count}
          </div>
          <button
            className="rounded-r-lg bg-lightest-gray text-dark-gray text-title-3 font-bold px-3 py-1"
            onClick={() => changeCount(1)}
          >
            +
          </button>
        </div>
      </div>
      <div className="flex gap-3 grid-cols-2 mb-8 items-center mt-2.5">
        <Button
          title="Add to Cart"
          icon={<AddCartIcon />}
          fullWidth
          color="primary"
          size="small"
        />
        <Button
          fullWidth
          title="Buy Now"
          color="white"
          size="small"
          variant="outline"
        />
      </div>
      <MoreDetail
        title={"If you order within /2h 19m/, it will be shipped tomorrow."}
        icon={<ShipIcon />}
      />
      <MoreDetail title={"Pickup available"} icon={<ShopIcon />} stores />
    </>
  );
};

export default CartSetting;
