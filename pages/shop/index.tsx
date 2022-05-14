import React from "react";
import Layout from "../../components/Layout";
import Products from "./products";

const Store = () => {
    return (
        <Layout title="Shop" className="main-container">
            <div className="page-center">
                Store
                <Products />
            </div>
        </Layout>
    );
};

export default Store;
