import Image from "next/image";
import Link from "next/link";
import RatingStars from "./RatingStars";
import { ArFlagIcon, EnFlgaIcon } from "./SvgIcons";

export const ProductItemDiscountRibbon = (props: {
  percent?: number;
  discountPrice?: number;
}) => {
  const { percent, discountPrice } = props;
  return (
    <div className="rounded bg-secondary p-1 w-[30px] text-caption-2 text-white text-center mr-2">
      {percent && `${percent * 100}% Off`}
    </div>
  );
};

export const LanguageItem = (props: { country: string }) => {
  const { country } = props;
  let flag: any;
  switch (country) {
    case "en":
      flag = <EnFlgaIcon />;
      break;
    case "ar":
      flag = <ArFlagIcon />;
    default:
      break;
  }
  return (
    <div className="flex items-center mr-[14.5px]">
      {flag}
      <span className="text-callout text-dark-gray ml-1">
        {country.toUpperCase()}
      </span>
    </div>
  );
};

export const TopHeader = () => {
  return (
    <div className="bg-white py-2 border-b-2 border-lightest-gray">
      <div className="container mx-auto">
        <div className="flex items-center">
          <LanguageItem country="en" />
          <LanguageItem country="ar" />
        </div>
      </div>
    </div>
  );
};

export const CategoryItem = (props: {
  image: string;
  title: string;
  permilink: string;
  className?: string;
}) => {
  const { image, title, permilink, className } = props;

  return (
    <Link href={permilink}>
      <a className={`flex w-[93px] items-center justify-center ${className}`}>
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 rounded-full overflow-hidden drop-shadow-item">
            <Image
              src={image}
              alt={title}
              width={80}
              height={80}
              objectFit="cover"
            />
          </div>
          <h5 className="text-caption-1 text-[#0e0e0e] mt-[11px] whitespace-nowrap">
            {title}
          </h5>
        </div>
      </a>
    </Link>
  );
};

export const GradientBox = (props: {
  title: string;
  image: string;
  className?: string;
}) => {
  return (
    <div
      className={`rounded-lg overflow-hidden w-[378px] relative ${props.className}`}
    >
      {/* eslint-disable-next-line */}
      <img src={props.image} alt="" className="h-full relative z-10" />
      <h4 className="text-[#024469] text-title-3 font-bold absolute px-[18px] py-4 z-30 bottom-0">
        {props.title}
      </h4>
      <span className="absolute w-full h-1/2 gradient-1 z-20 bottom-0"></span>
    </div>
  );
};

export const SubTitle = (props: { children?: any }) => {
  return (
    <h1 className="text-title-1 text-dark-gray font-semibold pt-4 pb-2 px-4">
      {props.children && props.children}
    </h1>
  );
};

export const CategoryButton = (props: {
  children: any;
  id?: string;
  isOffer?: boolean;
  onClick?: Function;
  className?: string;
}) => {
  const { id, children, isOffer, onClick, className } = props;
  return (
    <button
      className={`${
        id === "offers"
          ? "bg-secondary text-white"
          : "bg-[#f7f7f8] text-gray-900"
      } rounded-lg text-subhead py-2 px-3 ${className} font-bold`}
    >
      {children}
    </button>
  );
};

export const StarsWithText = (props: { rating: number; title: string }) => {
  return (
    <div className="flex items-center">
      <span className="mr-2">{props.title}</span>
      <RatingStars rating={props.rating} />
    </div>
  );
};
