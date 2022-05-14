import React from "react";
import Layout from "../../components/Layout";
import Products from "./products/products";

const Store = () => {
    return (
        <Layout title="Shop" className="main-container">
            <div className="page-center">
                <div className="text-center mt-5">
                    <h1>Rijks GiftStore</h1>
                    <p>This is the Store Page.</p>
                </div>
                <Products />
            </div>
        </Layout>
    );
};

export default Store;
