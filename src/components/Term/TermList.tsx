const TermList = ({
  id,
  type,
  title,
  child,
}: {
  id: string;
  type: string;
  title: string;
  child?: string;
}) => {
  return (
    <>
      {type === "1" ? (
        <h4 className="mb-4 mt-7">
          <a className="mr-24 min-w-[15px]">{id}</a>
          {title}
        </h4>
      ) : (
        <>
          {type === "2" ? (
            <h4 className="mb-2">
              <a className="mr-[80px] max-w-fit">
                {id}.{child}
              </a>
              {title}
            </h4>
          ) : (
            <>
              {type === "3" ? (
                <h4 className="mb-2">
                  <a className="mr-6">{id}</a>
                  {title}
                </h4>
              ) : (
                <>
                  {type === "4" ? (
                    <h4 className="mb-1 ml-44">
                      <a className="mr-3 text-right">{id}</a>
                      {title}
                    </h4>
                  ) : (
                    <>
                      {type === "5" ? (
                        <h4 className="mb-1">
                          <a className="mr-3 text-right">{id}</a>
                          {title}
                        </h4>
                      ) : (
                        <></>
                      )}
                    </>
                  )}
                </>
              )}
            </>
          )}
        </>
      )}
    </>
  );
};

export default TermList;
