import type { NextPage } from "next";
import Layout from "../components/Layout";
import {
  Header,
  Features,
  About,
  Shop,
  Exhibitions,
  Contact,
} from "../sections";
import { slideOptions } from "../utils/constants";

const Home: NextPage = () => {
  return (
    <Layout title={"Home"} parentClass={"container"}>
      <Header options={slideOptions}/>
      <Features />
      <About />
      <Shop />
      <Exhibitions />
      <Contact />
    </Layout>
  );
};

export default Home;
