import "rc-slider/assets/index.css";
import Slider from "./Slider";

export default function PriceSlider() {
  return (
    <>
      <h5 className="pt-4 pb-2 font-bold text-dark-gray text-headline">
        Price
      </h5>
      <Slider />
    </>
  );
}
