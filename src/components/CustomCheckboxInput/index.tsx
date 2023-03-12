import { useState, useEffect } from "react";
interface PageProps {
  label?: any;
  onClick?: () => void;
  className?: string;
  color?: string;
  checked?: boolean;
}
const CheckBox = ({
  label = "",
  onClick = () => {},
  className = "",
  color = "#FFFFFF",
  checked = false,
}: PageProps) => {
  const [check, setCheck] = useState(false);
  useEffect(() => {
    setCheck(checked);
    // eslint-disable-next-line
  }, []);
  return (
    <div className="">
      <div className="flex items-center mb-2">
        <input
          type="checkbox"
          name="A3-confirmation"
          onClick={() => {
            onClick();
            setCheck((prev) => !prev);
          }}
          checked={check}
          className="opacity-0 absolute h-[14px] w-[14px]"
        />
        <div
          className={`${
            check ? "bg-apollo-primary" : "bg-white"
          } border-2 rounded border-apollo-primary h-[18px] w-[18px] flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-apollo-primary ${className}`}
        >
          <svg
            className="fill-current hidden w-3 h-3 text-apollo-primary pointer-events-none"
            version="1.1"
            viewBox="0 0 17 12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fillRule="evenodd">
              <g transform="translate(-9 -11)" fill={color} fillRule="nonzero">
                <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
              </g>
            </g>
          </svg>
        </div>
        <label className="select-none">{label}</label>
      </div>
    </div>
  );
};
export default CheckBox;
