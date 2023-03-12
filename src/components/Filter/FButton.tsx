import { useEffect, useState } from "react";
import { FilledIcon } from "../SvgIcons";

const FButton = ({ title }: { title: string }) => {
  const [onClose, setOnClose] = useState(true);

  useEffect(() => {
    if (!onClose) {
      let btClose = document.getElementById(title);
      btClose?.classList.add("hidden");
    }
    // eslint-disable-next-line
  }, [onClose]);

  return (
    <div
      id={title}
      className="bg-green-900 rounded-full flex items-center justify-between w-max my-[5px] mr-[8px]"
    >
      <h1 className="text-white ml-3 mr-[4px] my-[0.28125rem] text-callout">
        {title}
      </h1>
      <button className="m-[2px]" onClick={() => setOnClose(false)}>
        <FilledIcon />
      </button>
    </div>
  );
};

export default FButton;
