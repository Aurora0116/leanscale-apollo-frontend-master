import { CheckIcon } from "components/SvgIcons";
import Image from "next/image";

const IdCard = () => {
  return (
    <div className="m-2 rounded-lg p-4 shadow-default bg-card-gradient relative">
      <div className="absolute bottom-0 right-0">
        <CheckIcon />
      </div>
      <div className="flex">
        <Image
          className="rounded-full"
          src={"/image/categories/c-4.png"}
          width={72}
          height={72}
          objectFit="cover"
          alt=""
        />
        <div className="ml-[11px]">
          <h2 className="text-mobile-body text-white mb-2">
            This supplement is approved by
          </h2>
          <h1 className="text-white text-headline-3">Dr. Hussein Doe</h1>
          <h2 className="text-white text-mobile-body">Gastroenterologist</h2>
        </div>
      </div>
    </div>
  );
};

export default IdCard;
