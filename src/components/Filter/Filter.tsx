import SidebarCatetories from "./SidebarCatetories";
import FilterButton from "./FilterButton";
import SidebarFilterGroup from "./SidebarFilterGroup";
import { BRANDS_LIST } from "../../demodata";
import CheckBoxGroup from "./CheckBoxGroup";
import { StarsWithText } from "../Widget";
import PriceSlider from "./PriceSlider";

const Filter = () => {
  return (
    <div className="w-[367px] p-6 bg-dark-white mr-6 rounded-lg">
      <h1 className="text-secondary font-bold text-title-3 pb-2">Filters</h1>
      <div className="my-[5px] flow-root">
        {/* <div className="my-[5px] flex items-center"> */}
        <FilterButton title="100% Organic" />
        <FilterButton title="TWER" />
        <FilterButton title="TWETWERR" />
        <FilterButton title="TW" />
        <FilterButton title="TW" />
        <FilterButton title="TWE" />
        <FilterButton title="TWET" />
        <FilterButton title="TWETyrtwt555" />
      </div>
      <SidebarCatetories current="Personal Care" />
      <SidebarFilterGroup
        title="Brands"
        list={BRANDS_LIST}
        categoryId={"brands"}
      />
      <SidebarFilterGroup
        title="Concerns"
        list={BRANDS_LIST}
        categoryId={"concerns"}
      />
      <SidebarFilterGroup
        title="Key Features"
        list={BRANDS_LIST}
        categoryId={"key_features"}
      />

      <CheckBoxGroup
        title="Delivery Method"
        list={[
          {
            checked: false,
            id: "in-express-shipping",
            title: "In Express Shipping",
          },
          {
            checked: true,
            id: "stanart-shipping",
            title: "Stanart Shipping",
          },
          {
            checked: false,
            id: "pickup-from-pharmacy",
            title: "Pickup from Pharmacy",
          },
        ]}
      />
      <CheckBoxGroup
        title="Sizes"
        list={[
          {
            checked: false,
            id: "small",
            title: "Small",
          },
          {
            checked: true,
            id: "medium",
            title: "Medium",
          },
          {
            checked: false,
            id: "large",
            title: "Large",
          },
        ]}
      />
      <div className=""></div>
      <PriceSlider />
      <CheckBoxGroup
        title="Ratings"
        list={[
          {
            checked: false,
            id: "rating-5",
            title: <StarsWithText title="4+ starts" rating={5} />,
          },
          {
            checked: true,
            id: "rating-4",
            title: <StarsWithText title="3-4 starts" rating={4} />,
          },
          {
            checked: false,
            id: "rating-3",
            title: <StarsWithText title="2-3 starts" rating={3} />,
          },
          {
            checked: false,
            id: "rating-2",
            title: <StarsWithText title="1-2 starts" rating={2} />,
          },
          {
            checked: false,
            id: "rating-1",
            title: <StarsWithText title="0-1 star" rating={0} />,
          },
        ]}
      />
    </div>
  );
};

export default Filter;
