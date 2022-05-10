import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import { Header } from "../sections";

const Home: NextPage = () => {
  return (
    <Layout title={"Home"} parentClass={"container"}>
      <Header />
    </Layout>
  );
};

export default Home;
