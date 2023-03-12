import AboutUs from "components/Term/AboutUs";
import { NextPage } from "next";
import Layout from "components/Layout";

const Home: NextPage = () => {
  return (
    <Layout className="pb-0">
      <div className="bg-white px-36 pb-5">
        <AboutUs />
      </div>
    </Layout>
  );
};

export default Home;
