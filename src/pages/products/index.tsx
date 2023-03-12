import type { NextPage } from "next";
import Filter from "components/Filter/Filter";
import SliderBanner from "components/SliderBanner";
import { CategoryItem, GradientBox, SubTitle } from "components/Widget";
import { RECOMMENDED_FOR_YOU, SHOP_BY_CONDITION } from "../../demodata";
import Link from "next/link";
import ProductItem from "components/ProductItem";
import Layout from "components/Layout";

const Home: NextPage = () => {
  return (
    <Layout className="pb-0">
      <div className="">
        {/* beginning slider banner */}
        <div className="bg-dark-white">
          <SliderBanner />
        </div>
        {/* end slider banner */}

        {/* beginning Main content */}
        <div className="bg-white">
          <div className="container mx-auto">
            {/* beginning *Shop by Condition* banner */}
            <div className="py-6">
              <SubTitle>Shop by Condition</SubTitle>
              <div className="flex flex-wrap py-4">
                {SHOP_BY_CONDITION.map((item, key) => (
                  <CategoryItem
                    key={key}
                    title={item.title}
                    image={item.image}
                    permilink={item.permilink}
                    className="mx-2"
                  />
                ))}
              </div>
            </div>
            {/* end *Shop by Condition* banner */}
          </div>
        </div>

        {/* beginning filter sidebar */}
        <div className="bg-white">
          <div className="container mx-auto">
            <div className="pb-2 mb-6 pt-8">
              <h1 className="text-title-1 text-dark-gray font-semibold">
                Personal Care
              </h1>
              <div>
                <Link href="/">
                  <a className="text-title-3 text-light-gray">Home</a>
                </Link>
                <span className="text-title-3 text-light-gray"> &#62; </span>
                <Link href="/">
                  <a className="text-title-3 text-light-gray">Personal Care</a>
                </Link>
              </div>
            </div>
            <div className="flex">
              <Filter />
              <div className="w-[calc(100%-390px)] mb-6">
                <div className="flex justify-between">
                  <h5 className="text-headline font-bold text-dark-gray px-4 pt-4 pb-2">
                    Showing 423 results
                  </h5>
                </div>
                <div className="grid grid-cols-4 gap-[26px]">
                  {RECOMMENDED_FOR_YOU.map(
                    (item, key) =>
                      key < 12 && (
                        <ProductItem
                          key={key}
                          title={item.title}
                          image={item.image}
                          price={item.price}
                          discount={item.discount}
                          cartAble={item.cartAble}
                          prescriptionNeeded={item.prescriptionNeeded}
                        />
                      )
                  )}
                </div>
                <div className="grid grid-cols-2 gap-[50px] my-10">
                  <GradientBox
                    title="Discover PEAK 365 SUpplement System"
                    image="/image/slider/01.jpg"
                  />
                  <GradientBox
                    title="Discover PEAK 365 SUpplement System"
                    image="/image/slider/01.jpg"
                  />
                </div>
                <div className="grid grid-cols-4 gap-[26px]">
                  {RECOMMENDED_FOR_YOU.map(
                    (item, key) =>
                      key < 12 && (
                        <ProductItem
                          key={key}
                          title={item.title}
                          image={item.image}
                          price={item.price}
                          discount={item.discount}
                          cartAble={item.cartAble}
                          prescriptionNeeded={item.prescriptionNeeded}
                        />
                      )
                  )}
                </div>
              </div>
            </div>
            {/* beginning Partner group */}
            {/* <div className="grid grid-cols-4 gap-14 py-6"> */}
            {/* eslint-diable-next-line */}
            {/* <img src="/image/partners/p-1.png" alt="" /> */}
            {/* eslint-diable-next-line */}
            {/* <img src="/image/partners/p-2.png" alt="" /> */}
            {/* eslint-diable-next-line */}
            {/* <img src="/image/partners/p-3.png" alt="" /> */}
            {/* eslint-diable-next-line */}
            {/* <img src="/image/partners/p-4.png" alt="" /> */}
            {/* </div> */}
            {/* end Partner group */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
