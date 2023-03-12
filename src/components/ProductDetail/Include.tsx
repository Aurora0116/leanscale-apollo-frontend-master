import Image from "next/image";

const Include = () => {
  return (
    <div className="m-2 my-4 rounded-lg border-solid border-2 border-error shadow-default p-4 flex flex-col items-center">
      <h1 className="text-head-line text-[#ED2C2C] font-bold mb-[19px]">
        Not include this
      </h1>
      <div className="flex">
        <div className="mr-10 flex items-center flex-col">
          <Image
            src="/image/Icons/GDO.png"
            alt="gdo"
            width={32}
            height={32}
            objectFit="cover"
          />
          <h2 className="mt-1 text-callout text-dark-gray">GOD</h2>
        </div>
        <div className="flex items-center flex-col">
          <Image
            src="/image/Icons/Lactose.png"
            alt="lactose"
            width={32}
            height={32}
            objectFit="cover"
          />
          <h2 className="mt-1 text-callout text-dark-gray">Lactose</h2>
        </div>
      </div>
    </div>
  );
};

export default Include;
