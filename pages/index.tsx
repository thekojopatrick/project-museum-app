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

const Home: NextPage = () => {
  return (
    <Layout title={"Home"} parentClass={"container"}>
      <Header />
      <Features />
      <About />
      <Shop />
      <Exhibitions />
      <Contact />
    </Layout>
  );
};

export default Home;
