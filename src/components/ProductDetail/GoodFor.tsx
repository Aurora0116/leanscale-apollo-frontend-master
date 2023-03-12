import Image from "next/image";

const GoodFor = () => {
  return (
    <div className="m-2 my-4 px-[15px] py-4 border-solid border-2 border-primary shadow-default rounded-lg">
      <h1 className="text-primary font-bold text-heading-3 mb-4">Good For</h1>
      <div className="flex items-center mb-4">
        <Image
          src="/image/Icons/Muscle.png"
          alt="muscle"
          width={42}
          height={42}
          objectFit="cover"
        />
        <div className="ml-[11px]">
          <h2 className="text-body-mobile text-dark-gray font-bold mb-1">
            Muscle Function
          </h2>
          <h3 className="text-caption-1 text-dark-gray">
            Vitamins D and B6 help support muscle function*
          </h3>
        </div>
      </div>
      <div className="flex items-center mb-4">
        <Image
          src="/image/Icons/Heart.png"
          alt="muscle"
          width={42}
          height={42}
          objectFit="cover"
        />
        <div className="ml-[11px]">
          <h2 className="text-body-mobile text-dark-gray font-bold mb-1">
            Heart Health
          </h2>
          <h3 className="text-caption-1 text-dark-gray">
            B-Vitamins to help promote heart health+*
          </h3>
        </div>
      </div>
      <div className="flex items-center">
        <Image
          src="/image/Icons/Vitality.png"
          alt="muscle"
          width={42}
          height={42}
          objectFit="cover"
        />
        <div className="ml-[11px]">
          <h2 className="text-body-mobile text-dark-gray font-bold mb-1">
            Vitality
          </h2>
          <h3 className="text-caption-1 text-dark-gray">
            B-Vitamins to support energy and overall well being*
          </h3>
        </div>
      </div>
    </div>
  );
};

export default GoodFor;
