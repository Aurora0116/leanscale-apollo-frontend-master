import React from "react";
import {
  TrashIcon,
  OneLinkCardIcon,
  MasterCardIcon,
  VisaCardIcon,
} from "components/SvgIcons";
interface PageProps {
  cardNumber: string;
  expiryDate: string;
  cardType: string;
}
const PaymentCard = ({ cardNumber, cardType, expiryDate }: PageProps) => {
  const Icon =
    cardType === "masterCard"
      ? MasterCardIcon
      : cardType === "visaCard"
      ? VisaCardIcon
      : OneLinkCardIcon;
  return (
    <div className="col-span-4 border-2 rounded p-3 mt-2">
      <div className="grid grid-cols-12">
        <div className="col-span-12 text-right cursor-pointer">
          <TrashIcon />
        </div>
        <div className="col-span-12 text-[17px] pt-4">{cardNumber}</div>
        <div className="col-span-12 pt-6">
          <div className="grid grid-cols-12">
            <div className="col-span-6 text-[14px] font-bold">{expiryDate}</div>
            <div className="col-span-6 text-right">
              <Icon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentCard;
