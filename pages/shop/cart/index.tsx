import Layout from "../../../components/Layout";

const CartPage = () => {
    return (
        <Layout className="main-container">
            <div className="page-center">
                <div className="text-center mt-5">
                    <h1>Cart</h1>
                    <p>This is the Cart Page.</p>
                </div>
                <div className="text-center">
                    <button type="button" className="btn btn-primary mb-2">
                        CHECKOUT
                    </button>
                    <button type="button" className="btn btn-outline btn-sm">
                        CLEAR
                    </button>
                </div>
            </div>
        </Layout>
    );
};

export default CartPage;
