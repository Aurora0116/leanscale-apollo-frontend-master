import { BellIcon, RxIcon } from "components/SvgIcons";

export function NotifyMe() {
  return (
    <div className="border-2 border-warning rounded-lg inline-flex gap-2 items-center justify-center px-4 py-[10.5px]">
      <BellIcon />
      <span className="text-warning font-bold text-subhead">
        Notify me when it&#39;s in stock
      </span>
    </div>
  );
}

export const RxNotify = () => {
  return (
    <div className="border-2 border-lightest-gray rounded-lg inline-flex gap-2 items-center justify-center px-4 py-[10.5px]">
      <RxIcon />
      <span className="text-warning font-bold text-subhead">
        A presciption is rquired for this product.
      </span>
    </div>
  );
};

export const RxFullNotify = () => {
  return (
    <div className="border-2 border-lightest-gray rounded-lg inline-flex gap-2 items-center px-4 py-[10.5px] bg-warning w-full">
      <RxIcon color="#fff" />
      <span className="text-white text-subhead">
        This item is in your prescription. You can view your prescription and
        place an order.
      </span>
    </div>
  );
};
