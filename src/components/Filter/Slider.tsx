import { useCallback, useState } from "react";
import RangeSlider from "./RangeSlider";

const Slider = () => {
  const [range, setRange] = useState([1000, 2000]);

  const handleChange = (range: any) => {
    setRange(range);
  };

  const formatValue = useCallback((v: any) => {
    return formatter.format(v);
  }, []);

  return (
    <div className="px-4 my-4">
      <RangeSlider
        minValue={0}
        maxValue={4000}
        range={range}
        onChange={handleChange}
        formatValue={formatValue}
      />
    </div>
  );
};

const formatter = new Intl.NumberFormat("en", {
  style: "currency",
  currency: "SAR",
  maximumFractionDigits: 0,
});

export default Slider;
