/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { SliderLeftIcon, SliderRightIcon } from "./SvgIcons";

export default function SliderBanner() {
  const [sliderId, setSliderId] = useState(0);
  const [slider, setSlider] = useState([
    {
      image: "/image/slider/01.jpg",
      content: "",
    },
    {
      image: "/image/slider/03.jpg",
      content: "",
    },
    {
      image: "/image/slider/02.jpg",
      content: "",
    },
  ]);

  const changeSlider = (num: number) => {
    setSliderId((3 + num + sliderId) % 3);
  };

  const selectSlider = (num: number) => {
    setSliderId(num);
  };

  useEffect(() => console.log(sliderId), [sliderId]);

  return (
    <div className="bg-dark-white py-8">
      <div className="container mx-auto relative max-w-[1280px]">
        <button
          className="absolute left-0 top-[calc(50%-40px)] hover:opacity-50"
          onClick={() => changeSlider(-1)}
        >
          <SliderLeftIcon />
        </button>
        <button
          className="absolute right-0 top-[calc(50%-40px)] hover:opacity-50"
          onClick={() => changeSlider(1)}
        >
          <SliderRightIcon />
        </button>
        <div className="rounded-lg overflow-hidden flex mx-20 w-[calc(100%-160px)] relative h-[440px]">
          {slider.map((item, key) => (
            <div className="w-full absolute left-0 top-0" key={key}>
              {key === sliderId && (
                <img
                  src={item.image}
                  className="w-full h-full object-cover"
                  alt=""
                />
              )}
            </div>
          ))}
        </div>
        <div className="flex mt-5 mx-auto justify-center">
          {slider.map((item, key) => (
            <div className="" key={key} onClick={() => selectSlider(key)}>
              <img src={item.image} className="w-24 h-11 rounded mx-2" alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
