import React from "react";
import Layout from "../../components/Layout";
import Products from "./products/products";

const Store = () => {
    return (
        <Layout title="Shop" className="main-container">
            <div className="page-center">
                <div className="text-center mt-5"></div>
                <Products />
            </div>
        </Layout>
    );
};

export default Store;
