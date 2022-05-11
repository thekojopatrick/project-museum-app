import type { NextPage } from "next";
import Layout from "../components/Layout";
import { slideOptions } from "../utils/constants";
import {
  Header,
  Features,
  About,
  Shop,
  Exhibitions,
  Contact,
} from "../sections";

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
