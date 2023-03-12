import PhoneInput from "react-phone-input-2";

interface CustomPhoneInput {
  value: string | undefined;
  otp?: number | undefined;
  width?: boolean | undefined;
  fullWidth?: boolean | undefined;
  onChange?: (value: string) => void;
  className?: string;
}

const CustomPhoneInput = ({
  value,
  otp,
  width,
  onChange = () => {},
  className = "",
  fullWidth = false,
}: CustomPhoneInput) => {
  return (
    <PhoneInput
      // country={"sa"}
      value={value}
      onChange={(phone) => onChange(phone)}
      placeholder="Phone Number"
      inputStyle={{
        width: !fullWidth
          ? otp
            ? "255px"
            : width
            ? "255px"
            : "520px"
          : "100%",
        border: "none",
        background: "#F7F7F8",
        height: "unset",
      }}
      inputClass={`py-2 block h-10 rounded pl-10 px-2 text-sm placeholder-light-gray font-bold text-dark-gray ${className}`}
    />
  );
};
export default CustomPhoneInput;
