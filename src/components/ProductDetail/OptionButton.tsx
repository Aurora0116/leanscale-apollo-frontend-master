const OptionButton = ({ title, act }: { title: string; act: boolean }) => {
  return (
    <>
      {act ? (
        <>
          <div className="border-solid border-secondary px-4 py-[10px] border-2 w-fit rounded-lg float-left my-2 mr-2">
            {title}
          </div>
        </>
      ) : (
        <>
          <div className="border-solid border-lightest-gray px-4 py-[10px] border-2 w-fit rounded-lg float-left my-2 mr-2">
            {title}
          </div>
        </>
      )}
    </>
  );
};

export default OptionButton;
