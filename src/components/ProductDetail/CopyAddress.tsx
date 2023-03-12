import copy from "copy-to-clipboard";
import { CopyIcon } from "components/SvgIcons";
import { useState } from "react";

const CopyAddress = ({ address }: { address: string }) => {
  const [isCopied, setIsCopied] = useState(false);
  const handleCopy = (text: string) => {
    copy(text);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <div className="flex items-center" onClick={() => handleCopy(address)}>
      {address}
      <span className="copy-icon" style={{ marginLeft: 10 }}>
        {!isCopied ? <CopyIcon /> : <> </>}
      </span>
    </div>
  );
};

export default CopyAddress;
