import { Button } from "./Button";
import RatingStars from "./RatingStars";
import {
  AddCartIcon,
  PlusCartItemIcon,
  MinusCartItemIcon,
  PrescriptionIcon,
  PrescriptionIconTwo,
} from "components/SvgIcons";
import { ProductItemDiscountRibbon } from "./Widget";

export default function ProductItem(props: {
  title?: string;
  rating?: number;
  discount?: {
    percent?: number;
    price?: number;
  };
  image?: string;
  price?: {
    raw: number;
    symbol: string;
    formart_with_symbol: string;
  };
  cartAble?: boolean;
  cartAbleWithPlusMinus?: boolean;
  prescriptionNeeded?: boolean;
  horizontal?: boolean;
  className?: string;
  outOfStock?: boolean;
  prescriptionItem?: boolean;
}) {
  const {
    title,
    rating,
    discount,
    image,
    price,
    cartAble,
    cartAbleWithPlusMinus,
    prescriptionNeeded,
    className,
    horizontal,
    outOfStock,
    prescriptionItem,
  } = props;
  return horizontal ? (
    <HorizontalItem
      title={title}
      rating={rating}
      discount={discount}
      image={image}
      price={price}
      cartAble={cartAble}
      cartAbleWithPlusMinus={cartAbleWithPlusMinus}
      prescriptionNeeded={prescriptionNeeded}
      outOfStock={outOfStock}
      className={className}
      prescriptionItem={prescriptionItem}
    />
  ) : (
    <VerticalItem
      title={title}
      rating={rating}
      discount={discount}
      image={image}
      price={price}
      cartAble={cartAble}
      prescriptionNeeded={prescriptionNeeded}
      outOfStock={outOfStock}
      className={className}
      prescriptionItem={prescriptionItem}
    />
  );
}

const VerticalItem = (props: {
  title?: string;
  rating?: number;
  discount?: {
    percent?: number;
    price?: number;
  };
  image?: string;
  price?: {
    raw: number;
    symbol: string;
    formart_with_symbol: string;
  };
  cartAble?: boolean;
  prescriptionNeeded?: boolean;
  horizontal?: boolean;
  className?: string;
  prescriptionItem?: boolean;
  outOfStock?: boolean;
}) => {
  const {
    title,
    rating,
    discount,
    image,
    price,
    cartAble,
    prescriptionNeeded,
    className = "",
    prescriptionItem,
  } = props;
  return (
    <div className={`max-w-[180px] p-2 bg-white rounded-r ${className}`}>
      <div className="rounded-lg">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          className="w-full h-[120px] object-cover rounded-lg border-[#ececec] border-[1px]"
          alt=""
        />
      </div>
      <h5
        className={`text-footnote my-[9px] text-gray-900 font-semibold ${
          rating ? "mb-0" : ""
        }`}
      >
        {title}
      </h5>
      {rating && <RatingStars rating={rating} />}
      {!prescriptionItem && (
        <div className="flex items-center">
          {(discount?.percent || discount?.price) && (
            <ProductItemDiscountRibbon percent={discount?.percent} />
          )}
          <div>
            <h5 className="text-headline font-bold text-dark-gray">
              {price?.formart_with_symbol}
            </h5>
            {(discount?.percent || discount?.price) && price && (
              <p className="text-caption-1 line-through text-light-gray  font-bold">
                {discount.percent &&
                  `${price.symbol} ${
                    price.raw - discount.percent * price?.raw
                  }`}
              </p>
            )}
          </div>
        </div>
      )}
      {prescriptionItem && (
        <div className="flex items-center">
          <div className="rounded bg-[#0396E8] p-1 w-8 text-caption-2 text-white text-center mr-2">
            <PrescriptionIconTwo />
          </div>
          <div>
            <h5 className="text-headline font-bold text-[#0396E8]">
              SAR 15.00
            </h5>
            <p className="text-caption-1 line-through text-light-gray font-bold">
              SAR 10.5
            </p>
          </div>
        </div>
      )}
      {props.outOfStock && (
        <p className="text-caption-1 text-warning font-bold mt-[1px]">
          Out of Stock
        </p>
      )}
      {prescriptionItem && (
        <Button
          title="See Prescription"
          icon={<PrescriptionIconTwo />}
          fullWidth
          className="mt-2.5 bg-[#0396E8] border-[#0396E8]"
          size="small"
        />
      )}
      {cartAble && !prescriptionItem && (
        <Button
          title="Add to Cart"
          icon={<AddCartIcon />}
          fullWidth
          className="mt-2.5"
          size="small"
        />
      )}
      {prescriptionNeeded && (
        <h5 className="text-warning font-bold text-caption-1 mt-[1px]">
          Prescription needed
        </h5>
      )}
    </div>
  );
};

const HorizontalItem = (props: {
  title?: string;
  rating?: number;
  discount?: {
    percent?: number;
    price?: number;
  };
  image?: string;
  price?: {
    raw: number;
    symbol: string;
    formart_with_symbol: string;
  };
  cartAble?: boolean;
  cartAbleWithPlusMinus?: boolean;
  prescriptionNeeded?: boolean;
  horizontal?: boolean;
  outOfStock?: boolean;
  prescriptionItem?: boolean;
  className?: string;
}) => {
  const {
    title,
    rating,
    discount,
    image,
    price,
    cartAble,
    cartAbleWithPlusMinus,
    prescriptionNeeded,
    prescriptionItem,
    className,
  } = props;
  return (
    <div className={`max-w-[33%] p-2 bg-white rounded-r flex ${className}`}>
      <div className="rounded-lg mr-2.5">
        {/* eslint-disalbe-next-line */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          className="w-[120px] h-[100px] object-cover rounded-lg border-[#ececec] border-[1px]"
          alt=""
        />
      </div>
      <div className="w-[calc(100%-130px)]">
        <h5
          className={`text-footnote my-2.5 text-gray-900 ${
            rating ? "mb-0" : ""
          }`}
        >
          {title}
        </h5>
        {rating && <RatingStars rating={rating} />}
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div>
              <h5 className="text-headline font-bold text-dark-gray">
                {price?.formart_with_symbol}
              </h5>
              {(discount?.percent || discount?.price) && price && (
                <p className="text-caption-1 line-through text-light-gray">
                  {discount.percent &&
                    `${price.symbol} ${
                      price.raw - discount.percent * price?.raw
                    }`}
                </p>
              )}
            </div>
          </div>
          {cartAble && (
            <button className="inline-flex border-2 items-center apollo-button rounded-lg disabled:opacity-40 disabled:pointer-events-none justify-center border-primary bg-primary hover:border-secondary hover:bg-secondary w-10 h-10 icon-buttom">
              <AddCartIcon />
            </button>
          )}
          {cartAbleWithPlusMinus && (
            <span className="inline-flex items-center rounded-lg justify-center bg-none">
              <span className="cursor-pointer">
                <MinusCartItemIcon />
              </span>
              <span className="pl-3 pr-3 text-[20px]">1</span>
              <span className="cursor-pointer">
                <PlusCartItemIcon />
              </span>
            </span>
          )}
        </div>
        {prescriptionNeeded && (
          <h5 className="text-warning font-bold text-caption-1 mt-2.5">
            Prescription needed
          </h5>
        )}
      </div>
    </div>
  );
};
