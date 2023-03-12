import { ProductItemDiscountRibbon } from "components/Widget";
import RatingStars from "../../components/RatingStars";
import EarnCut from "./EarnCut";

const GSK = ({
  title,
  pcs,
  weight,
  exDeta,
  symbol,
  percent,
  price,
}: {
  title: string;
  pcs: number;
  weight: string;
  exDeta: string;
  symbol: string;
  percent: number;
  price: number;
}) => {
  return (
    <div className="border-sol border-b-2 border-lightest-gray">
      <h1 className="text-secondary font-bold text-callout mb-1">GSK</h1>
      <h2 className="text-gray text-title-2 mb-4">{title}</h2>
      <div className="flex justify-between mb-4">
        <div className="text-dark-gray text-caption-1">
          <h3>
            {symbol} {pcs}/pcs
          </h3>
          <h3>Weight: {weight}</h3>
          <h3>Expiration Date: {exDeta}</h3>
        </div>
        <div className="flex flex-col text-right">
          <RatingStars rating={4.6} />
          <h3 className="text-dark-gray text-caption-1">(4.6 - 5 Review)</h3>
        </div>
      </div>
      <div className="flex justify-between pb-4">
        <div className="flex">
          <ProductItemDiscountRibbon percent={percent} />
          <div>
            <h5 className="text-headline font-bold text-dark-gray">
              {symbol} {price}.00
            </h5>
            <p className="text-caption-1 line-through text-light-gray">
              {symbol} {price}.00
            </p>
          </div>
        </div>
        <EarnCut symbol={"SAR"} price={0.4} />
      </div>
    </div>
  );
};

export default GSK;
