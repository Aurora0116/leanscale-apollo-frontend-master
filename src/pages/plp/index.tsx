import type { NextPage } from "next";
import Filter from "components/Filter/Filter";
import SliderBanner from "components/SliderBanner";
import { CategoryItem, SubTitle } from "components/Widget";
import { SHOP_BY_CONDITION } from "../../demodata";
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
        <Filter />
      </div>
    </Layout>
  );
};

export default Home;
