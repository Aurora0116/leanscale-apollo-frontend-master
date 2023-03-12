const EarnCut = ({ symbol, price }: { symbol: string; price: number }) => {
  return (
    <div className="w-[120px] h-11 rounded-lg bg-card-gradient pr-[6px] py-[6px] flex">
      <div className="w-6 h-6 rounded-3xl bg-white flex items-center justify-center text-[#07CC85] text-headline font-bold border-2 border-solid border-[#07CC85] relative -left-3 top-1">
        +
      </div>
      <div className="flex items-end flex-col">
        <h3 className="text-dark-white text-caption-1 flex">
          Earn
          <p className="a text-dark-white font-bold text-caption-1">
            {symbol} {price}0
          </p>
        </h3>
        <h3 className="text-dark-white text-caption-1">LAKUM Points</h3>
      </div>
    </div>
  );
};

export default EarnCut;
